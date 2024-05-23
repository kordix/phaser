<?php


require(dirname(__FILE__).DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.'db.php');


$dane = json_decode(file_get_contents('php://input'));

$query = "INSERT INTO soldatscores (score,nickname) values (?,?)";
$sth = $dbh->prepare($query);
$sth->execute([$dane->score,$dane->nickname]);




