//	HYPE.documents["Slide 11"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Slide%2011.hyperesources";
	var documentName = "Slide 11";
	var documentLoaderFilename = "slide11_hype_generated_script.js";
	var mainContainerID = "slide11_hype_container";

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
	
	var resources = {"0":{n:"nebula%20with%20a%20stars.jpg",p:1},"1":{n:"image18.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"2":{o:"content-box",h:"0",x:"visible",a:-284,q:"100% 100%",b:-358,j:"absolute",r:"inline",c:1143,k:"div",z:"1",d:1137,aY:"0",f:"0deg"},"3":{o:"content-box",h:"1",x:"visible",a:-176,q:"100% 100%",b:220,j:"absolute",r:"inline",c:91,k:"div",z:"2",d:183,aY:"0",f:"63deg"}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:8.23,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:4.27,i:"f",e:"45deg",s:"0deg",o:"2"},{f:"2",t:0,d:4.25,i:"b",e:-245,s:-358,o:"2"},{f:"2",t:0,d:4.25,i:"c",e:895,s:1143,o:"2"},{f:"2",t:0,d:4.25,i:"d",e:890,s:1137,o:"2"},{f:"2",t:0,d:4.25,i:"a",e:-73,s:-284,o:"2"},{f:"2",t:0,d:5.29,i:"f",e:"317deg",s:"63deg",o:"3"},{f:"2",t:0,d:1.03,i:"a",e:8,s:-176,o:"3"},{f:"2",t:0,d:1.03,i:"b",e:164,s:220,o:"3"},{f:"2",t:1.03,d:1.15,i:"b",e:92,s:164,o:"3"},{f:"2",t:1.03,d:1.15,i:"a",e:176,s:8,o:"3"},{f:"2",t:2.18,d:1.09,i:"a",e:344,s:176,o:"3"},{f:"2",t:2.18,d:1.09,i:"b",e:164,s:92,o:"3"},{f:"2",t:3.27,d:1.06,i:"a",e:692,s:344,o:"3"},{f:"2",t:3.27,d:1.06,i:"b",e:204,s:164,o:"3"},{f:"2",t:4.25,d:0.02,i:"a",e:-282,s:-73,o:"2"},{f:"2",t:4.25,d:0.02,i:"b",e:-325,s:-245,o:"2"},{f:"2",t:4.25,d:0.02,i:"c",e:1104,s:895,o:"2"},{f:"2",t:4.25,d:0.02,i:"d",e:1098,s:890,o:"2"},{f:"2",t:4.27,d:3.25,i:"f",e:"180deg",s:"45deg",o:"2"},{f:"2",t:4.27,d:3.23,i:"d",e:1008,s:1098,o:"2"},{f:"2",t:4.27,d:3.23,i:"c",e:1013,s:1104,o:"2"},{f:"2",t:4.27,d:3.23,i:"a",e:-301,s:-282,o:"2"},{f:"2",t:5.03,d:0.26,i:"a",e:700,s:692,o:"3"},{f:"2",t:5.03,d:0.26,i:"b",e:172,s:204,o:"3"},{f:"2",t:5.29,d:0.21,i:"f",e:"288deg",s:"317deg",o:"3"},{f:"2",t:5.29,d:0.21,i:"a",e:476,s:700,o:"3"},{f:"2",t:5.29,d:0.21,i:"b",e:60,s:172,o:"3"},{f:"2",t:6.2,d:0.07,i:"f",e:"267deg",s:"288deg",o:"3"},{f:"2",t:6.2,d:0.07,i:"b",e:44,s:60,o:"3"},{f:"2",t:6.2,d:0.07,i:"a",e:364,s:476,o:"3"},{f:"2",t:6.27,d:0.28,i:"f",e:"246deg",s:"267deg",o:"3"},{f:"2",t:6.27,d:0.28,i:"a",e:116,s:364,o:"3"},{f:"2",t:6.27,d:0.28,i:"b",e:152,s:44,o:"3"},{f:"2",t:7.25,d:0.28,i:"a",e:-160,s:116,o:"3"},{f:"2",t:7.25,d:0.28,i:"b",e:96,s:152,o:"3"}],f:30}},o:"1"}];
	
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

