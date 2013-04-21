//	HYPE.documents["Slide 5"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Slide%205.hyperesources";
	var documentName = "Slide 5";
	var documentLoaderFilename = "slide5_hype_generated_script.js";
	var mainContainerID = "slide5_hype_container";

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
	
	var resources = {"0":{n:"mc%20murdo.jpg",p:1},"1":{n:"image1.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"2":{o:"content-box",h:"0",x:"visible",a:-4,q:"100% 100%",b:0,j:"absolute",r:"inline",c:609,k:"div",z:"1",d:400},"3":{aV:8,w:"<br>",x:"visible",a:254,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"2",k:"div",b:181,aT:8,aS:8,t:16,aU:8,G:"#000000"},"4":{o:"content-box",h:"1",x:"visible",a:-109,q:"100% 100%",b:224,j:"absolute",r:"inline",c:98,k:"div",z:"3",d:159}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:7.09,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1.01,i:"b",e:215,s:224,o:"4"},{f:"2",t:0,d:1.01,i:"a",e:-53,s:-109,o:"4"},{f:"2",t:1.01,d:0.21,i:"a",e:-4,s:-53,o:"4"},{f:"2",t:1.01,d:0.21,i:"b",e:230,s:215,o:"4"},{f:"2",t:1.22,d:0.23,i:"a",e:32,s:-4,o:"4"},{f:"2",t:1.22,d:0.23,i:"b",e:225,s:230,o:"4"},{f:"2",t:2.15,d:0.21,i:"b",e:234,s:225,o:"4"},{f:"2",t:2.15,d:0.21,i:"a",e:72,s:32,o:"4"},{f:"2",t:3.06,d:0.19,i:"a",e:100,s:72,o:"4"},{f:"2",t:3.06,d:0.19,i:"b",e:230,s:234,o:"4"},{f:"2",t:3.25,d:0.17,i:"a",e:133,s:100,o:"4"},{f:"2",t:3.25,d:0.17,i:"b",e:234,s:230,o:"4"},{f:"2",t:4.12,d:0.16,i:"b",e:225,s:234,o:"4"},{f:"2",t:4.12,d:0.16,i:"a",e:164,s:133,o:"4"},{f:"2",t:4.28,d:0.18,i:"a",e:193,s:164,o:"4"},{f:"2",t:4.28,d:0.18,i:"b",e:231,s:225,o:"4"},{f:"2",t:5.16,d:0.14,i:"a",e:213,s:193,o:"4"},{f:"2",t:5.16,d:0.14,i:"b",e:231,s:231,o:"4"},{f:"2",t:6,d:0.21,i:"a",e:243,s:213,o:"4"},{f:"2",t:6,d:0.21,i:"b",e:225,s:231,o:"4"},{f:"2",t:6.21,d:0.18,i:"a",e:276,s:243,o:"4"},{f:"2",t:6.21,d:0.18,i:"b",e:230,s:225,o:"4"}],f:30}},o:"1"}];
	
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

