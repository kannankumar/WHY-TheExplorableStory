//	HYPE.documents["Slide 6"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Slide%206.hyperesources";
	var documentName = "Slide 6";
	var documentLoaderFilename = "slide6_hype_generated_script.js";
	var mainContainerID = "slide6_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"0":{n:"narwhals.jpg",p:1},"1":{n:"image8.psd",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"2":{o:"content-box",h:"0",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:600,k:"div",z:"1",d:404},"3":{o:"content-box",h:"1",x:"visible",a:-99,q:"100% 100%",b:127,j:"absolute",r:"inline",c:91,k:"div",z:"2",d:57}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:10,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1.03,i:"b",e:105,s:127,o:"3"},{f:"2",t:0,d:1.03,i:"a",e:11,s:-99,o:"3"},{f:"2",t:0,d:2.18,i:"c",e:137,s:91,o:"3"},{f:"2",t:0,d:2.18,i:"d",e:84,s:57,o:"3"},{f:"2",t:1.03,d:1.15,i:"a",e:87,s:11,o:"3"},{f:"2",t:1.03,d:1.15,i:"b",e:116,s:105,o:"3"},{f:"2",t:2.18,d:1,i:"c",e:187,s:137,o:"3"},{f:"2",t:2.18,d:1,i:"d",e:115,s:84,o:"3"},{f:"2",t:2.18,d:1,i:"a",e:216,s:87,o:"3"},{f:"2",t:2.18,d:1,i:"b",e:87,s:116,o:"3"},{f:"2",t:3.18,d:1.01,i:"c",e:252,s:187,o:"3"},{f:"2",t:3.18,d:1.01,i:"d",e:155,s:115,o:"3"},{f:"2",t:3.18,d:1.01,i:"a",e:306,s:216,o:"3"},{f:"2",t:3.18,d:1.01,i:"b",e:150,s:87,o:"3"},{f:"2",t:4.19,d:1.1,i:"c",e:328,s:252,o:"3"},{f:"2",t:4.19,d:1.1,i:"d",e:202,s:155,o:"3"},{f:"2",t:4.19,d:1.1,i:"b",e:53,s:150,o:"3"},{f:"2",t:4.19,d:1.1,i:"a",e:426,s:306,o:"3"},{f:"2",t:5.29,d:1,i:"c",e:254,s:328,o:"3"},{f:"2",t:5.29,d:1,i:"d",e:156,s:202,o:"3"},{f:"2",t:5.29,d:1,i:"a",e:616,s:426,o:"3"},{f:"2",t:5.29,d:1,i:"b",e:46,s:53,o:"3"},{f:"2",t:6.29,d:1,i:"c",e:145,s:254,o:"3"},{f:"2",t:6.29,d:1,i:"d",e:89,s:156,o:"3"},{f:"2",t:6.29,d:1,i:"a",e:415,s:616,o:"3"},{f:"2",t:6.29,d:1,i:"b",e:16,s:46,o:"3"},{f:"2",t:7.29,d:0.3,i:"c",e:102,s:145,o:"3"},{f:"2",t:7.29,d:0.3,i:"d",e:63,s:89,o:"3"},{f:"2",t:7.29,d:0.3,i:"a",e:84,s:415,o:"3"},{f:"2",t:7.29,d:0.3,i:"b",e:248,s:16,o:"3"},{f:"2",t:8.29,d:1.01,i:"a",e:-118,s:84,o:"3"},{f:"2",t:8.29,d:1.01,i:"b",e:292,s:248,o:"3"}],f:30}},o:"1"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

