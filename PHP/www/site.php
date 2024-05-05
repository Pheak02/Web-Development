<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learn PHP</title>
</head>
<body>
    <?php
    // VAR
    $characterName = "Sophie";
    $characterAge = "20";
    echo("<hr>");
    // WRITING HTML
    echo("There is a women named $characterName<br>");
    echo ("She was nearly $characterAge years old <br>");
    echo ("She really like here name but was doubt her life's choice<br>");
    echo ("But don't like turning $characterAge<br>");

    //WORKING W STRING
    echo("<hr>");
    $phrase = "Hello Miller Universe!";
    echo strtolower($phrase);
    echo strtoupper($phrase);
    echo strlen($phrase);
    echo $phrase[0];//print out specific index of str
    echo("<br>");
    echo str_replace("Miller", "Unknown", $phrase);
    echo substr($phrase, 8,10);//to echo specific substring
    ?>
</body>
</html>