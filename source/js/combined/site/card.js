$('.card .activator').on('click',function(){
    var dis = $(this);
    //console.log(dis);    
    dis.parent().find('.card-reveal').slideToggle('fast');
});

$('.card-reveal .close').on('click',function(){
    var dis = $(this);
    dis.closest('.card-reveal').slideToggle('fast');
});