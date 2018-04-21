function background() {
    setTimeout(function() {
        $('.box').transition({ width: '100%' }, 4000);
        contents();
    }, 2000);
}

function contents() {
    setTimeout(function() {
        $('#title').transition({ opacity: '1' }, 2000);
        $('#messages').transition({ opacity: '1' }, 2000);
        $('#details').transition({ opacity: '1'}, 2000);
        if (sl_music)
            $('#music').transition({ opacity: '1' }, 2000);
    }, 7000);
}

$(function() {
    background();
});