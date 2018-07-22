
function BrowserCheck()
{
    var N= navigator.appName, ua= navigator.userAgent, tem;
    var M= ua.match(/(opera|chrome|safari|firefox|msie|trident)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) {M[2]=tem[1];}
    M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
    return M;
}


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
              //


              // helper function
              function firefox_function(){

                      Window_information["browser_width"] = Window_information["zoom_level"]* browser_window.outerWidth
                      Window_information["browser_height"] = Window_information["zoom_level"]* browser_window.outerHeight
                      Window_information["visual_width"] = firefox_aux()[0]
                      Window_information["visual_height"] = firefox_aux()[1]

              }
              ///////////////////////////////////////////////////////////////////////
              // since fire fox has a weird way of doing things we will make this fucntion to conteract the misplaed data
              // if the zooom level is not on 100, you have 3 variables
                // % for original zoom. % pecent screen on and the width the browser thinks because of it
                // if at x percent I look like this, then at 100% i look like this
                //  with firefox if you are using the properties dynamically, you must have them update constantly
              ///////////////////////////////////////////////////////////////////////


                        firefox_function()
               console.log(Window_information);
            }

            else if(browser[0][0] == "Chrome"){
              Window_information = {"browser" : browser,
                                      "zoom_level" : window.devicePixelRatio,
                                      "browser_width" : browser_window.outerWidth,
                                      "browser_height" : browser_window.outerHeight,
                                      "visual_width":aux_function()[0],
                                      "visual_height":aux_function()[1]
                                     }
            }

            else{
                 Window_information = {"browser" : browser,
                                         "zoom_level" : window.devicePixelRatio,
                                         "browser_width" : browser_window.outerWidth,
                                         "browser_height" : browser_window.outerHeight,
                                         "visual_width":browser_window.visualViewport.width,
                                         "visual_height":browser_window.visualViewport.height
                                        }
            }
            function aux_function(){
                if(browser[0][0] == "Firefox" ){
                    return [browser_window.screen.availWidth, browser_window.screen.availHeight]
                }

                if(browser[0][0] == "Chrome" ){
                    return [browser_window.visualViewport.width, browser_window.visualViewport.height]
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
