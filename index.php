<?php
// Include Header
include 'header.php';

// Database connection
include 'db_connection.php';

// Create connection
$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

// Check connection
if ($conn->connect_error) {
    die('ارتباط با پایگاه داده ناموفق بود: ' . $conn->connect_error);
}

// Retrieve words from the database
$sql = "SELECT * FROM words";
$result = $conn->query($sql);

$words = array();

if ($result->num_rows > 0) {
    // Store words in an array
    while ($row = $result->fetch_assoc()) {
        $words[] = $row["persian_word"];
    }
} else {
    echo "هیچ کلمه ای در پایگاه داده یافت نشد";
}

$conn->close();
?>

<script>
    // Pass words from database to word variable in js
    var words = <?php echo json_encode($words); ?>;
</script>

    <div id="word"></div>
    <div id="typed"></div>
    <!-- <input type="text" id="userInput">
    <button onclick="checkWord()">Submit</button> -->
    <script src="game.js"></script>

<?php
// Include Footer
include 'footer.php';
?>