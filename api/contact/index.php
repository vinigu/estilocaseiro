<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) && empty($_POST['email'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = $_POST['name'];
	$to = "frontend@7ways.com.br,mofarrej@mofarrej.com.br,elisa@mofarrej.com.br,paulo@mofarrej.com.br";
	$from = $_POST['email'];
	// data


  $msg = "<h3>Dados do Formulário de contato</h3><br />Nome:<strong>" . $_POST["name"] . "</strong><br />" . "Email: <strong>" . $_POST["email"] . "</strong><br />" . "Telefone: <strong>" . $_POST["phone"] . "</strong><br />" . "Mensagem: <strong>" . $_POST["message"] . "</strong><br />";

	// Headers
	$headers.= 'Cc: mofarrej@mofarrej.com.br,elisa@mofarrej.com.br,paulo@mofarrej.com.br' . "\r\n";
	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echo json_encode(array(
		"sent" => true
	));
	}
  else
	{

	// tell the user about error

	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>