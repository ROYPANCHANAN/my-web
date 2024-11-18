
<?php
// Database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form data has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $user_name = $conn->real_escape_string($_POST['username']);
    $user_phone = $conn->real_escape_string($_POST['phone']);
    $user_email = $conn->real_escape_string($_POST['email']);
    $user_date = $conn->real_escape_string($_POST['date']);
    $user_time = $conn->real_escape_string($_POST['time']);
    $user_comment = $conn->real_escape_string($_POST['text']);

    // Insert data into the table
    $sql = "INSERT INTO form_submissions (username, phone, email, select_time, select_date, comment) VALUES ('$user_name', '$user_phone', '$user_email', '$user_date', '$user_time', '$user_comment')";

    if ($conn->query($sql) === TRUE) {
        echo "<p style='color: green;'>Your information has been submitted successfully!</p>";
    } else {
        echo "<p style='color: red;'>Error: " . $sql . "<br>" . $conn->error . "</p>";
    }
}

// Close connection
$conn->close();

?>
