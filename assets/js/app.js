    

$('.add-row').click(function () {
        var zoneSliderRow = $('.slider-row').html();
        var deleteButton = $('.remove');
        $('.content').append("<div class='slider-row'>" + zoneSliderRow + "</div>");
        deleteButton.click(function () {
            $(this).closest('div').remove();
        });
    });



$(function(){
  setInterval(function(){
    var divUtc = $('#divUTC');
    var divLocal = $('#divLocal');  
    //put UTC time into divUTC  
    divUtc.text(moment.utc().format('YYYY-MM-DD HH:mm:ss'));      
    
    //get text from divUTC and conver to local timezone  
    var localTime  = moment.utc(divUtc.text()).toDate();
    localTime = moment(localTime).format('HH:mm:ss');
    divLocal.text(localTime);        
  },1000);
});