//	HYPE.documents["Slide 3"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Slide%203.hyperesources";
	var documentName = "Slide 3";
	var documentLoaderFilename = "slide3_hype_generated_script.js";
	var mainContainerID = "slide3_hype_container";

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
	
	var resources = {"3":{n:"Safari%2020130421%201100.mp3"},"1":{n:"woods2.png",p:1},"2":{n:"image11.png",p:1},"0":{n:"woods.jpg",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"3":{o:"content-box",h:"1",x:"visible",a:416,q:"100% 100%",b:-43,j:"absolute",r:"inline",c:184,k:"div",z:"3",d:446},"4":{o:"content-box",h:"2",x:"visible",a:132,q:"100% 100%",b:147,j:"absolute",r:"inline",c:116,k:"div",z:"2",d:226,aY:"0",f:"0deg"},"2":{o:"content-box",h:"0",x:"visible",a:0,q:"100% 100%",b:-43,j:"absolute",r:"inline",c:600,k:"div",z:"1",d:449},"7":{aR:"0",x:"visible",bE:[{filename:"3"}],a:-469,b:341,j:"absolute",c:100,k:"video",z:"4",d:25,aO:"1",aQ:"1",aH:"1"}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:22.19,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1,i:"a",e:175,s:132,o:"4"},{f:"2",t:0,d:1,i:"b",e:158,s:147,o:"4"},{f:"2",t:0.01,d:6.3,i:"f",e:"0deg",s:"0deg",o:"4"},{f:"2",t:1,d:0.28,i:"a",e:226,s:175,o:"4"},{f:"2",t:1,d:0.28,i:"b",e:165,s:158,o:"4"},{f:"2",t:1.28,d:1.01,i:"a",e:270,s:226,o:"4"},{f:"2",t:1.28,d:1.01,i:"b",e:158,s:165,o:"4"},{f:"2",t:2.29,d:1.01,i:"a",e:311,s:270,o:"4"},{f:"2",t:2.29,d:1.01,i:"b",e:140,s:158,o:"4"},{f:"2",t:4,d:0.28,i:"a",e:364,s:311,o:"4"},{f:"2",t:4,d:0.28,i:"b",e:126,s:140,o:"4"},{f:"2",t:4.28,d:1.02,i:"a",e:416,s:364,o:"4"},{f:"2",t:4.28,d:1.02,i:"b",e:110,s:126,o:"4"},{f:"2",t:6,d:0.29,i:"b",e:103,s:110,o:"4"},{f:"2",t:6,d:0.29,i:"a",e:537,s:416,o:"4"},{f:"2",t:6.29,d:0.18,i:"b",e:106,s:103,o:"4"},{f:"2",t:6.29,d:0.18,i:"a",e:516,s:537,o:"4"},{f:"2",t:7.01,d:0.16,i:"f",e:"-40deg",s:"0deg",o:"4"},{f:"2",t:7.17,d:0.14,i:"f",e:"0deg",s:"-40deg",o:"4"},{f:"2",t:7.17,d:1.02,i:"a",e:450,s:516,o:"4"},{f:"2",t:7.17,d:1.02,i:"b",e:106,s:106,o:"4"},{f:"2",t:8.01,d:1.14,i:"f",e:"-40deg",s:"0deg",o:"4"},{f:"2",t:8.19,d:0.15,i:"a",e:537,s:450,o:"4"},{f:"2",t:8.19,d:0.15,i:"b",e:107,s:106,o:"4"},{f:"2",t:9.15,d:0.16,i:"f",e:"0deg",s:"-40deg",o:"4"},{t:0,p:1,i:"Video Track",d:22.19,o:"7",f:"0"}],f:30}},o:"1"}];
	
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

