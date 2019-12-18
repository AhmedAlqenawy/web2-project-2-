<?php

if(isset($_POST['evenetdata'])){
  //Convert it to an Associative Array
  $loc = json_decode($_POST['evenetdata'], true);
  //Save In MySQL
  $conn = new mysqli("localhost", "root", "rootroot", "webproject");
 	$str = "\n";

 if($conn->connect_error){
 	die($conn->connect_error);
  }
   for($i = 0; $i < count($loc); $i++){
     
	  foreach ($loc[$i] as $key => $value) {
	 if($key=="type")
		$v2=$value;
	 if($key=="time")
		$v3=$value;
	 if($key=="target")
		$v1=$value;
	 }
	 $sql = "Insert Into pdata values('$v1','$v2' ,'$v3')";
	$conn->query($sql);
	if($conn->affected_rows > 0){
		echo "Inserted Successfully";
	}
	else{
		echo "Sorry: Problem With Insertion";	
		} 
	}
	//echo $str ;
  
  //print_r($loc);
 /* foreach ($loc as $key => $value) {
  
  $sql = "Insert Into pdata values('$key','$value')";
  $conn->query($sql);
  if($conn->affected_rows > 0){
    echo "Inserted Successfully";
  }
  else{
    echo "Sorry: Problem With Insertion";	
  } 
}*/
}




if(isset($_GET['person'])){
  $sql = "Select * from pdata"; 
  $conn = new mysqli("localhost", "root", "rootroot", "webproject");
  if($conn->connect_error){
 	die($conn->connect_error);
  }
  if ($result = $conn->query($sql)){
    $rows = array();
    if($result->num_rows > 0){
     while($row = $result->fetch_assoc()){
      array_push($rows, $row);
     }
    //Convert to JSON Before Sending to Client
    echo json_encode($rows);
   }
 }
 else{
  echo "No Data to Retrieve";
 }
}










/*  for($i = 0; $i < count($loc); $i++){
     foreach ($loc[$i] as $key => $value) {
	 $str .= "$key:$value\n";	
	 }
      $str .= "-----------------------\n";
	}
	echo $str ;*/
?>