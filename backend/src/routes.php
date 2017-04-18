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

$app->post('/user/', function($request, $response) {
    $data = $request->getParsedBody();
    // Check if the email is unique 
    $emailqry = "SELECT * FROM Users WHERE email =:email";
    $emailqry->bindParam("email", $data['email']);
    $emailqry->execute();
    $emailrslt = $emailqry->fetchAll();
    if ($emailrslt.count() > 0)
    {
        $valid = json_encode(array('success' => False));
        return $this->response->$valid;
        echo "You messed up";
    }
    
    // Check if the twitter handle is unique 
    $handleqry = "SELECT * FROM Users WHERE twitter_handle =:twitter_handle";
    $handleqry->bindParam("twitter_handle", $data['twitter_handle']);
    $handleqry->execute();
    $handlerslt = $handleqry->fetchAll();
    if ($handlerslt.count() > 0)
    {
        $valid = json_encode(array('success' => False));
        return $this->response->$valid;
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
     
    return $this->response->withJson($data);
});

$app->get('/user/info/[{twitter_handle}]', function($request, $response, $args) {
    $sth = $this->db->prepare("SELECT * FROM Users WHERE twitter_handle=:twitter_handle");
    $sth->bindParam("twitter_handle", $args['twitter_handle']);
    $sth->execute();
    $todos = $sth->fetchObject();
    echo "\n";
    return $this->response->withJson($todos);
});



