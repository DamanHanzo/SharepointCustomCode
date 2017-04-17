<script src="/SiteAssets/js/jquery.min.js"></script>
<script>
$(document).ready(function(){
	var fieldsToHide = ["Start Date", "Original End Date", "Original IT Effort", "Original IT Effort",
	         "Estimated IT Effort To Complete", "Project Cost", "IT Team Members", "Business Team Members", "Contractor Involvement"];
	var projStatus = $("#SPFieldChoice").text().trim(" ");
	var formLabel = $(".ms-formtable tbody tr td.ms-formlabel span.ms-h3.ms-standardheader");
	if(projStatus == "Change Request"){
		formLabel.each(function(){
			var labeltext = $(this).text();
			for(i=0; i<fieldsToHide.length; i++){
				if(labeltext == fieldsToHide[i]){
					$(this).parent().parent().hide();
				}
			}
		});
	}
var toggleMinHeight = $("#part1 > table.ms-formtable > tbody > tr:nth-child(22) > td:nth-child(2) > div").height(),
    duration = 2000,
    easing = 'swing';
var hideShow = "<a href='#' id='hideShow'>Show More</a>";

$("#part1 > table.ms-formtable > tbody > tr:nth-child(22) > td:nth-child(2) > div").css("overflow", "hidden"); 
if($("#part1 > table.ms-formtable > tbody > tr:nth-child(22) > td:nth-child(2) > div").height() > 170){
    $("#part1 > table.ms-formtable > tbody > tr:nth-child(22) > td:nth-child(2) > div").animate({
        'height': 170
    }, 500, easing);
    $(hideShow).insertAfter($("#part1 > table.ms-formtable > tbody > tr:nth-child(22) > td:nth-child(2) > div"));
}
$("#hideShow").on("click", function(){
    if($("#part1 > table.ms-formtable > tbody > tr:nth-child(22) > td:nth-child(2) > div").height() > 170){
        $("#part1 > table.ms-formtable > tbody > tr:nth-child(22) > td:nth-child(2) > div").animate({
            'height': 170
        }, duration, easing);
        $("#hideShow").text("Show More");
    } else {
        $("#part1 > table.ms-formtable > tbody > tr:nth-child(22) > td:nth-child(2) > div").animate(
         {
             'height' : toggleMinHeight
        }, duration, easing);
        $("#hideShow").text("Show Less");
    }
});  
});
</script>