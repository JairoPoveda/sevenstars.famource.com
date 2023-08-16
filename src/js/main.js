$(document).ready(function(){
    $(".navbtn").click(function(){
        var classNav = $("#nav-menu").attr("class");
        if(classNav.indexOf('hiddenView') > -1){
            $("#nav-menu").removeClass('hiddenView');
            $("#nav-menu").addClass('shownView');
        }
        if(classNav.indexOf('shownView') > -1){
            $("#nav-menu").removeClass('shownView');
            $("#nav-menu").addClass('hiddenView');            
        }
    });
});