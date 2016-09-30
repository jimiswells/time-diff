var selectIndex = 0;



//GET VALUE FROM SELECT FILTER 
//ADD ION SLIDER WITH CURRENT USERS TIME

$( document ).ready(function() {
    
var currentZone = moment();
    alert(currentZone);


var $range1 = $("#default1"),
    $range2 = $("#default2"),
    $range3 = $("#default3"),
    $from = $(".js-from1"),
    $to = $(".js-to1"),
    $from2 = $(".js-from2"),
    $to2 = $(".js-to2"),
      $from3 = $(".js-from3"),
    $to3 = $(".js-to3"),
    range,
    min = +moment().subtract(12, "hours").format("X"),
    max = +moment().add(12, "hours").format("X"),
    to;

var updateValues = function () {
    $from.prop("value", from);
    $to.prop("value", to);
    
    //Get timezone offset of each slider
    var Tz1 = parseFloat($('#city-select1').find(':selected').data('offset'));
    var Tz2 = parseFloat($('#city-select2').find(':selected').data('offset'));
    var Tz2 = parseFloat($('#city-select3').find(':selected').data('offset'));
    
    //This changes second slider
    $from2.prop("value", from + (Tz2-Tz1)*3600  );
    $(".js-from2").trigger("change");
    
};
    
var updateValues2 = function () {
    $from2.prop("value", from);
    $to2.prop("value", to);
    
    //Get timezone offset of each slider
    //var Tz1 = parseFloat($('#city-select1').find(':selected').data('offset'));
    //var Tz2 = parseFloat($('#city-select2').find(':selected').data('offset'));
    
    //This changes second slider
    //$from.prop("value", from + (Tz1-Tz2)*3600  );
    //$(".js-from1").trigger("change");
    
};
    
    var updateValues3 = function () {
    $from2.prop("value", from);
    $to2.prop("value", to);
    
    //Get timezone offset of each slider
    //var Tz1 = parseFloat($('#city-select1').find(':selected').data('offset'));
    //var Tz2 = parseFloat($('#city-select2').find(':selected').data('offset'));
    
    //This changes second slider
    //$from.prop("value", from + (Tz1-Tz2)*3600  );
    //$(".js-from1").trigger("change");
    
};

$range1.ionRangeSlider({
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
        //alert('hello');
        console.log(data.from);
        
    },
    prettify: function (num) {
            return moment(num, "X").format("MMM Do, hh:mm A");}
});

$range2.ionRangeSlider({
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
        updateValues2();
        console.log(data.from);
        
    },
    prettify: function (num) {
            return moment(num, "X").format("MMM Do, hh:mm A");}
});
    
    
range1 = $range1.data("ionRangeSlider");
range2 = $range2.data("ionRangeSlider");
range3 = $range3.data("ionRangeSlider");
    
var updateRange = function () {
    range1.update({
        from: from,
        to: to
    });
    
    
    //Get timezone offset of each slider
    var Tz1 = parseFloat($('#city-select1').find(':selected').data('offset'));
    var Tz2 = parseFloat($('#city-select2').find(':selected').data('offset'));
    var Tz3 = parseFloat($('#city-select3').find(':selected').data('offset'));
    
    
    //This changes second slider
    range2.update({
        from: from + (Tz2-Tz1)*3600 ,
        to: to
    });
    
    
    
    
};

var updateRange2 = function () {
    range2.update({
        from: from,
        to: to
    });
    
    //Get timezone offset of each slider
    //var Tz1 = parseFloat($('#city-select1').find(':selected').data('offset'));
    //var Tz2 = parseFloat($('#city-select2').find(':selected').data('offset'));
    
    //This changes second slider
    /*
    range1.update({
        from: from + (Tz1-Tz2)*3600 ,
        to: to
    });
    */
};
    
var updateRange3 = function () {
    range3.update({
        from: from,
        to: to
    });
    
    //Get timezone offset of each slider
    //var Tz1 = parseFloat($('#city-select1').find(':selected').data('offset'));
    //var Tz2 = parseFloat($('#city-select2').find(':selected').data('offset'));
    
    //This changes second slider
    /*
    range1.update({
        from: from + (Tz1-Tz2)*3600 ,
        to: to
    });
    */
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
    
$from2.on("change", function () {
    from = +$(this).prop("value");
    if (from < min) {
        from = min;
    }
    if (from > to) {
        from = to;
    }
    updateValues2();    
    updateRange2();
});

$to2.on("change", function () {
    to = +$(this).prop("value");
    if (to > max) {
        to = max;
    }
    if (to < from) {
        to = from;
    }
    updateValues2();    
    updateRange2();
}); 
    
$from3.on("change", function () {
    from = +$(this).prop("value");
    if (from < min) {
        from = min;
    }
    if (from > to) {
        from = to;
    }
    updateValues2();    
    updateRange2();
});

$to3.on("change", function () {
    to = +$(this).prop("value");
    if (to > max) {
        to = max;
    }
    if (to < from) {
        to = from;
    }
    updateValues2();    
    updateRange2();
});
    
    

   
    });



 function change_city (select_choice) {
    var timezone = $('#city-select' + select_choice).find(':selected').data('offset');
      //alert(timezone);
     
      if (timezone.indexOf("+") !=-1) {
            timezone = timezone.replace('+', '');
            timezone = parseFloat(timezone);
            newmin = moment.utc().add(timezone, "hours").format("X");
            //alert(moment.utc().add(timezone, "hours"));
            $(".js-from" + select_choice).prop("value", newmin);
            $(".js-from" + select_choice).trigger("change");
          //alert(timezone);
      }
        else if(timezone.indexOf("-") !=-1) {
              
            timezone = timezone.replace('-', '');
            timezone = parseFloat(timezone);
            newmin = moment.utc().subtract(timezone, "hours").format("X");
            $(".js-from" + select_choice).prop("value", newmin);
            $(".js-from" + select_choice).trigger("change");
            
        }
     
       
     var title = $('select').val();
     
     console.log(title);

     
   
  
     
    }


$('.gradient-ranger').on("change", function(){
    var gradientChange = $(this).val() + '%';
    

    $('.irs-with-grid').css('background', 'linear-gradient(to right,  #d4e02c 0%,#2989d8 ' + gradientChange +' ,#207cca 51%,#ebf484 100%)');
    alert(from);
      });



    


$('.add-row').click(function(){
  
 $('.add-row').siblings('div').closest().addClass('visible');
    
    
});


 
$('.remove2').click(function(){
    $('.row-2').addClass('visible');
});

$('.remove3').click(function(){
    $('.row-3').addClass('visible');
});



   
   
       
    


   




    

