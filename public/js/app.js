/**
 * Created by anthony on 1/7/2016.
 */
function app(){

    $( ".me" ).hide();
    $( "#bio").show();


    // me menu
    button('#skills_button', '#skills', '.me');
    button('#bio_button', '#bio', '.me');
    button('#work_button', '#work', '.me');

    //work
}

function button( clss, section, type){

    $(clss).click(function() {

        $(type).each(function () {
            $(type).hide();
        });

        $(section).show();

    });
}




