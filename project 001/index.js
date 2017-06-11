$(document).ready(function(){

    // DP:      http://i.imgur.com/R7vEkXt.jpg / https://yande.re/post/show/214801
    // DP2B9S:  http://i.imgur.com/QnmH5Xs.jpg / https://yande.re/post/show/390414
    $("#header").css({
        "background-image": "url(http://i.imgur.com/R7vEkXt.jpg)",
        "min-height": "1620px",
        "background-position": "center 25%"});
    $("#main").css({
        "background-image": "url(http://i.imgur.com/R7vEkXt.jpg)",
        "background-position": "center 25%"});
    $('#lyrics').css("background-image", "url(http://i.imgur.com/QnmH5Xs.jpg)");
    $("#footer").css({
        "background-image": "url(http://i.imgur.com/QnmH5Xs.jpg)",
        "min-height": "1080px"});

    $("#Devola").attr({
        "href": "http://nier.wikia.com/wiki/Devola",
        "target": "_blank"});
    $("#Popola").attr({
        "href": "http://nier.wikia.com/wiki/Popola",
        "target": "_blank"});
    // motivation: Need to link titles and still be able to read them.
    // explanation: https://stackoverflow.com/questions/4345427/setting-href-attribute-at-runtime
})