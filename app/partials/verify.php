
<?php
session_start();
if($_SERVER['REQUEST_METHOD'] == 'POST')
{
   $success_page = 'http://www.journalfrance.com/aria/aria/app/#view2';
   $error_page = 'http://www.journalfrance.com/aria/aria/app/#view8';
   $mysql_server = 'journalfrance.db.9939749.hostedresource.com';
   $mysql_username = 'journalfrance';
   $mysql_password = 'Gymfit!6';
   $mysql_database = 'journalfrance';
   $mysql_table = 'users';
   $crypt_pass = md5($_POST['password']);
   $found = false;
   $fullname = '';

   $db = mysql_connect($mysql_server, $mysql_username, $mysql_password);
   mysql_select_db($mysql_database, $db);
   $sql = "SELECT * FROM ".$mysql_table." WHERE username = '".$_POST['username']."'";
   $result = mysql_query($sql, $db);
   if ($data = mysql_fetch_array($result))
   {
      if ($crypt_pass == $data['password'] && $data['active'] != 0)
      {
         $found = true;
         $fullname = $data['fullname'];
        
      }
   }
   mysql_close($db);
   if($found == false)
   {
      header('Location: '.$error_page);
      exit;
   }
   else
   {
      session_start();
      session_register(username);
      session_register(fullname);
     
      
      $_SESSION['username'] = $_POST['username'];
     // $_SESSION['username'] = $_POST['ID'];
      
      $_SESSION['fullname'] = $fullname;
   
    
      
      $rememberme = isset($_POST['rememberme']) ? true : false;
      if ($rememberme)
      {
         setcookie('username', $_POST['username'], time() + 3600*24*30);
         setcookie('password', $_POST['password'], time() + 3600*24*30);
      }
      header('Location: '.$success_page);
      exit;
   }
}

$username = isset($_COOKIE['username']) ? $_COOKIE['username'] : '';
$password = isset($_COOKIE['password']) ? $_COOKIE['password'] : '';
$id = isset($_COOKIE['id']) ? $_COOKIE['id'] : '';

?>