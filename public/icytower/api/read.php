<?php

require(dirname(__FILE__).DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.'db.php');

$dane = json_decode(file_get_contents('php://input'));

$query = "SELECT * FROM icytowerscores order by score desc limit 5";
$sth = $dbh->prepare($query);
$sth->execute();
$rows = $sth->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($rows);
