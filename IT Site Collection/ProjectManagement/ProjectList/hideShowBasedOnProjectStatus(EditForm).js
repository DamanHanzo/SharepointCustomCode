<script src="/SiteAssets/js/jquery.min.js"></script>
<script>
$(document).ready(function(){
	function hideShowElems(){
		var fieldsToHide = ["Start Date", "Original End Date", "Original IT Effort", "Original IT Effort",
		         "Estimated IT Effort To Complete", "Project Cost", "IT Team Members", "Business Team Members", "Contractor Involvement"];
		var projStatus = $(".ms-RadioText > input:eq(0)").is(':checked');
		var formLabel = $(".ms-formtable tbody tr td.ms-formlabel span.ms-h3.ms-standardheader");
		if(projStatus == true){
			formLabel.each(function(){
				var labeltext = $(this).text().trim(" ");
				for(i=0; i<fieldsToHide.length; i++){
					if(labeltext == fieldsToHide[i]){
						$(this).parent().parent().hide();
					}
				}
			});
		} else {
			formLabel.each(function(){
				$(this).parent().parent().show();
			});
		}
	}
	hideShowElems();
	$(".ms-RadioText > input").on("change", function(){
       		hideShowElems();
	});

var toggleMinHeight = $("#part1 > table.ms-formtable > tbody > tr:nth-child(23) > td:eq(1) > div").height(),
    duration = 2000,
    easing = 'swing';
var hideShow = "<a href='#' id='hideShow'>Show More</a>";
$("#part1 > table.ms-formtable > tbody > tr:nth-child(23) > td:eq(1) > div").css("overflow", "hidden"); 
if($("#part1 > table.ms-formtable > tbody > tr:nth-child(23) > td:eq(1) > div").height() > 170){
    $("#part1 > table.ms-formtable > tbody > tr:nth-child(23) > td:eq(1) > div").animate({
        'height': 170
    }, 500, easing);
	$(hideShow).insertAfter($("#part1 > table.ms-formtable > tbody > tr:nth-child(23) > td:eq(1) > div"));
}
$("#hideShow").on("click", function(){
    if($("#part1 > table.ms-formtable > tbody > tr:nth-child(23) > td:eq(1) > div").height() > 170){
        $("#part1 > table.ms-formtable > tbody > tr:nth-child(23) > td:eq(1) > div").animate({
            'height': 170
        }, duration, easing);
        $("#hideShow").text("Show More");
    } else {
        $("#part1 > table.ms-formtable > tbody > tr:nth-child(23) > td:eq(1) > div").animate(
         {
             'height' : toggleMinHeight
        }, duration, easing);
        $("#hideShow").text("Show Less");
    }
});  

 });
</script>