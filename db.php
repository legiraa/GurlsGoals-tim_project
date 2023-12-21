<?php
$servername = "localhost:3307";
$username = "root";
$password = "";
$dbname = "gurlsgoalsprojek";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8mb4", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Koneksi berhasil"; // Komentari baris ini agar tidak tampil di HTML
} catch (PDOException $e) {
    echo "Koneksi gagal: " . $e->getMessage();
}
?>