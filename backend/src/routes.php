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
        return $this->response->withJson($valid);
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
        return $this->response->withJson($valid);
        echo "You messed up";
    }

    $sql = "INSERT INTO Users (email, first_name, password, twitter_handle, api_key, api_secret, created_at) VALUES (:email, :first_name, :password, :handle, :key, :secret, NOW())";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("email", $data['email']);
    $sth->bindParam("first_name", $data['first_name']);
    $sth->bindParam("password", $data['password']);
    $sth->bindParam("handle", $data['twitter_handle']);
    $sth->bindParam("key", $data['api_key']);
    $sth->bindParam("secret", $data['api_secret']);
    $sth->execute();
     
    $valid = json_encode(array('success' => True, 'location' => 'N/A'));
    return $this->response->withJson($valid);
});

// Given the Twitter handle, returns a user's account information
$app->get('/user/info/[{twitter_handle}]', function($request, $response, $args) {
    $sth = $this->db->prepare("SELECT * FROM Users WHERE twitter_handle=:twitter_handle");
    $sth->bindParam("twitter_handle", $args['twitter_handle']);
    $sth->execute();
    $todos = $sth->fetchObject();
    echo "\n";
    return $this->response->withJson($todos);
});

// Authenticates a user
$app->post('/users/auth/', function($request, $response) {
    $data = $request->getParsedBody(); 
    $sth = $this->db->prepare("SELECT * FROM Users WHERE email=:email AND password=:password");
    $sth->bindParam("email", $data['email']);
    $sth->bindParam("password", $data['password']);
    $sth->execute();
    $obj = $sth->fetchObject();
    if ($sth->rowCount() == 1)
    {
        return $this->response->withJson(json_encode(array( 'success' => True, 'twitter_handle' => $obj->twitter_handle)));
    }
    $valid = json_encode(array('success' => False, 'twitter_handle' => 'NULL'));
    return $this->response->withJson($valid); 
});

