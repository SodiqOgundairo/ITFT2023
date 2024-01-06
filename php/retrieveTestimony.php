<?php
header('Access-Control-Allow-Origin: *');


// Connect to the MySQL database
$servername = "lightlifechurch.com";
$username = "lightlif_lightlif";
$password = "lightlif_lightlif";
$dbname = "lightlif_blog";

// Create a new MySQLi object
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Construct the SQL query
$sql = "SELECT * FROM blogs";

// Execute the query and retrieve the result set
$result = $conn->query($sql);

// Create an array to store the retrieved data
$data = array();

// Loop through the result set and store the data in the array
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Return the data as a JSON object
echo json_encode($data);

// Close the database connection
$conn->close();

?>
