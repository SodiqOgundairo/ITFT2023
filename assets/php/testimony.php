<?php

header('Access-Control-Allow-Origin: *');

// Retrieve the form data
$name = $_POST['name'];
$content = $_POST['content'];

// Connect to the MySQL database
$servername = "lightlifechurch.com";
$username = "lightlif_lightlif";
$password = "lightlif_lightlif";
$dbname = "lightlif_blog";

$connection = new mysqli($servername, $username, $password, $dbname);

// Check if the connection was successful
if ($connection->connect_error) {
  die("Connection failed: " . $connection->connect_error);
}

// The connection was successful
// echo "Connected to the database successfully!";

// Check for errors
if ($connection->connect_error) {
  die('Connection failed: ' . $connection->connect_error);
}
 
// Construct the SQL query
$sql = "INSERT INTO blogs ( name, content) VALUES ('$name', '$content')";

// Execute the query
if ($connection->query($sql) === TRUE) {
  http_response_code(200);
  echo 'Data added successfully';
} else {
  http_response_code(500);
  echo 'Error adding data: ' . $connection->error;
}

// Close the database connection
$connection->close();
?>
