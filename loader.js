var modalbeklemesuresi = 2000;

  $("#show").click(function(){
    $("#picturex").show()
    $("#loadingtext").show()
	$("#myModal").show();
	setTimeout(function(){
        $("#myModal").hide();
    }, modalbeklemesuresi);
});
 // });

// handle click and add class
/*
//var banner = $("#banner-message")
//var button = $("button")
//var button = $("openloader")
//var button = $("closeloader")
 $(document).ready(function () {
            $("#openLoader").jqxButton({
                width: 150
            });
            $("#jqxLoader").jqxLoader({ width: 250, height: 150 });
            $('#openLoader').click ( function () {
                  $("#picturex").show();
                  $("#loadingtext").show();
            });
            
            $("#closeLoader").jqxButton({
                width: 100
            });
            
            $('#closeLoader').on('click', function () {
                  $("#picturex").hide();
                  $("#loadingtext").hide();
            });
        });

$(document).ready(function(){
  $("#hide").click(function(){
    $("#picturex").hide();
    $("#loadingtext").hide();
  });
  
 */

