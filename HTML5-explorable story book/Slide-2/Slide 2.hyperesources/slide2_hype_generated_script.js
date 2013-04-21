//	HYPE.documents["Slide 2"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Slide%202.hyperesources";
	var documentName = "Slide 2";
	var documentLoaderFilename = "slide2_hype_generated_script.js";
	var mainContainerID = "slide2_hype_container";

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
	
	var resources = {"3":{n:"Safari%2020130421%201100.mp3"},"1":{n:"image10.png",p:1},"2":{n:"image4.psd",p:1},"0":{n:"view-of-back-garden-from.jpg",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"3":{o:"content-box",w:"",h:"1",x:"visible",a:147,q:"100% 100%",b:234,j:"absolute",r:"inline",c:90,k:"div",z:"2",d:155,aY:"0",f:"0deg"},"4":{o:"content-box",h:"2",x:"visible",a:269,q:"100% 100%",b:331,j:"absolute",r:"inline",c:77,k:"div",z:"3",d:48,aY:"0",e:"1.000000",f:"332deg"},"2":{o:"content-box",h:"0",x:"visible",a:-121,q:"100% 100%",b:-21,j:"absolute",r:"inline",c:832,k:"div",z:"1",d:623},"5":{aR:"0",x:"visible",bE:[{filename:"3"}],a:-175,b:224,j:"absolute",c:100,k:"video",z:"4",d:25,aO:"0",aQ:"1",aH:"1"}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:22.19,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:4.21,i:"a",e:277,s:269,o:"4"},{f:"2",t:0,d:4.21,i:"b",e:291,s:331,o:"4"},{f:"2",t:0,d:2.14,i:"f",e:"49deg",s:"0deg",o:"3"},{f:"2",t:0,d:2.14,i:"a",e:191,s:147,o:"3"},{f:"2",t:0,d:2.14,i:"b",e:243,s:234,o:"3"},{f:"2",t:0,d:6.03,i:"f",e:"347deg",s:"332deg",o:"4"},{f:"2",t:2.14,d:2.07,i:"f",e:"356deg",s:"49deg",o:"3"},{f:"2",t:4.21,d:0.13,i:"a",e:356,s:277,o:"4"},{f:"2",t:4.21,d:0.13,i:"b",e:176,s:291,o:"4"},{f:"2",t:5.04,d:0.15,i:"b",e:139,s:176,o:"4"},{f:"2",t:5.04,d:0.15,i:"a",e:417,s:356,o:"4"},{f:"2",t:5.19,d:0.14,i:"b",e:96,s:139,o:"4"},{f:"2",t:5.19,d:0.14,i:"a",e:373,s:417,o:"4"},{f:"2",t:6.03,d:0.25,i:"f",e:"466deg",s:"347deg",o:"4"},{f:"2",t:6.03,d:0.15,i:"b",e:119,s:96,o:"4"},{f:"2",t:6.03,d:0.15,i:"a",e:317,s:373,o:"4"},{f:"2",t:6.18,d:0.1,i:"b",e:109,s:119,o:"4"},{f:"2",t:6.18,d:0.1,i:"a",e:456,s:317,o:"4"},{f:"2",t:6.28,d:0.06,i:"a",e:607,s:456,o:"4"},{f:"2",t:6.28,d:0.06,i:"b",e:-24,s:109,o:"4"},{t:0,p:1,i:"Video Track",d:22.19,o:"5",f:"2"}],f:30}},o:"1"}];
	
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

