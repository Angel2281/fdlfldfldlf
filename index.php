<?php
    include('config.php');
    $id = 0;
    $key = constant("STEAM_API");
    $name = "Player";

    $avatar = "<i class='fa fa-user-circle' aria-hidden='true'></i>";
    if (isset($_GET['steamid'])) {
        $id = $_GET['steamid'];
        $plydata = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key='.$key.'&steamids='.$id.'&format=json';
        $f = file_get_contents($plydata);
        $array = json_decode($f, true);
        if (isset($array['response']['players'][0]['personaname']))
            $name = $array['response']['players'][0]['personaname'];
        
        if (isset($array['response']['players'][0]['avatarmedium']))
            $avatar = $array['response']['players'][0]['avatarmedium'];
    }

?>
<html lang="en">
<head>
    <title>SimpleLoad</title>
    <link rel="stylesheet" href="styles/lib/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="styles/simple.css">
</head>
<body>
    <div id="player"></div>
    <div class="box">
        <span id="title"></span>
        <span id="messages"></span>
        <span id="music">
            <i class="fa fa-headphones" aria-hidden="true"></i> <span id="track">Track Title</span>
        </span>
        
        <div id="details">
            <i class="fa fa-globe" aria-hidden="true"></i> <span id="map">map </span>
            <i class="fa fa-gamepad" aria-hidden="true"></i> <span id="gamemode">gamemode </span>
        </div>
    </div>
    
    <div id="status">Retrieving server info...</div>
    
    <div id="ply">
        <?php
            if (isset($_GET['steamid']))
                echo "<img src='".$avatar."'>";
            if (!isset($_GET['steamid']))
                echo "<i class='fa fa-user-circle' aria-hidden='true'></i>";
        ?>
        Hey there, <span id="name"><?php echo $name; ?></span>
    </div>

<script src="js/lib/jquery-3.2.0.min.js"></script>
<script src="js/lib/jquery.backstretch.min.js"></script>
<script src="js/lib/jquery.transit.min.js"></script>
    
<script src="js/config.js"></script>
<script src="js/simple.js"></script>
<script src="js/animations.js"></script>
</body>
</html>