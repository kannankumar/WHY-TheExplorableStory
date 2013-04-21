//	HYPE.documents["Slide 13"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Slide%2013.hyperesources";
	var documentName = "Slide 13";
	var documentLoaderFilename = "slide13_hype_generated_script.js";
	var mainContainerID = "slide13_hype_container";

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
	
	var resources = {"0":{n:"horsehed%20cloud.jpg",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"2":{o:"content-box",h:"0",x:"visible",a:0,q:"100% 100%",b:-116,j:"absolute",r:"inline",c:744,k:"div",z:"1",d:778},"3":{aV:8,w:"I've caught the space bug when I was a little child. I like to say that I didn't choose space, space chose me. I think most children are fascinated by the idea of spaceflight and space exploration: it appeals to their instinctive curiosity and love of adventure. I was lucky that this all stuck with me as I grew up!\n<b>Samantha Christoforetti</b>",a:79,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",c:471,k:"div",z:"2",aT:8,d:293,t:24,b:398,aS:8,aU:8,G:"#FFFFFF"}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:14.29,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:14.29,i:"c",e:608,s:744,o:"2"},{f:"2",t:0,d:14.29,i:"d",e:636,s:778,o:"2"},{f:"2",t:0,d:14.29,i:"b",e:-57,s:-116,o:"2"},{f:"2",t:0,d:5.01,i:"b",e:85,s:398,o:"3"},{f:"2",t:0,d:5.01,i:"a",e:78,s:79,o:"3"}],f:30}},o:"1"}];
	
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

