//	HYPE.documents["Slide 9"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Slide%209.hyperesources";
	var documentName = "Slide 9";
	var documentLoaderFilename = "slide9_hype_generated_script.js";
	var mainContainerID = "slide9_hype_container";

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
	
	var resources = {"3":{n:"image21.png",p:1},"1":{n:"image17.png",p:1},"2":{n:"image26.png",p:1},"0":{n:"veu%20of%20earth%20from%20moon.jpg",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"6":{o:"content-box",h:"1",x:"visible",a:384,q:"100% 100%",b:200,j:"absolute",r:"inline",c:65,k:"div",z:"3",d:105,e:"1.000000"},"2":{o:"content-box",h:"0",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:600,k:"div",z:"1",d:450},"7":{o:"content-box",h:"2",x:"visible",a:240,q:"100% 100%",b:154,j:"absolute",r:"inline",c:344,k:"div",z:"4",d:274,e:"1.000000"},"9":{o:"content-box",h:"3",x:"visible",a:245,q:"100% 100%",b:157,j:"absolute",r:"inline",c:334,k:"div",z:"5",d:267,aY:"0",e:"0.000000",f:"0deg"}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:12.14,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1.01,i:"b",e:155,s:154,o:"7"},{f:"2",t:0,d:1.01,i:"a",e:383,s:384,o:"6"},{f:"2",t:0,d:5.02,i:"b",e:132,s:200,o:"6"},{f:"2",t:0,d:5.02,i:"c",e:148,s:65,o:"6"},{f:"2",t:0,d:5.02,i:"d",e:238,s:105,o:"6"},{f:"2",t:0,d:8.16,i:"e",e:"0.990931",s:"1.000000",o:"7"},{f:"2",t:0,d:8.16,i:"e",e:"0.990931",s:"1.000000",o:"6"},{f:"2",t:0,d:8.29,i:"a",e:250,s:245,o:"9"},{f:"2",t:0,d:8.29,i:"b",e:133,s:157,o:"9"},{f:"2",t:0,d:8.17,i:"e",e:"0.000000",s:"0.000000",o:"9"},{f:"2",t:0,d:11.08,i:"f",e:"45deg",s:"0deg",o:"9"},{f:"2",t:1.01,d:4.01,i:"a",e:16,s:383,o:"6"},{f:"2",t:5.02,d:3.27,i:"b",e:187,s:132,o:"6"},{f:"2",t:5.02,d:3.27,i:"c",e:74,s:148,o:"6"},{f:"2",t:5.02,d:3.27,i:"d",e:119,s:238,o:"6"},{f:"2",t:5.02,d:3.27,i:"a",e:375,s:16,o:"6"},{f:"2",t:8.16,d:0.06,i:"e",e:"0.000000",s:"0.990931",o:"7"},{f:"2",t:8.16,d:0.06,i:"e",e:"0.000000",s:"0.990931",o:"6"},{f:"2",t:8.17,d:0.01,i:"e",e:"1.000000",s:"0.000000",o:"9"},{f:"2",t:8.29,d:0.24,i:"b",e:82,s:133,o:"9"},{f:"2",t:8.29,d:0.24,i:"a",e:235,s:250,o:"9"},{f:"2",t:9.23,d:0.18,i:"b",e:-53,s:82,o:"9"},{f:"2",t:9.23,d:0.18,i:"a",e:275,s:235,o:"9"},{f:"2",t:10.11,d:0.27,i:"b",e:-191,s:-53,o:"9"},{f:"2",t:10.11,d:0.27,i:"a",e:402,s:275,o:"9"},{f:"2",t:11.08,d:1.06,i:"b",e:-244,s:-191,o:"9"},{f:"2",t:11.08,d:1.06,i:"a",e:465,s:402,o:"9"}],f:30}},o:"1"}];
	
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

