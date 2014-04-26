<?php
session_start();
?>
<?php
session_start();
if (!isset($_SESSION['username']))
{
   header('Location: ./login.php');
   exit;
}
?>
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
   session_start();
   unset($_SESSION['username']);
   header('Location: ./index.php');
   exit;
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8">
      <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <title>Journalfrance</title>
        <meta name="author" content="journalfrance">
          <link rel="stylesheet" href="./members.css" type="text/css">
            <link rel="stylesheet" href="./journalfrance_login_template.css" type="text/css">
</head>
  <body>
    <div id="container">
      <div id="wb_Shape1" style="margin:0;padding:0;position:absolute;left:5px;top:1652px;width:909px;height:24px;text-align:center;z-index:0;">
        <img src="images/img0208.gif" id="Shape1" alt="" title="" style="border-width:0;width:909px;height:24px">
      </div>
      <div id="wb_Text2" style="margin:0;padding:0;position:absolute;left:23px;top:1656px;width:187px;height:32px;text-align:left;z-index:1;">
        <font style="font-size:13px" color="#FFE4E1" face="Arial">Copyright journalfrance.com &#169; 2013</font>
      </div>
      <div id="wb_Text1" style="margin:0;padding:0;position:absolute;left:708px;top:23px;width:174px;height:16px;text-align:left;z-index:2;">
        <font style="font-size:13px" color="#FFFFFF" face="Arial">
          <a href="./register.php">Register</a>
        </font>
      </div>
      <div id="wb_TabMenu1" style="margin:0;padding:0;position:absolute;left:0px;top:55px;width:533px;height:63px;text-align:left;z-index:3;">
        <div id="TabMenu1">
          <ul>
            <li>
              <a href="./index.php" title="Home">
                <span>Home</span>
              </a>
            </li>
            <li id="active">
              <a href="./members.php" title="login">
                <span>Members Page</span>
              </a>
            </li>
            <li>
              <a href="./contact.php" title="contact">
                <span>Contact</span>
              </a>
            </li>
            <li>
              <a href="./about.php" title="about">
                <span>About</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="wb_Text3" style="margin:0;padding:0;position:absolute;left:67px;top:13px;width:250px;height:25px;text-align:left;z-index:4;">
        <font style="font-size:21px" color="#FFFFFF" face="Lucida Sans Unicode">
          <b>
            <i>Journal&nbsp; France</i>
          </b>
        </font>
      </div>
      <div id="wb_Image1" style="margin:0;padding:0;position:absolute;left:11px;top:0px;width:60px;height:60px;text-align:left;z-index:5;">
        <img src="images/flag.png" id="Image1" alt="" border="0" style="width:60px;height:60px;">
      </div>
      <div id="wb_LoginName1" style="margin:0;padding:0;position:absolute;left:6px;top:131px;width:245px;height:30px;text-align:left;z-index:6;">
        <span style="color:#387AC8;font-family:Arial;text-decoration:none;font-size:16px;">
          Welcome <?php
if (isset($_SESSION['username']))
{
   echo $_SESSION['username'];
}
else
{
   echo 'Not logged in';
}
?>!
        </span>
      </div>
      <div id="wb_Text4" style="margin:0;padding:0;position:absolute;left:708px;top:3px;width:174px;height:16px;text-align:left;z-index:7;">
        <font style="font-size:13px" color="#FFFFFF" face="Arial">
          <a href="./login.php">Login</a>
        </font>
      </div>


      <div id="wb_TextArt2" style="margin:0;padding:0;position:absolute;left:303px;top:110px;width:273px;height:24px;text-align:center;z-index:10;">
        <img src="images/img0002.png" id="TextArt2" alt="Members Page" title="Members Page" style="border-width:0;width:273px;height:24px">
      </div>
      <div id="wb_Logout1" style="margin:0;padding:0;position:absolute;left:767px;top:108px;width:65px;height:22px;text-align:left;z-index:11;">
        <form name="logoutform" method="post" action=""
          <?php echo basename(__FILE__); ?>" id="logoutform">
          <input type="submit" name="logout"value="Logout" id="logout" style="color:#FFFFFF;background-color:#000000;border-color:#DFE9F5;border-width:1px;border-style:solid;font-family:Arial;font-size:13px;width:67px;height:24px;" />
        </form>
      </div>
      <div id="wb_Text1" style="margin:0;padding:0;position:absolute;left:706px;top:43px;width:140px;height:16px;text-align:left;z-index:12;">
        <font style="font-size:13px" color="#000000" face="Arial">
          <a href="./changepassword.php"> Change Password </a>
        </font>
      </div>
    </div>
  </body>
</html>