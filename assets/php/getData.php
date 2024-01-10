<?php

// Header for cross-origin requests (if needed)
header('Access-Control-Allow-Origin: *');

// Database credentials (replace with your actual values)
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'yemi';

// Connect to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare the SQL query
$sql = "SELECT * FROM students";

// Execute the query
$result = $conn->query($sql);

// Prepare the data array
$data = array();

// Fetch data if results exist
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    // Handle empty result set by returning an empty array
    $data = [];
}

// Send the data as JSON
echo json_encode($data);

// Close the database connection
$conn->close();

?>
