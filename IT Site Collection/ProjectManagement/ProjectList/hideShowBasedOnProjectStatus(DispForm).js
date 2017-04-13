<script src="/SiteAssets/js/jquery.min.js"></script>
<script>
$(document).ready(function(){
	var fieldsToHide = ["Start Date", "Original End Date", "Original IT Effort", "Original IT Effort",
	         "Estimated IT Effort To Complete", "Project Cost", "IT Team Members", "Business Team Members", "Contractor Involvement", 
	         "Status Updates"];
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
});
</script>