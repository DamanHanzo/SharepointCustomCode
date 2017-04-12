<script src="/SiteAssets/js/jquery.min.js"></script>
<script>
$(document).ready(function(){
	function hideShowElems(){
		var fieldsToHide = ["Start Date", "Original End Date", "Original IT Effort", "Original IT Effort",
		         "Estimated IT Effort To Complete", "Project Cost", "IT Group", "IT Team Members", "Business Team Members", "Contractor Involvement", 
		         "Status Updates"];
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
});
</script>