<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");  // Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Si la solicitud es de tipo OPTIONS (preflight request), responder inmediatamente
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

function connectDB() {
    $host = 'localhost';
    $user = 'root';
    $password = '12345';
    $dbname = 'cv';
    $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
    try {
        $pdo = new PDO($dsn, $user, $password, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]);
        return $pdo;
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => "Conexión fallida: " . $e->getMessage()]);
        exit;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $pdo = connectDB();
        $stmt = $pdo->query("SELECT * FROM cv_info LIMIT 1");
        $data = $stmt->fetch();
        echo json_encode($data);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["error" => "Error al obtener los datos: " . $e->getMessage()]);
    }
} 
?>
