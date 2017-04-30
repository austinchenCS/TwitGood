<?php
// Routes
ini_set('display_errors', 'On');
error_reporting(E_ALL);

$app->get('/[{name}]', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});

// Creates a new user
$app->post('/user/', function($request, $response) {
    $data = $request->getParsedBody();
    // Check if the email is unique 

    $emailsql = "SELECT * FROM Users WHERE email =:email";
    $emailqry = $this->db->prepare($emailsql);
    $emailqry->bindParam("email", $data['email']);
    $emailqry->execute();
    $emailrslt = $emailqry->fetchAll();
    
    if ($emailqry->rowCount() > 0)
    {
        $valid = json_encode(array('success' => False, 'location' => 'email'));
        return $this->response->withJson($valid)->withHeader('Content-type', 'application/json');
        echo "You messed up";
    }
    
    // Check if the twitter handle is unique 
    $handlesql = "SELECT * FROM Users WHERE twitter_handle =:twitter_handle";
    $handleqry = $this->db->prepare($handlesql);
    $handleqry->bindParam("twitter_handle", $data['twitter_handle']);
    $handleqry->execute();
    $handlerslt = $handleqry->fetchAll();
    if ($handleqry->rowCount() > 0)
    {
        $valid = json_encode(array('success' => False, 'location' => 'handle'));
        return $this->response->withJson($valid)->withHeader('Content-type', 'application/json');
        echo "You messed up";
    }

    $sql = "INSERT INTO Users (email, first_name, password, twitter_handle, api_key, api_secret, created_at) VALUES (:email, :first_name, :password, :handle, :key, :secret, NOW())";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("email", $data['email']);
    $sth->bindParam("first_name", $data['first_name']);

    // Hash the password
    $password_temp = $data['password'];
    $hashed_password = password_hash($password_temp, PASSWORD_DEFAULT);
    $sth->bindParam("password", $hashed_password);

    $sth->bindParam("handle", $data['twitter_handle']);
    $sth->bindParam("key", $data['api_key']);
    $sth->bindParam("secret", $data['api_secret']);
    $sth->execute();
     
    $valid = json_encode(array('success' => True, 'location' => 'N/A'));
    return $this->response->withJson($valid)->withHeader('Content-type', 'application/json');
});

// Given the Twitter handle, returns a user's account information
$app->get('/user/info/[{twitter_handle}]', function($request, $response, $args) {
    $sth = $this->db->prepare("SELECT * FROM Users WHERE twitter_handle=:twitter_handle");
    $sth->bindParam("twitter_handle", $args['twitter_handle']);
    $sth->execute();
    $todos = $sth->fetchObject();
    echo "\n";
    $valid = json_encode($todos);
    //$newResponse = $valid->withHeader('Content-type', 'application/json');
    return $this->response->withJson($valid)->withHeader('Content-type', 'application/json');
});

// Authenticates a user
$app->post('/users/auth/', function($request, $response) {
    $data = $request->getParsedBody(); 
    $sth = $this->db->prepare("SELECT * FROM Users WHERE email=:email");
    $sth->bindParam("email", $data['email']);

    $sth->execute();

    $obj = $sth->fetchObject();
    
    $password_in = $data['password'];
    $password = $obj->password;
    
    $is_valid = password_verify($password_in, $password);

    if ($is_valid)
    {
        return $this->response->withJson(json_encode(array( 'success' => True, 'twitter_handle' => $obj->twitter_handle)));
    }

    if ($is_valid != true)
    {
        $valid = json_encode(array('success' => False, 'twitter_handle' => 'NULL'));
        return $this->response->withJson($valid);  
    }

});


// Retrieve User Data
$app->get('/user/[{twitter_handle}]', function($request, $response, $args) {
    $sth = $this->db->prepare("SELECT * FROM Users WHERE twitter_handle=:twitter_handle");
    $sth->bindParam("twitter_handle", $args['twitter_handle']);
    $sth->execute();
    $obj = $sth->fetchObject();

    if ($sth->rowCount() >= 1)
    {
        $id = $obj->user_id;
        $sth = $this->db->prepare("SELECT * FROM TweetData WHERE user_id=:user_id");
        $sth->bindParam("user_id", $id);
        $sth->execute();
        $obj = $sth->fetchObject();

        print $obj->user_id; 

        $sth = $this->db->prepare("SELECT * FROM HourlyData WHERE user_id=:user_id");
        $sth->bindParam("user_id", $id);
        $sth->execute();
        $hourdata = $sth->fetchAll();
        $houract = [];
        $hoursucc = []; 
        for ($i = 0; $i < 24; $i++) {
            foreach($hourdata as $row) {
                if( $i == $row['hour'] ) {
                    array_push($houract, $row['activity']);
                    array_push($hoursucc, $row['success']);
                    break;  
                }
            }
        }

        $sth = $this->db->prepare("SELECT * FROM WeeklyData WHERE user_id=:user_id");
        $sth->bindParam("user_id", $id);
        $sth->execute();
        $weeklydata = $sth->fetchAll();
        $weeklyact = [];
        $weeklysucc = []; 
        for ($i = 0; $i < 6; $i++) {
            foreach($weeklydata as $row) {
                if( $i == $row['day'] ) {
                    array_push($weeklyact, $row['activity']);
                    array_push($weeklysucc, $row['success']);
                    break;  
                }
            }

        }
        $sth = $this->db->prepare("SELECT * FROM TopWords WHERE user_id=:user_id");
        $sth->bindParam("user_id", $id);
        $sth->execute();
        $wordData = $sth->fetchAll();
        $sth = $this->db->prepare("SELECT * FROM TopHashtags WHERE user_id=:user_id");
        $sth->bindParam("user_id", $id);
        $sth->execute();
        $hashtagData = $sth->fetchAll();
        $topwords = [];
        $tophashtags = [];
        for ($i = 0; $i < 5; $i++) {
            foreach($wordData as $row) {
                if ( $i == $row['rank'] ) {
                    array_push($topwords, $row['word']); 
                    break;
                }
            }
            foreach($hashtagData as $row) {
                if ( $i == $row['rank'] ) {
                    array_push($tophashtags, $row['hashtag']);
                    break;
                }
            }
        }

        $datarr = array('top_favorited_tweet' => $obj->top_faved, 'top_retweeted_tweet' => $obj->top_rted, 'top_successful_tweet' => $obj->top_success, 'hourlysuccess' => $hoursucc, 'hourlyactivity' => $houract, 'weeklysuccess' => $weeklysucc, 'weeklyactivity' => $weeklyact, 'tophashtags' => $tophashtags, 'topwords' => $topwords, 'accountage' => $obj->account_age, 'positive' => $obj->tweets_positive );
        return $this->response->withJson($datarr)->withHeader('Content-type', 'application/json'); 
    }
    else
    {
        echo "y do u keep messing up";
    }
    // Object that will eventually be returned
    //$dataobj
});

