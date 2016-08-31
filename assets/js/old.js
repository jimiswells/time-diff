var selectIndex = 0;

//ADD AND REMOVE SLIDER ROWS
$('.add-row').click(function () {
        var zoneSliderRow = $('.slider-row').html();
        var deleteButton = $('.remove');
        selectIndex = selectIndex + 1;
        $('.content').append("<div class=\"slider-row\" id=\"\"><select id=\"city-select" + selectIndex + "\" onchange=\"change_city('" + selectIndex + "')\" data-selectNo=\"" + selectIndex + "\"><option value=\"100\">NewYork</option><option value=\"999\">china</option></select><input type=\"text\" id=\"default" + selectIndex + "\" name=\"example_name\" value=\"\" /><button class=\"remove\">X</button><div class=\"extra-controls\"><input type=\"text\" value=\"0\" class=\"inp js-from\" /><input type=\"text\"  value=\"1000\" class=\"inp js-to\" /></div></div>");
    $('select#city-select' +selectIndex).timezones();
    $("#default" + selectIndex).ionRangeSlider({
    type: "single",
    min: +moment().subtract(12, "hours").format("X"),
    max: +moment().add(12, "hours").format("X"),
    from: +moment.utc().format("X"),
    prettify_enabled:true,
    hide_min_max:true,
    onChange: function (data) {
        from = data.from;
        to = data.to; 
        $('.irs-with-grid').css('background', 'linear-gradient(to right,  #d4e02c 0%,#2989d8 '+ from +' ,#207cca 51%,#ebf484 100%)');
        updateValues();
        
    },
    prettify: function (num) {
            return moment(num, "X").format("MMM Do, hh:mm A");}
});
    range = $("#default" + selectIndex).data("ionRangeSlider");
        deleteButton.click(function () {
            $(this).closest('div').remove();
        });
    });


//GET VALUE FROM SELECT FILTER 
//ADD ION SLIDER WITH CURRENT USERS TIME

$( document ).ready(function() {


var $range = $("#default0"),
    $from = $(".js-from"),
    $to = $(".js-to"),
    range,
    min = +moment().subtract(12, "hours").format("X"),
    max = +moment().add(12, "hours").format("X"),
    to;

var updateValues = function () {
    $from.prop("value", from);
    $to.prop("value", to);
};

$range.ionRangeSlider({
    type: "single",
    min: min,
    max: max,
    range:100,
    from: +moment.utc().format("X"),
    prettify_enabled:true,
    grid: true,
    grid_num: 10,
    onChange: function (data) {
        from = data.from;
        to = data.to; 
        updateValues();
        console.log(data.from);
        
    },
    prettify: function (num) {
            return moment(num, "X").format("MMM Do, hh:mm A");}
});

range = $range.data("ionRangeSlider");

var updateRange = function () {
    range.update({
        from: from,
        to: to
    });
};

$from.on("change", function () {
    from = +$(this).prop("value");
    if (from < min) {
        from = min;
    }
    if (from > to) {
        from = to;
    }

    updateValues();    
    updateRange();
});

$to.on("change", function () {
    to = +$(this).prop("value");
    if (to > max) {
        to = max;
    }
    if (to < from) {
        to = from;
    }

    updateValues();    
    updateRange();
});

   
    });

 function change_city(selector_id) {
    var timezone = $('#city-select' + selector_id).find(':selected').data('offset');
        
      if (timezone.indexOf("+") !=-1) {
          
            timezone = timezone.replace('+', '');
            timezone = parseFloat(timezone);
            //alert(timezone);
            newmin = moment.utc().add(timezone, "hours").format("X");
            //alert(moment.utc().add(timezone, "hours"));
            $(".js-from").prop("value", newmin);
            $(".js-from").trigger("change");
      }
        else if(timezone.indexOf("-") !=-1) {
              
            timezone = timezone.replace('-', '');
            timezone = parseFloat(timezone);
            newmin = moment.utc().subtract(timezone, "hours").format("X");
            $(".js-from").prop("value", newmin);
            $(".js-from").trigger("change");
            
        }
        //alert(timezone);
    console.log(timezone);
    }

$('.gradient-ranger').on("change", function(){
    var gradientChange = $(this).val() + '%';
    

    $('.irs-with-grid').css('background', 'linear-gradient(to right,  #d4e02c 0%,#2989d8 ' + gradientChange +' ,#207cca 51%,#ebf484 100%)');
    alert(from);
      });

    

 





   




    

