<?php
include('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    try {
        // Menggunakan prepared statement untuk mencegah SQL injection
        // $hashedPassword = password_hash($password, PASSWORD_DEFAULT); // Hash password sebelum disimpan
        $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)");

        if (!$stmt) {
            throw new Exception("Query preparation failed");
        }

        // Bind parameter ke placeholder
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $password); // Gunakan hashed password

        // Eksekusi statement
        if ($stmt->execute()) {
            echo "Registrasi berhasil!";
            
            // Redirect ke halaman sign-in jika registrasi berhasil
            header("Location: signin.html");
            exit(); // Pastikan untuk keluar setelah mengarahkan
        } else {
            throw new Exception("Query execution failed");
        }
    } catch (PDOException $e) {
        echo "Database Error: " . $e->getMessage();
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    } finally {
        // Tutup koneksi PDO dengan mengatur objek $conn menjadi NULL
        $conn = null;
    }
}
?>