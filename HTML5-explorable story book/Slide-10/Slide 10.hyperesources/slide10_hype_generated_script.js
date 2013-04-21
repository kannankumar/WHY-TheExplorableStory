//	HYPE.documents["Slide 10"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Slide%2010.hyperesources";
	var documentName = "Slide 10";
	var documentLoaderFilename = "slide10_hype_generated_script.js";
	var mainContainerID = "slide10_hype_container";

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
	
	var resources = {"0":{n:"image25.png",p:1},"1":{n:"image10.png",p:1},"2":{n:"cool%20space%20picture.jpg",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"3":{o:"content-box",h:"0",x:"visible",a:96,q:"100% 100%",b:151,j:"absolute",r:"inline",c:88,k:"div",z:"5",d:58,aY:"0",f:"123deg"},"6":{o:"content-box",h:"2",x:"visible",a:-18,q:"100% 100%",b:-5,j:"absolute",r:"inline",c:626,k:"div",z:"2",d:410,aY:"0",f:"0deg"},"4":{o:"content-box",h:"1",x:"visible",a:16,q:"100% 100%",b:180,j:"absolute",r:"inline",c:124,k:"div",z:"3",d:214}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:4.01,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:4.01,i:"a",e:99,s:96,o:"3"},{f:"2",t:0,d:4.01,i:"b",e:109,s:151,o:"3"},{f:"2",t:0,d:4.01,i:"c",e:165,s:88,o:"3"},{f:"2",t:0,d:4.01,i:"d",e:109,s:58,o:"3"},{f:"2",t:0,d:3.09,i:"f",e:"0deg",s:"0deg",o:"6"},{f:"2",t:0,d:2.05,i:"c",e:767,s:626,o:"6"},{f:"2",t:0,d:2.05,i:"d",e:501,s:410,o:"6"},{f:"2",t:0,d:3.24,i:"b",e:-40,s:-5,o:"6"},{f:"2",t:0,d:3.24,i:"a",e:-15,s:-18,o:"6"},{f:"2",t:2.05,d:1.2,i:"c",e:846,s:767,o:"6"},{f:"2",t:2.05,d:1.23,i:"d",e:622,s:501,o:"6"},{f:"2",t:3.09,d:0.15,i:"f",e:"12deg",s:"0deg",o:"6"},{f:"2",t:3.24,d:0.01,i:"b",e:-63,s:-40,o:"6"},{f:"2",t:3.24,d:0.01,i:"a",e:-65,s:-15,o:"6"},{f:"2",t:3.25,d:0.03,i:"c",e:951,s:846,o:"6"},{f:"2",t:3.25,d:0.03,i:"a",e:-170,s:-65,o:"6"}],f:30}},o:"1"}];
	
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

