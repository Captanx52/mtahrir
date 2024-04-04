<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the submitted words
    $words = $_POST['words'];

    // Database connection
    include 'db_connection.php';

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("خطا در ارتباط با پایگاه داده: " . $conn->connect_error);
    }

    // Prepare SQL statement to insert words into database
    $sql = "INSERT INTO words (word) VALUES ";

    // Prepare array of words
    $wordValues = array();
    $wordsArray = explode(",", $words);

    // Loop through each word, this loop iterates over each element in the $wordsArray array and for each iteration, the value of the current element is assigned to the variable $word and then the entire expression is concatenated into a string that forms a part of an SQL value, enclosed in parentheses
    foreach ($wordsArray as $word) {
        $wordValues[] = "('" . $conn->real_escape_string(trim($word)) . "')";
    }

    // Concatenate all words into SQL statement, the final SQL code constructed by the script would look something like this: INSERT INTO words (word) VALUES ('word1'),('word2'),('word3'),...;
    $sql .= implode(",", $wordValues);

    // Close connection
    $conn->close();

    // Redirect back to the import page with success message
    header("Location: import.php?success=true");
    exit();
} else {
    // Redirect to the import page if accessed directly without form submission
    header("Location: import.php");
    exit();
}
?>
