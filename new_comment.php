<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "comments_database";

// Establishing a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the database connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted using the POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $comment = $_POST["comment"];

    // Check if "id" is set (indicating a delete request)
    if (isset($_POST["id"])) {
        // SQL to delete data from the table
        $deleteSql = "DELETE FROM new_table WHERE id = '{$_POST["id"]}'";
        // Call the function to handle the SQL query
        handleSql($conn, $deleteSql);
    } else {
        // SQL to insert data into the table
        $insertSql = "INSERT INTO new_table (name, comment) VALUES ('$name', '$comment')";
        // Call the function to handle the SQL query
        handleSql($conn, $insertSql);

        // Redirect to the same page to avoid form resubmission on refresh
        header("Location: " . $_SERVER['REQUEST_URI']);
        exit();
    }
}

// Function to handle SQL queries
function handleSql($conn, $sql) {
    if ($conn->query($sql) === TRUE) {
        echo ""; // Success (you might want to handle this differently)
    } else {
        echo "Error: $sql <br>" . $conn->error; // Display an error message
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords"
        content="احجزلي، احجزلي فيلا، احجزلي سواق، احجزلي شغاله، احجز مكاني اندونيسيا، فلل اندونيسيا، حجز فلل اندونيسيا، استئجار فلل اندونيسيا، احجز مكاني فيلا، فيلا اندونيسيا، فيلا اندونيسيا، حجز فلل استئجار فلل">
    <title>تعليقاتكم</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="full_Screen_Comment_Div">
        <!-- Go Back to Main Page -->
        <a href="#" class="exit_Full_Screen_Btn" onclick="goBack()">عودة</a>
        <div id="all_Comments_Info">
            <div id="all_Comments_Title">
                <!-- Page title -->
                <h1>شاركنا تجربتك مع خدمة موقع احجزلي</h1>
            </div>
            <!-- Contact Us -->
            <a class="villa_Details_Text_Contact_Us" href="https://wa.me/+6282246117155" target="_blank">تواصل معنا</a>
            <div id="comments_Image">
                <!-- Display an image related to comments -->
                <img src="comments/1.jpg" alt="تعليقات احجز مكاني" title="تعليقات احجز مكاني">
            </div>
            <div id="comments_Input_Div">
                <!-- Note button and comment form -->
                <a id="comments_Note_Btn" onclick="comments_Note()">ملاحظة</a>

                <form action="new_comment.php" method="POST" id="inputs_Form">
                    <input type="text" placeholder="اسمك" class="comments_Input" name="name" required>
                    <input type="text" placeholder="تعليقك" class="comments_Input" name="comment" required>
                    <div id="all_Input_Btn_Div">
                        <!-- Clear and Post buttons -->
                        <button id="clear_Comments_Input">مسح</button>
                        <button type="submit" id="post_Comment_Btn" name="post">نشر</button>
                    </div>
                </form>

            </div>
            <div id="people_Comments_Div">
                <?php
                // Check if it's a GET request
                if ($_SERVER["REQUEST_METHOD"] == "GET") {
                    // Retrieve existing comments from the database
                    $result = $conn->query("SELECT * FROM new_table");
                    while ($row = $result->fetch_assoc()):
                ?>
                <div class="posted_Comments_Div">
                    <!-- Display each comment with a Delete button -->
                    <h1> <span class="commenter_name" style="color: rgb(0, 255, 0)"><?php echo htmlspecialchars($row['name']); ?></span>
                        : <?php echo htmlspecialchars($row['comment']); ?></h1>
                    <button class="delete_Comment_Btn" name="<?= $row['id'] ?>">حذف</button>
                </div>
            <?php endwhile; ?>
                <?php } // End of GET request handling ?>
            </div>
        </div>
    </div>

    <!-- Include JavaScript files -->
    <script src="new_comment.js"></script>

    <script>
        /* Go Back To Main Page */
        function goBack() {
            window.history.back();
        }
        // Note Message
        comments_Note = function () {
            let ar_Comment_Note = "1- يرجى اظهار الاحترامي وعدم الاساءة للاخرين\n2- يرجى الانتباه بانك لن تكون قادر على تعديل او حذف تعليقك بعد النشر، ونحن فقط من نستطيع حذف التعليقات.";
            let en_Comment_Note = "\n\n1- Please show respect to everyone\n2- Please be informed that after posting your comment, you won't be able to edit or remove it, Ahjozly website is the only one who can remove comments.";
            alert(ar_Comment_Note + en_Comment_Note);
        }

       // Clear form inputs when the "مسح" (Clear) button is clicked
        document.getElementById("clear_Comments_Input").addEventListener("click", function () {
            document.getElementsByName("name")[0].value = "";
            document.getElementsByName("comment")[0].value = "";
        });

        var deleteButtons = document.querySelectorAll('.delete_Comment_Btn');
        deleteButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                // Prompt the user for confirmation
                var confirmation = prompt("موقع احجزلي هو الوحيد القادر على حذف التعليقات\n- ادخل كلمة السر:\n\nAhjozly website is the only one who can remove comments\n- enter the password:");

                // Check if the user entered text or clicked "Cancel"
                if (confirmation !== null) {
                    // Check if the entered text is 'bndr'
                    if (confirmation === "bndr" || confirmation === "aymn") {
                        var commentId = this.getAttribute('name');
                        var xhr = new XMLHttpRequest();
                        xhr.open('POST', 'new_comment.php', true);
                        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                        xhr.onload = function () {
                            if (xhr.status === 200) {
                                var commentDiv = button.closest('.posted_Comments_Div');
                                commentDiv.parentNode.removeChild(commentDiv);
                            } else {
                                console.error('Error deleting comment:', xhr.responseText);
                            }
                        };
                        xhr.send('id=' + encodeURIComponent(commentId));
                    } else {
                        // If the entered text is not 'bndr', do nothing
                        alert("- كلمة السر غير صحيحة\n\n- The password is not correct");
                    }
                }
            });
        });
    </script>
</body>
</html>
