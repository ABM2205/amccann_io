/**
 * Created by anthony on 1/7/2016.
 */
function app(){

    $( ".me" ).hide();
    $( "#bio").show();
    $( ".work" ).hide();
    //$( "#page").hide();
    $( "#fishtank").hide();

    // me menu
    button('#skills_button', '#skills', '.me');
    button('#bio_button', '#bio', '.me');
    button('#work_button', '#work', '.me');
    button('#projects_button', '#projects', '.me');

    //work
    button('#cs150and250', '#cs150and250_desc', '.work');
    button('#cs252', '#cs252_desc', '.work');
}

function button( clss, section, type){

    $(clss).click(function() {

            $(type).hide();

        $(section).show();

    });

}

function fishtank(){
   //init

    var width = $(window).width();
    var height = $(window).height();

    $("#background").append('<canvas id="fishtank" width="'+width +'px"/>');

    var c = document.getElementById("fishtank");
    var ctx = c.getContext("2d");

    console.log("fishtank "+width+" "+height);
    $("#background").append("test");

    ctx.moveTo(0,0);
    ctx.lineTo(height,width);
    ctx.stroke();
}