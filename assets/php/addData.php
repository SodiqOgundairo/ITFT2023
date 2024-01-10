<?php

header('Access-Control-Allow-Origin: *');

// Retrieve the form data
$name = $_POST['name'];
$grade = $_POST['grade'];

// Database credentials
$host = 'localhost';
$username = 'root'; 
$password = '';
$dbname = 'yemi';

// Create database connection 
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}  

// Prepare insert statement 
$sql = "INSERT INTO students ( student_name, student_grade) VALUES ('$name', '$grade')";

//! Execute the query wihout redirection statement
if ($conn->query($sql) === TRUE) {
    http_response_code(200);
    echo '<link rel="stylesheet" href="styles.css">';
    echo 'Data added successfully';
    echo '<a href="../index.html">Go home</a>';
    echo '<a href="../courses.html">Add another data </a>';

  } else {
    http_response_code(500);
    echo 'Error adding data: ' . $connection->error;
  }

  
  //! Execute the query with redicretion statement
  // if ($conn->query($sql) === TRUE) {
  //     // Redirect to course.html with success message
  //     header('Location: course.html?success=1');
  //     exit;
  // } else {
  //     // Redirect to course.html with error message
  //     header('Location: course.html?error=1');
  //     exit;
  // }

// Close connection 
$conn->close();

?>

