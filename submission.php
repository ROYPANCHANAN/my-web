

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

// Delete record if delete button is clicked
if (isset($_GET['delete_id'])) {
    $delete_id = intval($_GET['delete_id']);
    $delete_sql = "DELETE FROM form_submissions WHERE id = $delete_id";
    if ($conn->query($delete_sql) === TRUE) {
        echo "<p style='color: green;'>Record deleted successfully!</p>";
    } else {
        echo "<p style='color: red;'>Error deleting record: " . $conn->error . "</p>";
    }
}

// Fetch submissions from the database, ordered by latest
$sql = "SELECT id, username, email, phone, select_time, select_date, comment, submission_date FROM form_submissions ORDER BY submission_date DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submissions</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        .delete-btn {
            color: white;
            background-color: red;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>

<h2>Form Submissions</h2>

<table>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Time</th>
        <th>Date</th>
        <th>Comment</th>
        <th>Submission Date</th>
        <th>Action</th>
    </tr>

    <?php
    if ($result->num_rows > 0) {
        // Output data for each row
        while($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . $row["id"] . "</td>";
            echo "<td>" . htmlspecialchars($row["username"]) . "</td>";
            echo "<td>" . htmlspecialchars($row["phone"]) . "</td>";
            echo "<td>" . htmlspecialchars($row["email"]) . "</td>";
            echo "<td>" . htmlspecialchars($row["select_time"]) . "</td>";
            echo "<td>" . htmlspecialchars($row["select_date"]) . "</td>";
            echo "<td>" . htmlspecialchars($row["comment"]) . "</td>";
            echo "<td>" . $row["submission_date"] . "</td>";
            echo "<td><a href='http://192.168.1.104:3000/submission.php?delete_id=" . $row["id"] . "' onclick=\"return confirm('Are you sure you want to delete this record?');\" class='delete-btn'>Delete</a></td>";
            echo "</tr>";
        }
    } else {
        echo "<tr><td colspan='6'>No submissions found</td></tr>";
    }
    ?>

</table>

<?php
// Close connection
$conn->close();
?>

</body>
</html>
