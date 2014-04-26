<?php
   session_start();
   define('ADMIN_PASS', 'jourz16');
   $mysql_server = 'journalfrance.db.9939749.hostedresource.com';
   $mysql_username = 'journalfrance';
   $mysql_password = 'Gymfit!6';
   $mysql_database = 'journalfrance';
   $mysql_table = 'users';

   $admin_password = isset($_COOKIE['admin_password']) ? $_COOKIE['admin_password'] : '';

   if (empty($admin_password))
   {
      if (isset($_POST['admin_password']))
      {
         $admin_password = md5($_POST['admin_password']);
         if ($admin_password == md5(ADMIN_PASS))
         {
            setcookie('admin_password', $admin_password);
         }
      }
   }
   $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';
   $action = isset($_REQUEST['action']) ? $_REQUEST['action'] : '';
   $username = isset($_POST['username']) ? $_POST['username'] : '';
   $fullname = isset($_POST['fullname']) ? $_POST['fullname'] : '';
   $email = isset($_POST['email']) ? $_POST['email'] : '';
   $active = isset($_POST['active']) ? $_POST['active'] : 0;

   $db = mysql_connect($mysql_server, $mysql_username, $mysql_password);
   mysql_select_db($mysql_database, $db);
   if (!empty($action))
   {
      if ($action == 'delete')
      {
         $sql = "DELETE FROM ".$mysql_table." WHERE `username` = '$id'";
         mysql_query($sql, $db);
         mysql_close($db);
         header('Location: '.basename(__FILE__));
         exit;
      }
      else
      if ($action == 'update')
      {
         $sql = "UPDATE `".$mysql_table."` SET `username` = '$username', ";
         if (!empty($_POST['password']))
         {
            $crypt_pass = md5($_POST['password']);
            $sql = $sql . "`password` = '$crypt_pass',";
         }
         $sql = $sql . " `fullname` = '$fullname', `email` = '$email', `active` = $active WHERE `username` = '$id'";
         mysql_query($sql, $db);
         mysql_close($db);
         header('Location: '.basename(__FILE__));
         exit;
      }
      else
      if ($action == 'create')
      {
         $sql = "SELECT username FROM ".$mysql_table." WHERE username = '".$_POST['username']."'";
         $result = mysql_query($sql, $db);
         if ($data = mysql_fetch_array($result))
         {
            echo 'User already exists!';
            exit;
         }
         $crypt_pass = md5($_POST['password']);
         $sql = "INSERT `".$mysql_table."` (`username`, `password`, `fullname`, `email`, `active`) VALUES ('$username', '$crypt_pass',  '$fullname', '$email', $active)";
         mysql_query($sql, $db);
         mysql_close($db);
         header('Location: '.basename(__FILE__));
         exit;
      }
      else
      if ($action == 'logout')
      {
         session_unset();
         session_destroy();
         setcookie('admin_password', '', time() - 3600);
         header('Location: '.basename(__FILE__));
         exit;
      }
   }
?>

<?php

   if ($admin_password != md5(ADMIN_PASS))
   {
      echo "<center>\n";
      echo "<p>User administrator login</p>\n";
      echo "<form method=\"post\" action=\"" .basename(__FILE__) . "\">\n";
      echo "<input type=\"password\" name=\"admin_password\" size=\"20\" />\n";
      echo "<input type=\"submit\" value=\"Login\" name=\"submit\" />\n";
      echo "</form>\n";
      echo "</center>\n";
   }
   else
   {
      if (!empty($action))
      {
         if (($action == 'edit') || ($action == 'new'))
         {
            $sql = "SELECT * FROM ".$mysql_table." WHERE username = '".$id."'";
            $result = mysql_query($sql, $db);
            if ($data = mysql_fetch_array($result))
            {
               $username_value = $data['username'];
               $fullname_value = $data['fullname'];
               $email_value = $data['email'];
               $active_value = $data['active'];
            }
            echo "<center>\n";
            echo "<form action=\"" . basename(__FILE__) . "\" method=\"post\">\n";
            echo "<table border=\"0\">\n";
            if ($action == 'new')
            {
               echo "<input type=\"hidden\" name=\"action\" value=\"create\">\n";
            }
            else
            {
               echo "<input type=\"hidden\" name=\"action\" value=\"update\">\n";
            }
            echo "<input type=\"hidden\" name=\"id\" value=\"". $id . "\">\n";
            echo "<tr><td>Username:</td>\n";
            echo "<td><input type=\"text\" size=\"50\" name=\"username\" value=\"" . $username_value . "\"></td></tr>\n";
            echo "<tr><td>Password:</td>\n";
            echo "<td><input type=\"password\" size=\"50\" name=\"password\" value=\"\"></td></tr>\n";
            echo "<tr><td>Fullname:</td>\n";
            echo "<td><input type=\"text\" size=\"50\" name=\"fullname\" value=\"" . $fullname_value . "\"></td></tr>\n";
            echo "<tr><td>Email:</td>\n";
            echo "<td><input type=\"text\" size=\"50\" name=\"email\" value=\"" . $email_value . "\"></td></tr>\n";
            echo "<tr><td>Active:</td>\n";
            echo "<td><select name=\"active\" size=\"1\"><option " . ($active_value == "0" ? "selected " : "") . "value=\"0\">Not active</option><option " . ($active_value != "0" ? "selected " : "") . "value=\"1\">Active</option></select></td></tr>\n";
            echo "<tr><td>&nbsp;</td><td align=\"left\"><input type=\"submit\" name=\"cmdSubmit\" value=\"Save\">";
            echo "&nbsp;&nbsp;";
            echo "<input type=\"reset\" name=\"cmdReset\" value=\"Reset\">&nbsp;&nbsp;";
            echo "<input type=\"button\" name=\"cmdBack\" value=\"Back\" onclick=\"location.href='" . basename(__FILE__) . "'\"></td></tr>\n";
            echo "</table>\n";
            echo "</form>\n";
            echo "</center>\n";
         }
      }
      else
      {
         echo "<table width=\"100%\" cellspacing=\"0\" cellpadding=\"2\">\n";
         echo "<tr><th>Username</th>\n";
         echo "<th>Fullname</th>\n";
         echo "<th>Email</th>\n";
         echo "<th>Active</th>\n";
         echo "<th>Action</th></tr>\n";

         $sql = "SELECT * FROM ".$mysql_table;
         $result = mysql_query($sql, $db);
         while ($data = mysql_fetch_array($result))
         {
            echo "<tr>\n";
            echo "<td>" . $data['username'] . "</td>\n";
            echo "<td>" . $data['fullname'] . "</td>\n";
            echo "<td>" . $data['email'] . "</td>\n";
            echo "<td>" . ($data['active'] == "0" ? "not active" : "active") . "</td>\n";
            echo "<td>\n";
            echo "   <a href=\"" . basename(__FILE__) . "?action=edit&id=" . $data['username'] . "\">Edit</a> | \n";
            echo "   <a href=\"" . basename(__FILE__) . "?action=delete&id=" . $data['username'] . "\">Delete</a>\n";
            echo "</td>\n";
            echo "</tr>\n";
         }
         echo "</table>\n";
         echo "<p><a href=\"" . basename(__FILE__) . "?action=new\">Create new user</a>&nbsp;&nbsp;<a href=\"" . basename(__FILE__) . "?action=logout\">Logout</a></p>\n";
      }
   }

?>

