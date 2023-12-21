<?php
require 'db.php';
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    $query_sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($query_sql);

    if ($result->rowCount() > 0) {
        header('Location: home.html');
    } else {
        // echo "Username & password salahh";
        header('Location: signin.html');
    }
}
?>