<?php

$name= $_POST['name'];
$email= $_POST['email'];
$contact= $_POST['contact'];



$conn= new mysqli('localhost' , 'root' ,'', 'procrastinot');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);

}else{
    $stmt = $conn->prepare("INSERT INTO registration(name,email,contact) values(? ,? ,?)");
    $stmt->bind_param("ssi",$name, $email , $contact );
    $stmt->execute();
    echo "Registration Successfully Completed ! ......";
    $stmt->close();
    $conn->close();
    
}
?>