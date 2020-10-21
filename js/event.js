$(document).ready(function(){
    let icons = ['.icon1', '.icon2', '.icon3'];
    icons.forEach(function(icon){
        $(icon + ' .actions').hide();
        $(icon).hover(function(){
            $(icon + ' .actions').fadeToggle(1000);
        })
    })
    
    
    
    // $('#children').hide();
    // $('.icon1 .actions .redirect').click(function(){
    //     $('#children').show();
    //     $('#girls').hide();
    //     $('#general').hide();

    // });

    // $('#girls').hide();
    // $('.icon2 .actions .redirect').click(function(){
    //     $('#girls').show();
    //     $('#general').hide();
    //     $('#children').hide();
    // });

    // $('#general').hide();
    // $('.icon2 .actions .redirect').click(function(){
    //     $('#general').show();
    //     $('#children').hide();
    //     $('#girls').hide();
    // });

});   
