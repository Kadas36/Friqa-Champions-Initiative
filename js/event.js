$(document).ready(function(){
    alert("hjsdhsk")
    let icons = ['.icon1', '.icon2', '.icon3'];
    icons.forEach(function(icon){
        $(icon + ' .actions').hide();
        $(icon).hover(function(){
            $(icon + ' .actions').fadeToggle(1000);
        })
    })



});   
