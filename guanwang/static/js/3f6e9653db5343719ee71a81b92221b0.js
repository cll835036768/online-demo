$(function () {
    var createVideoBoxAndPlay = function(videoHTML) {
        $("body").append("<div class='videoBox show'>" + videoHTML + "</div>");
        let video = $("body").children(".videoBox").find('.video')[0];
        $(video).attr('playsinline','true');
        $(video).attr('webkit-playsinline','true');
        const player = new Plyr(video);
        if(video.paused == true){
            video.play();
        }else{
            video.pause();
        }

        $("body > .videoBox > .closeVideo").click(function () {
            $(this).parent().remove();
        });
    };

    $(document).on('click', '.p_video .cover', function () {
        var isNameVideo = $(".isName").prev().find(".s_list").children().children();
        var isNameBoxA = $(isNameVideo).is(".p_list");
        if (isNameBoxA) {
            let videoBox = $(this).next().html();
            createVideoBoxAndPlay(videoBox);
        }
    });

    $(document).on('click', ".p_rollSlide", function () {
        let videoBox = $(this).find(".videoBox").html();
        createVideoBoxAndPlay(videoBox);
    });

    $('.videoIBox').each(function(){
        let videoImgHref = $(this).find('.videoimg img').attr('src');
        $(this).find('.coverImage img').attr('src',videoImgHref);
    }); 
});
