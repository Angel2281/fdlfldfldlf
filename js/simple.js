function shuffle(arr) {
    var cIndex = arr.length, tValue, rIndex;
    
    while (0 != cIndex) {
        rIndex = Math.floor(Math.random() * cIndex);
        cIndex -= 1;
        
        tValue = arr[cIndex];
        arr[cIndex] = arr[rIndex];
        arr[rIndex] = tValue;
    }
    
    return arr;
}

var requiredFiles;
var downloadedFiles = 0;

function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode) {
    setGamemode(gamemode);
    setMapName(mapname);
    
    if (!sl_serverName && !sl_image)
        setServerName(servername);
}

function DownloadingFile(fileName) {
    downloadedFiles++;
    setStatus("Downloading files...");
}

function SetStatusChanged(status) {
    if (status.indexOf("Getting Addon #") != -1) {
        downloadedFiles++;
    }
    
    setStatus(status);
}

function SetFilesNeeded(needed) {
    requiredFiles = needed + 1;
}

function setStatus(status) {
    $("#status").html(status);
}

function setMapName(mapname) { $("#map").html(mapname); }

function setServerName(servername) { $("#title").html(servername); }

function setGamemode(gamemode) { $("#gamemode").html(gamemode); }

function setTrackTitle(title) {
    $("#track").fadeOut(2000, function() {
        $(this).html(title);
        $(this).fadeIn(2000);
    });
}

var youtubePlayer;
var playlist = -1;

$(function() {
    if (sl_fontColor) {
        $(".box").css( "color", sl_fontColor );
        $("#name").css( "color", sl_fontColor );
    }
    
    if (sl_shufflePlaylist)
        sl_musicPlaylist = shuffle(sl_musicPlaylist);
    
    if (sl_music)
        loadYoutube();
    
    $.backstretch(sl_bgImages, {duration: sl_bgInterval, fade: sl_bgFade});
    
    if (sl_shuffleMessages)
        sl_messages = shuffle(sl_messages);
    
    if (sl_enableMessages)
        displayMessage(0);
    
    if (sl_serverName && !sl_image)
        setServerName(sl_serverName);
    
    if (sl_image)
        setServerName("<img src='"+sl_image+"'>");
});

function loadYoutube() {
    var elem = document.createElement("script");
    
    elem.src = "https://www.youtube.com/iframe_api";
    var scriptElem = document.getElementsByTagName("script")[0];
    scriptElem.parentNode.insertBefore(elem, scriptElem);
}

function onYouTubeIframeAPIReady() {
    youtubePlayer = new YT.Player("player", {
        height: "390",
        width: "640",
        events: {
            "onReady": onPlayerReady,
            "onStateChange": onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    youtubePlayer.setVolume(sl_musicVolume);
    if (youtubePlayer.isMuted())
        youtubePlayer.unMute();
    nextTrack();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        nextTrack();
    }
}

function nextTrack() {
    playlist++;
    
    if (track >= sl_musicPlaylist.length)
        playlist = 0;
    
    var track = sl_musicPlaylist[playlist];
    
    youtubePlayer.loadVideoById(track.youtube);
    
    setTrackTitle(track.name);
}


function displayMessage(message) {
    if (message >= sl_messages.length)
        message = 0;
    
    $("#messages").fadeOut(sl_messageFade, function() {
        $(this).html(sl_messages[message]);
        $(this).fadeIn(sl_messageFade);
    });
    
    setTimeout(function() {
        displayMessage(message+1);
    }, sl_messageInterval + sl_messageFade*2);
}