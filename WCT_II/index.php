<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./lab1.css" />
</head>
<body>
<?php
if(!empty($_POST["send"])){
    $subject = $_POST["subject"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];
    $toEmail = "saingsopheak02@gmail.com";

    $mailHeaders =  "Name: " . $subject .
    "\r\n Email: " . $email .
    "\r\n Phone: " . $phone .
    "\r\n Message: " . $message . "\r\n";

    if(mail($toEmail, $email, $mailHeaders )){
        $message = "Your Information is Recieved Sucessfully";
    }
}

?>

<h3>Contact Form</h3>
<div class="form-container">
  <form method="post" name="emailContact">
    <label for="subject">Subject</label>
    <input
      type="text"
      id="subject"
      name="subject"
      placeholder="your subject"
      required="true"
    />

    <label for="email">Email</label>
    <input
      type="text"
      id="email"
      name="email"
      placeholder="email"
      required="true"
    />

    <label for="phone">Phone</label>
    <input type="text" id="phone" name="phone" placeholder="phone" />

    <label for="message">Message</label>
    <textarea
      id="message"
      name="message"
      placeholder="Write your message..."
      style="height: 200px"
      required="true"
    ></textarea>
    <div>
        <input type="submit" name="send" value="Submit" />
        <?php if(!empty($message)){ ?>
            <div class="success">
                <strong><?php echo $message;?></strong>
            </div>
      <?php  } ?>
    </div>
  </form>
</div>
    
</body>
</html>