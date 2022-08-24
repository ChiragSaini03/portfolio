$(".togglebutton").click(function(){
    if ($(".leftalign").css("top")!="51px"){
        $(".layer1").css("transform","translate(0px,8.5px) rotate(45deg)")
        $(".layer3").css("transform","translate(0px,-8.5px) rotate(-45deg)")
        // $(".menuitems").css("opacity","1")
        $(".layer2").css("transform","rotate(-45deg)")
        $(".leftalign").css("top","51px")}
    else if ($(".leftalign").css("top")!="-300px"){
        $(".layer1").css("transform","translate(0px,0px) rotate(0deg)")
        $(".layer3").css("transform","translate(0px,0px) rotate(0deg)")
        $(".layer2").css("transform","rotate(0deg)")
        // $(".menuitems").css("opacity","0.2")
        $(".leftalign").css("top","-300px")}
}) 