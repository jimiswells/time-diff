 var init = function(){
        
      
        
         $('#city-select').on('change', function() {
  var timeDiff = $(this).val(); // or $(this).val()
      
    });
        

        
        
                var avalue='';
    function getSelectData(id) {


        // set value to be the current selected value
        avalue = $(id+" option:selected").val();

        // change value whenever the box changes
        $(id).change(function () {
            avalue = $(id+" option:selected").val();
               $('.moment').append(avalue);
              var poop = +moment().subtract(avalue, "hours").format("X")
            
        });
         return avalue;
    }
    
    var d = getSelectData("#city-select");
   
      
          
      var poop = +moment().subtract(avalue, "hours").format("X")
      console.log(avalue);
        
     
        $("#default").ionRangeSlider({
          min:poop
        , max: +moment().format("X")
        , grid: true
        , force_edges: true
        , prettify: function (num) {
            return moment(num, "X").format("MMM Do, hh:mm A");}

    });
    };
    
    
    
    init();
});