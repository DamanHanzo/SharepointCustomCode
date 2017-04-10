<script src="/SiteAssets/js/jquery.min.js"></script>
<script>
function hideShowElems(){
	var fieldsToHide = ["Start Date", "Original End Date", "Target End Date", "Original IT Effort", "Target End Date", "Original IT Effort",
	         "Estimated IT Effort To Complete", "Project Cost", "IT Group", "IT Team Members", "Business Team Members", "Contractor Involvement", 
	         "Status Updates"];
	var projStatus = $(".ms-formtable tbody tr td.ms-formbody:eq(7)").text().trim(" ");
	var formLabel = $(".ms-formtable tbody tr td.ms-formlabel span.ms-h3.ms-standardheader");
	if(projStatus == "(01) IT Review" || projStatus == "(02) Approved as CR"){
		formLabel.each(function(){
			var labeltext = $(this).text();
			for(i=0; i<fieldsToHide.length; i++){
				if(labeltext == fieldsToHide[i]){
					$(this).parent().parent().hide();
				}
			}
		});
	}
}

window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
       hideShowElems();
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}
</script>