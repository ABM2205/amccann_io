/**
 * Created by anthony on 1/7/2016.
 */
function app(){
    $( "#bio" ).hide();
    $( "#skills" ).hide();

    button('#skills_button', '#skills', '.me')
    button('#bio_button', '#bio', '.me')

}

function button( clss, section, type){

    $(clss).click(function() {

        $(type).each(function () {
            $(type).hide();
        });

        $(section).show();

    });
}




