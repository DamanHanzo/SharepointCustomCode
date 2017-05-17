$(document).ready(function(){
	var linkToPdf = "";
	var endpointUrl = _spPageContextInfo.webServerRelativeUrl + "/_api/web/Lists(guid'01c8ab2b-f1f0-4087-9765-a593a6a7750c')/Items?$filter=Category%20eq%20%27Bimonthly%20Safety%20Newsletter%27";
	getJson(endpointUrl)
	.done(function(data){
		var itemsCount= data.d.results.length;
		var items = data.d.results;
		var itemFileURI = data.d.results[itemsCount-1].File.__deferred.uri;
		getJson(itemFileURI).done(function(data){
			linkToPdf = data.d.ServerRelativeUrl;
			var embedLocation = $("embed#pdfEmbed").parent().parent();
			var pdfEmbed = "<embed src='"+linkToPdf+"' id='pdfEmbed' height='850' width='850'";
			 pdfEmbed += "type='application/pdf'></embed>";			
			$("embed#pdfEmbed").remove();
			$(embedLocation).append(pdfEmbed);
		}).fail(function(error){
			alert("Sorry, there was an error retrieving file");
		});

	})
	.fail(function(error){
		console.log(JSON.stringify(error));	
	});

	function getJson(url){
		return $.ajax({
			url: url,
			type: "GET",
			contentType: "application/json;odata=verbose",
			headers: {
				"Accept": "application/json;odata=verbose"
			}
		});
	}
	
});

