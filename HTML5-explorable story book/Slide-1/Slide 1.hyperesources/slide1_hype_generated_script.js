//	HYPE.documents["Slide 1"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Slide%201.hyperesources";
	var documentName = "Slide 1";
	var documentLoaderFilename = "slide1_hype_generated_script.js";
	var mainContainerID = "slide1_hype_container";

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
	
	var resources = {"3":{n:"musuem-crowds.m4a"},"1":{n:"RAMM%20copy%20copy.png",p:1},"2":{n:"image15c.psd",p:1},"0":{n:"image3.psd",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"8":{o:"content-box",h:"2",x:"visible",a:609,q:"100% 100%",b:200,j:"absolute",r:"inline",c:86,k:"div",z:"6",d:185,e:"1.000000"},"4":{o:"content-box",h:"0",x:"visible",a:119,q:"100% 100%",b:75,j:"absolute",r:"inline",c:361,k:"div",z:"5",d:309,e:"1.000000"},"9":{aR:"0",x:"visible",bE:[{filename:"3"}],a:154,b:406,j:"absolute",c:100,k:"video",z:"7",d:25,aO:"1",aQ:"1",aH:"1"},"7":{o:"content-box",h:"1",x:"visible",a:-43,q:"100% 100%",b:-361,j:"absolute",r:"inline",c:674,k:"div",z:"4",d:1160,aY:"1",e:"1.000000",f:"0deg"}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:94.2,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:5,i:"a",e:-3,s:-43,o:"7"},{f:"2",t:0,d:5,i:"b",e:-446,s:-361,o:"7"},{f:"2",t:0,d:5,i:"d",e:1236,s:1160,o:"7"},{f:"2",t:0,d:5,i:"c",e:718,s:674,o:"7"},{f:"2",t:0,d:5,i:"b",e:66,s:75,o:"4"},{f:"2",t:0,d:5,i:"a",e:168,s:119,o:"4"},{f:"2",t:0,d:5,i:"f",e:"26deg",s:"0deg",o:"7"},{f:"2",t:0,d:0.15,i:"a",e:541,s:609,o:"8"},{f:"2",t:0,d:0.15,i:"b",e:189,s:200,o:"8"},{f:"2",t:0.15,d:0.15,i:"a",e:484,s:541,o:"8"},{f:"2",t:0.15,d:0.15,i:"b",e:198,s:189,o:"8"},{f:"2",t:1,d:0.18,i:"b",e:189,s:198,o:"8"},{f:"2",t:1,d:0.18,i:"a",e:439,s:484,o:"8"},{f:"2",t:1.18,d:0.21,i:"b",e:196,s:189,o:"8"},{f:"2",t:1.18,d:0.21,i:"a",e:403,s:439,o:"8"},{f:"2",t:2.09,d:0.19,i:"a",e:367,s:403,o:"8"},{f:"2",t:2.09,d:0.19,i:"b",e:189,s:196,o:"8"},{f:"2",t:2.28,d:0.2,i:"b",e:193,s:189,o:"8"},{f:"2",t:2.28,d:0.2,i:"a",e:333,s:367,o:"8"},{f:"2",t:3.18,d:0.22,i:"b",e:187,s:193,o:"8"},{f:"2",t:3.18,d:0.22,i:"a",e:305,s:333,o:"8"},{f:"2",t:4.1,d:0.2,i:"b",e:180,s:187,o:"8"},{f:"2",t:4.1,d:0.2,i:"a",e:293,s:305,o:"8"},{t:0,p:1,i:"Video Track",d:94.2,o:"9",f:"2"}],f:30}},o:"1"}];
	
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

