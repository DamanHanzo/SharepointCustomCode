<script src="/SiteAssets/js/jquery.min.js"></script>
<script>
$(document).ready(function(){
	loadCSS = function(){
		var cssLink = '<link rel="stylesheet" href="/sites/it/projectmanagement/SiteAssets/css/table-banded.css" type="text/css" />';
		$("head").append(cssLink);
	};
	loadCSS();
	$("table.ms-listviewtable").addClass("table-striped");
});
</script>
