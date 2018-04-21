/*

  ___ _            _     _                 _ 
 / __(_)_ __  _ __| |___| |   ___  __ _ __| |
 \__ \ | '  \| '_ \ / -_) |__/ _ \/ _` / _` |
 |___/_|_|_|_| .__/_\___|____\___/\__,_\__,_|
             |_|                             
             Version 2.0 (Reworked)
             http://steamcommunity.com/id/BaileyAltman
*/

// Your server's name! Leave blank for auto-detect.
var sl_serverName = "VortRP|HL2RP";

// Feel like using a server image? Leave blank to disable.
// WARNING: Overrides your server name.
var sl_image = "";

// Custom font color? Hex/RGB. Leave blank for default.
// For RGB: rgb(100, 255, 100). For Hex: #64FF64.
var sl_fontColor = "7fff00";

// Shuffle custom background images?
var sl_shuffleBackgrounds = true;

// Custom background images.
var sl_bgImages = [
    "backgrounds/1.png",
	"backgrounds/931442922_preview_488783833_preview_kevino.jpg",
	"backgrounds/972364174_preview_542316471_preview_steamworkshop_webupload_previewfile_318983157_preview (1).jpg",
	"backgrounds/image.png",
	"backgrounds/steamworkshop_webupload_previewfile_255666549_preview.jpg",
	"backgrounds/kek.jpg",
	"backgrounds/392889-Half-Life-Half-Life_2-Citadel-748x421.png"
];

// Time in milliseconds between backgrounds.
var sl_bgInterval = 1500;

// Time it takes in milliseconds to transition between backgrounds.
var sl_bgFade = 1500;

/* Music Player
This will enable music in the background. */
var sl_music = true;

// This will randomize your playlist!
var sl_shufflePlaylist = true;

/* Music Volume
Anywhere between 0 and 100. */
var sl_musicVolume = 20;

/* Music Playlist
Just snag a Youtube video ID! */
var sl_musicPlaylist = [
	{youtube: "iy61r3Qkm6o", name: "HL2 song 23"}
];

// Enables custom messages.
var sl_enableMessages = false;

// This will randomize the order of your messages.
var sl_shuffleMessages = true;

// When enabled, these will be displayed under the server title.
var sl_messages = [
    "Добро пожаловать на наш сервер!",
    "Надеемся, Вам здесь нравится!",
    "Пожалуйста, уважайте персонал!"
];

// Time in milliseconds between messages.
var sl_messageInterval = 1500;

// Time it takes in milliseconds to transition between messages.
var sl_messageFade = 1500;