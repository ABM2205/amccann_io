/**
 *
 * exports get function for home page
 *
 * @type {exports|module.exports}
 */

exports.get = function(request, response){

    var page = "" +
        "<html>" +
        require('../content/globalsettings.js').render() +
       // require('../content/objects/menubar.js').render() +
        "<div style = 'width:100%; height: 100px; float:top-left;'></div>" +
        "<div style='float:top; " +
        "padding:100px; " +
        "padding-top: 50px;" +
        "margin:0px;" +
        "width: 50%;" +
        "height: 100px;" +
        "border-style: solid;" +
        "border-color: royalblue" +
        "'>" +
            "My name is Anthony McCannn and Im a Senior computer science student at odu.<br/>" +
        "<br/>" +
            "My coding experience includes C++, PHP, Java, javascript, HTML, CSS and javascript.<br/>" +
        "<br/>" +
            "server side i've used apache, nginx and jnode to develop small sites and applications.<br/>" +
            "<br/>" +
        "</div>" +
        "</html>"



response.writeHeader(200);
response.end(page)

};