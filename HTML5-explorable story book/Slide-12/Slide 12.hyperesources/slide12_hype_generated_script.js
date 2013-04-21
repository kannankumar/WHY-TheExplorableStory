//	HYPE.documents["Slide 12"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Slide%2012.hyperesources";
	var documentName = "Slide 12";
	var documentLoaderFilename = "slide12_hype_generated_script.js";
	var mainContainerID = "slide12_hype_container";

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
	
	var resources = {"0":{n:"cool%20space%20picture%204.jpg",p:1},"1":{n:"v-shoes.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"3":{o:"content-box",h:"1",x:"visible",a:-468,q:"100% 100%",b:61,j:"absolute",r:"inline",c:533.33299999999997,k:"div",z:"2",d:400},"2":{o:"content-box",h:"0",x:"visible",a:-9,q:"100% 100%",b:-45,j:"absolute",r:"inline",c:617,k:"div",z:"1",d:490}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:7.29,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1.08,i:"a",e:-369,s:-468,o:"3"},{f:"2",t:0,d:1.08,i:"b",e:16,s:61,o:"3"},{f:"2",t:1.08,d:0.23,i:"a",e:-297,s:-369,o:"3"},{f:"2",t:1.08,d:0.23,i:"b",e:40,s:16,o:"3"},{f:"2",t:2.01,d:1.06,i:"b",e:8,s:40,o:"3"},{f:"2",t:2.01,d:1.06,i:"a",e:-219,s:-297,o:"3"},{f:"2",t:3.07,d:1.12,i:"a",e:-139,s:-219,o:"3"},{f:"2",t:3.07,d:1.12,i:"b",e:36,s:8,o:"3"},{f:"2",t:4.19,d:1.03,i:"a",e:-63,s:-139,o:"3"},{f:"2",t:4.19,d:1.03,i:"b",e:0,s:36,o:"3"},{f:"2",t:5.22,d:1.11,i:"b",e:37,s:0,o:"3"},{f:"2",t:5.22,d:1.11,i:"a",e:0,s:-63,o:"3"},{f:"2",t:7.03,d:0.26,i:"a",e:80,s:0,o:"3"},{f:"2",t:7.03,d:0.26,i:"b",e:0,s:37,o:"3"}],f:30}},o:"1"}];
	
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

