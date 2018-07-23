
function BrowserCheck()
{


    var browsing_object = {
							"Opera" : (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
							"Firefox" : typeof InstallTrigger !== 'undefined',
							"Safari" : /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)),
							"IE" : /*@cc_on!@*/false || !!document.documentMode,
							"Edge" : /*@cc_on!@*/false || !!document.documentMode ?  false : !(/*@cc_on!@*/false || !!document.documentMode ) && !!window.StyleMedia,
							"Chrome" : !!window.chrome && !!window.chrome.webstore,
							//"Blink" : (!!window.chrome && !!window.chrome.webstore|| (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) && !!window.CSS

						   }


	var M;
	var O;
	var browsing_object_keys = Object.keys(browsing_object).map(function(key){return browsing_object[key] ?  O = (key == 'IE' ? "Trident" : key) : ""})

		var ua= navigator.userAgent
	   // var N= navigator.appName, ua= navigator.userAgent, tem;
	   // var M= ua.match(/(O)\/?\s*(\.?\d+(\.\d+)*)/i);
	   // if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) {M[2]=tem[1];}
    	//M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];

	ua.split(" ").forEach(function(junk,i){
		if(junk.indexOf(O) != -1){
			M = junk.split("/")

		}
	})
	M[0] == "Trident" ? M[0] = "IE" : ""

    return M;
}



// Opera 8.0+
//var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
//var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]"
//var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
//var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
//var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
//var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
//var isBlink = (isChrome || isOpera) && !!window.CSS;


            // viewport is adjusted for tablets as well
            var site_info_instruction = document.location.href.split("?");
                            if(site_info_instruction.length == 2 ){
                                site_info_instruction = site_info_instruction[1]
                            }

            var devices;
            //all related information about the viewport of the device

            var browser = [BrowserCheck()];

            //this will be an array, containing difference among browsers and their versions

            var Window_information = {"browser" : browser,
                                      "zoom_level" : window.devicePixelRatio,
                                    }

            var browser_window = window;
            if(browser[0][0] == "Firefox" && parseFloat(browser[0][1]) >= 57 ){
              browser_window = window.top;

            }

                 Window_information = {"browser" : browser,
                                         "zoom_level" : aux_function()[1],
                                         "browser_width" : aux_function()[2],
                                         "browser_height" : aux_function()[3],
                                         "visual_width":aux_function()[4],
                                         "visual_height":aux_function()[5]
                                        }



            function aux_function(){
                if(browser[0][0] == "Firefox" && parseFloat(browser[0][1]) >= 57 ){
                    return [browser,window.devicePixelRatio, Window_information["zoom_level"]*  browser_window.outerWidth,  Window_information["zoom_level"]*  browser_window.outerHeight,browser_window.screen.availWidth, browser_window.screen.availHeight]
                }

                if(browser[0][0] == "Chrome" ){
                    return [browser,window.devicePixelRatio,browser_window.outerWidth, browser_window.outerHeight,browser_window.visualViewport.width, browser_window.visualViewport.height]
                }

                if(browser[0][0] == "IE" ){
                    return [browser,window.devicePixelRatio, Window_information["zoom_level"]*  browser_window.outerWidth,  Window_information["zoom_level"]*  browser_window.outerHeight,browser_window.innerWidth, browser_window.innerHeight]
                }

                if(browser[0][0] == "Edge" ){
                    return [browser,window.devicePixelRatio,window.devicePixelRatio * browser_window.outerWidth,window.devicePixelRatio  * browser_window.outerHeight,browser_window.innerWidth, browser_window.innerHeight]
                }
            }
            ///////////////////////////////////////////////////////////////////////
            // helps our window object fill its dynamic purposes
            ///////////////////////////////////////////////////////////////////////
            $(document).ready(function() {
                console.log( $("meta").attr("content"))
                var phone = $("meta").attr("content");
                var tablet = $("meta").attr("content").split("=");
                var display_length = parseInt($("body").css("width").split("p")[0])
                console.log($("body").css("width"))



                if(display_length > 3000){
                    tablet[2] = .60.toString()
                    tablet = tablet[0] + "=" + tablet[1] + "=" + tablet[2];
                    console.log(tablet)
                    $("meta").attr("content" , tablet)
                }
                else{
                    $("meta").attr("content" , phone)

                }

        var getBrowserWidth = function(){
            if(browser_window.outerWidth < 768){
                // Extra Small Device
                return ["xs",browser_window.outerWidth];
            } else if(browser_window.outerWidth < 991){
                // Small Device
                return ["sm",browser_window.outerWidth];
            } else if(browser_window.outerWidth < 1199){
                // Medium Device
                return ["md",browser_window.outerWidth]
            } else {
                // Large Device
                return ["lg",browser_window.outerWidth]
            }
        };
        //differentiates between device being used

        devices = getBrowserWidth();
        console.log(devices)
            });

            // to fix
