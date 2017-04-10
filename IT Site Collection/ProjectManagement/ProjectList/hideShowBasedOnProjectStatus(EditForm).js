<script src="/SiteAssets/js/jquery.min.js"></script>
<script>
function hideShowElems(){
	var fieldsToHide = ["Start Date", "Original End Date", "Target End Date", "Original IT Effort", "Target End Date", "Original IT Effort",
	         "Estimated IT Effort To Complete", "Project Cost", "IT Group", "IT Team Members", "Business Team Members", "Contractor Involvement", 
	         "Status Updates"];
	var projStatus = $(".ms-formtable tbody tr td.ms-formbody span select:eq(1)").val();
	var formLabel = $(".ms-formtable tbody tr td.ms-formlabel span.ms-h3.ms-standardheader");
	if(projStatus == "(01) IT Review" || projStatus == "(02) Approved as CR"){
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

window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
       hideShowElems();
       $(".ms-formtable tbody tr td.ms-formbody span select:eq(1)").on("change", function(){
       		hideShowElems();
		});
    } else {
        // jQuery is not loaded
        alert("jQuery is not loaded!");
    }
}
</script>