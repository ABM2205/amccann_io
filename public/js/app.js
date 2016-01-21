/**
 * Created by anthony on 1/7/2016.
 */
function app(){

    $( ".me" ).hide();
    $( "#bio").show();
    $( ".work" ).hide();

    // me menu
    button('#skills_button', '#skills', '.me');
    button('#bio_button', '#bio', '.me');
    button('#work_button', '#work', '.me');

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




