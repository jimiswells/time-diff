    

$('.add-row').click(function () {
        var zoneSliderRow = $('.slider-row').html();
        var deleteButton = $('.remove');
        $('.content').append("<div class='slider-row'>" + zoneSliderRow + "</div>");
        deleteButton.click(function () {
            $(this).closest('div').remove();
        });
    });



var time = moment.duration("00:03:15")
$("#example_id").ionRangeSlider({
     min: +moment().subtract(12, "hours").format("X"),
    max: +moment().format("X"),
    
    grid: true,
    force_edges: true,
     prettify: function (num) {
     return moment(num, "X").format("MMM Do, hh:mm A");
    }
    
});

 var now = moment().subtract(5, "hours");

var nut = moment("2013-11-18").tz("America/Toronto").format('Z'); 
console.log(nut);

$('.moment').append(now._d);






