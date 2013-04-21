//	HYPE.documents["Slide 8"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Slide%208.hyperesources";
	var documentName = "Slide 8";
	var documentLoaderFilename = "slide8_hype_generated_script.js";
	var mainContainerID = "slide8_hype_container";

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
	
	var resources = {"0":{n:"Pasted.png",p:1},"1":{n:"image17.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"3":{o:"content-box",h:"0",x:"visible",a:-465,q:"100% 100%",b:-7,j:"absolute",r:"inline",c:1070,k:"div",z:"1",d:407},"5":{o:"content-box",h:"1",x:"visible",a:36,q:"100% 100%",b:119,j:"absolute",r:"inline",c:178,k:"div",z:"2",d:287,aY:"0",f:"0deg"}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:9,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:9,i:"a",e:0,s:-465,o:"3"},{f:"2",t:0,d:9,i:"b",e:-7,s:-7,o:"3"},{f:"2",t:0,d:0.24,i:"f",e:"-10deg",s:"0deg",o:"5"},{f:"2",t:0.24,d:0.22,i:"f",e:"10deg",s:"-10deg",o:"5"},{f:"2",t:1.16,d:0.2,i:"f",e:"-10deg",s:"10deg",o:"5"},{f:"2",t:2.06,d:0.17,i:"f",e:"10deg",s:"-10deg",o:"5"},{f:"2",t:2.23,d:0.23,i:"f",e:"-10deg",s:"10deg",o:"5"},{f:"2",t:3.16,d:0.22,i:"f",e:"10deg",s:"-10deg",o:"5"},{f:"2",t:4.08,d:0.21,i:"f",e:"-10deg",s:"10deg",o:"5"},{f:"2",t:4.29,d:0.2,i:"f",e:"10deg",s:"-10deg",o:"5"},{f:"2",t:5.19,d:0.2,i:"f",e:"-10deg",s:"10deg",o:"5"},{f:"2",t:6.09,d:0.21,i:"f",e:"10deg",s:"-10deg",o:"5"},{f:"2",t:7,d:0.23,i:"f",e:"-10deg",s:"10deg",o:"5"},{f:"2",t:7.23,d:0.23,i:"f",e:"10deg",s:"-10deg",o:"5"},{f:"2",t:8.16,d:0.14,i:"f",e:"-10deg",s:"10deg",o:"5"}],f:30}},o:"1"}];
	
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

