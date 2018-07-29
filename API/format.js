// git edit, debug  object is now dynamic providing the console with different messages as desired





//  standard format for how all your website should be bulit, should be a certain format, but made like this for best visual appearance and editing purposes. this is not for web objects but for dynamic concepts needed to achieve the purpose

                // helper function

                    function listening_zoom(){
						Window_information["visual_width"] =aux_function()[4]
                      	Window_information["visual_height"] =aux_function()[5]
                        var know_change = (Window_information["visual_width"]/2) - (Window_information["browser_width"]/2)
                        debug["checking device width"][1] ? console.log(Window_information["visual_width"]) : ""
                        if(know_change != $(".html_page").offset()["left"]){
                            $(".html_page").offset({
                                left:  know_change
                            })
                        }

                    }

                ////////////////////////////////////////////////////////////////////
                // this function helps the browser know how to resize the html window
                // know_change is the flag that lets the function know that the zoom has changed
                ////////////////////////////////////////////////////////////////////

 $(document).ready(function(){
            // position fix
            $("body > *:not('.debug')").css({
              "position":"absolute"
            })



            ////////////////////////////////////////////////////////////////////
            // global fix for purposeful programming
            ////////////////////////////////////////////////////////////////////

     //the html container
     {

    $(".html_page").length > 0 ?  true : $("body").append("<div class = 'html_page'></div>")
    $(".html_page").css({
        "width":  Window_information["browser_width"],
        "height":  Window_information["browser_height"],
        "border": "3px solid rgb(227,227,227)"
    })

    setInterval(listening_zoom, .00001)
        // the debugger object
            {
            $(".html_page").after("<div class ='debug'></div>")
            var debug_counter = 0
            var topic = Object.keys(debug)
            var booleans =Object.keys(debug).map(function(key){return debug[key]})
            var debug_executed = false;
            var debug_impt_position = $(".html_page").css("height")
            debug["debug object.self"][0] ? console.log(debug_impt_position) : ""
            var debug_placement;
            var object_looker;
            var debug_properties = [
                {
                "background-color":"yellow",
                "height":"5em",
                "width":"7em",
                "border-radius":"500px",
                "left":"0",
                "top": $(".html_page").css("height")
                },
                {
                "background-color":"green",
                "height":"20em",
                "width":"30em",
                "border-radius":"500px",
                "top":"0",
                "left":numberParse($(".html_page").css("width"))
                }
            ]




            // global helper function
                function changing_math (counter,iterate_object,direction){

                    if (direction == "+"){
                        if(counter == iterate_object.length - 1){
                            counter = 0
                            debug["debug object.self"][0] ? console.log("hit",counter) : ""
                        }
                        else{
                            counter += 1
                        }
                    }
                    else if (direction == "-"){
                        if(counter <= 0){
                            counter = iterate_object.length - 1
                        }
                        else{
                            counter -= 1
                        }

                    }
                    else{
                        throw new error("signs man")
                    }
                    debug_counter = counter
                    debug["debug object.self"][0] ? console.log(debug_counter) : ""
                    return counter
                }
            ///////////////////////////////////////////////////////////////
            // this function is made becuase it is timely to put conditionals everytime you need to iterate through
            // an array based on events, once the counter gets to the length of an array or that type, it will start at 0 again and vice versa
            ///////////////////////////////////////////////////////////////

            // helper function
                function debug_reset(){
                    debug_executed = false
                    debug["debug object.self"][1] ? console.log("ready")  : ""
                }
            ///////////////////////////////////////////////////////////////
            // this function helps the program properly reset the debugger when it needs to be put away
            //  or I could make it draggable
            ///////////////////////////////////////////////////////////////

            //helper function

            function event_linker(){
                debug["debug object.self"][1] ? console.log("looking to clear") : ""

                $(".debug_button").click(function(event){
                    debug["debug object.self"][1] ? console.log($(event.currentTarget).context.classList[0] == $(this).context.classList[0]) : ""
                    if($(event.currentTarget).context.classList[0] == $(this).context.classList[0]){
                        $(".debug").css(debug_properties[0])
                        $(".debug * ").hide()
                        setTimeout(debug_reset,500)
                        debug["debug object.self"][1] ? console.log(debug_properties[0],$(event.currentTarget).context.classList[0] == $(this).context.classList[0]) : ""
                    }

                })
                $.map($(".booleans > h2 "),function(option,index){

                    $(option).click(function(event){

                    if($(option).text() == 'true'){
                        $(option).text('false')
                        debug[topic[debug_counter]][index] = false
                    }
                    else{
                        $(option).text('true')
                        debug[topic[debug_counter]][index] = true
                    }
                    debug["debug object.self"][1] ? console.log($(option).text(),debug[topic[debug_counter]][index]) :  ""
                    debug["debug object.self"][0] ? console.log(event) : ""
                    })
                })
                debug["debug object.self"][1] ? console.log("attached the events") : ""
                clearTimeout(object_looker)

            }
            // object_looker = setInterval(event_linker,11000)
            ///////////////////////////////////////////////////////////////
            // this function links the event handler to the uncreated div
            //  for some reason you just have to keep calling this to make sure it still attached to the button
            ///////////////////////////////////////////////////////////////

            // helper function
                function debug_clone_formatter(){
                            let debug_height_check = numberParse($(".debug").css("height"))
                            $(".booleans:not(:first)").remove()
                            $.map($(".booleans").adv_clone({
                                items:booleans[debug_counter].length
                            }),function(d,i){
                                debug_placement =  topic.indexOf($(".topic > h2 ").text())
                                $(".booleans > h2 ").eq(i).text(booleans[topic.indexOf($(".topic > h2 ").text())][i])
                                debug["debug object.self"][2] ?  console.log(debug_placement) : ""
                                debug["debug object.self"][2] ? console.log($(".booleans > h2 ").eq(i).text(),booleans[i]) : ""
                            })

                            var debug_height_check_increase  = 2.4 * numberParse($(".booleans").css("height")) * $(".booleans").length

                            $(".debug").css({
                                "height": (debug_height_check > debug_height_check_increase ? debug_height_check : debug_height_check_increase),
                                "border-radius":1.7* numberParse($(".booleans").css("height")) * $(".booleans").length
                            })
                        }
            ///////////////////////////////////////////////////////////////
            // this fucntion is concerned with the dimensions of the debug object
            //  and the cloing of the booleans wells
            ///////////////////////////////////////////////////////////////

            $(".debug").css(debug_properties[0]).click(function(event){
                if(debug_executed == true ){
                    return
                }
                debug["debug object.self"][1] ? console.log(event) : ""
                $(this).css(debug_properties[1]).append("<div></div>")
                $(".debug > div").css({
                    "width":debug_properties[1].width
                })
                $(this).css({
                    "left":numberParse($(".html_page").css("width")) - numberParse($(".debug > div").css("width"))
                }).append("<h1>Debug</h1>")
                $(".debug > div").remove()
                $(".debug > h1").css({
                    "text-align":"center"
                })
                debug["debug object.self"][0] ? console.log(Object.keys(debug),Object.keys(debug).map(function(key){return debug[key]})) : ""
                Object.keys(debug).map(function(key,o){
                    debug["debug object.self"][0] ? console.log( debug[key],Object.keys(debug)[o]) : ""
                })
                if($("carousel-control").length <= 2){
                    $(".debug").append("<div class ='well topic'></div>" +
                "<div class ='well booleans'></div>" +
                '<a class="  carousel-control" role="button" data-slide="next" style="right: 0; left: auto;" ><span class="glyphicon glyphicon-chevron-right debug-right" aria-hidden="true" ></span><span class="sr-only" ></span></a>'+
                '<a class="  carousel-control" role="button" data-slide="prev" ><span class="glyphicon glyphicon-chevron-left debug-left" aria-hidden="true" ></span><span class="sr-only" ></span></a>')
                }
                $(this).draggable()
                $(".topic").css({
                    "width":"20em",
                    "height":"5em",
                    "margin":"auto",
                    "padding":"-5em",
                    "padding-left":"2em"
                }).append("<h2>" + topic[0] + "</h2>")
                $(".topic >h2 ").css({
                    "font-size":"1.5em"
                })
                $(".booleans").css({
                    "width":"20em",
                    "height":"5em",
                    "margin":"auto",
                    "padding":"-5em",
                    "padding-left":"2em"
                }).append("<h2>" + booleans[0] + "</h2>")
                $(".booleans >h2 ").css({
                    "font-size":"1.5em",
                    "text-align":"center"
                })
                debug_clone_formatter()

                debug_executed = true;

                $(".debug-left").click(function(){

                    $(".topic h2").text(topic[changing_math(debug_counter,topic,"-")])
                    $(".booleans h2").text(booleans[debug_counter])

                })
                $(".debug-right").click(function(){

                    $(".topic h2").text(topic[changing_math(debug_counter,topic,"+")])
                    $(".booleans h2").text(booleans[debug_counter])

                })

                $(".glyphicon").click(function(){
                    debug["debug object.self"][0] ? console.log(booleans[debug_counter]) : ""
                        debug["debug object.self"][1] ? console.log("hit",booleans[debug_counter].length,$(".booleans").length)  : ""


                    debug_clone_formatter()
                    clearInterval(object_looker)
                    object_looker = setInterval(event_linker,1)


                })
                $(".debug").append("<div class = 'debug_button'><h2>Return</h2></div>")
                $(".debug_button > h2").css({
                    "text-align":"center",
                    "v-align":"middle"
                })
                $(".debug_button").css({
                    "height":"5em",
                    "width":"10em",
                    "border-radius":"500px",
                    "background-color":"red",
                    "margin-left":"10em"
                })

                 object_looker = setTimeout(event_linker,510)
            })




        }
        //////////////////////////////////////////////////////////////////////////////////////////
        // I am making a debug object to better debug any problems along the way in making this API
        // It is recommeded that the browser refereshes each time a change is made in the debugger
        // var topic      contains the current section of items to be debugged
        // var booleans  contains whether certain facets will be displayed or
        // var debug_init items portraying the inital properties for the div
        // var debug_counter helpes the object know when to move to the next topics in debug
        //  var object_looker helps clear the interval used for the browser to listen for the missing debug button
        // var debug_height_check_increase  helps the debugg object know how to resize itself
        //////////////////////////////////////////////////////////////////////////////////////////


        // test object
        // $(".debug").css(debug_properties[0]).after("<h1 style = 'font-size:5em; color:blue'> Testing text</h1>")
        ///////////////////////////////////////////////////////////////
        // an idea for the test object it should be mainly reloading the page
        ///////////////////////////////////////////////////////////////

        // interface object
            var inteface_properties = [
                {
                "background-color":"green",
                "height":"5em",
                "width":"7em",
                "border-radius":"100px",
                "left":"0",
                "top": $(".html_page").css("height")
                },
                {
                "background-color":"rgba(102, 235, 0, 0.3)",
                "height":"40em",
                "width":"60em",
                "border-radius":"100px",
                "top":"0"
                }
            ];
            var interface_execute = false;
            var interface_shapes = [
                                    "square",
                                    "rectangle",
                                    "circle",
                                    "oval",
                                    "triangle-up",
                                    "triangle-down",
                                    "triangle-left",
                                    "triangle-right",
                                    "triangle-topleft",
                                    "triangle-topright",
                                    "triangle-bottomleft",
                                    "triangle-bottomright",
                                    "curvedarrow",
                                    "trapezoid",
                                    "star-six",
                                    "star-five",
                                    "pentagon",
                                    "hexagon",
                                    "octagon",
                                    "heart",
                                    "infinity",
                                    "diamond",
                                    "diamond-shield",
                                    "diamond-narrow",
                                    "cut-diamond",
                                    "egg",
                                    "pacman",
                                    "talkbubble",
                                    "burst-12",
                                    "burst-8",
                                    "yin-yang",
                                    "badge-ribbon",
                                    "space-invader",
                                    "tv",
                                    "chevron",
                                    "magnifying-glass",
                                    "facebook-icon",
                                    "moon",
                                    "flag",
                                    "cone",
                                    "cross",
                                    "base",
                                    "pointer",
                                    "glyphicon-asterisk",
                                    "glyphicon-plus",
                                    "glyphicon-eur",
                                    "glyphicon-euro",
                                    "glyphicon-minus",
                                    "glyphicon-cloud",
                                    "glyphicon-envelope",
                                    "glyphicon-pencil",
                                    "glyphicon-glass",
                                    "glyphicon-music",
                                    "glyphicon-search",
                                    "glyphicon-heart",
                                    "glyphicon-star",
                                    "glyphicon-star-empty",
                                    "glyphicon-user",
                                    "glyphicon-film",
                                    "glyphicon-th-large",
                                    "glyphicon-th",
                                    "glyphicon-th-list",
                                    "glyphicon-ok",
                                    "glyphicon-zoom-in",
                                    "glyphicon-zoom-out",
                                    "glyphicon-off",
                                    "glyphicon-cog",
                                    "glyphicon-trash",
                                    "glyphicon-home",
                                    "glyphicon-file",
                                    "glyphicon-time",
                                    "glyphicon-road",
                                    "glyphicon-download-alt",
                                    "glyphicon-download",
                                    "glyphicon-upload",
                                    "glyphicon-inbox",
                                    "glyphicon-play-circle",
                                    "glyphicon-repeat",
                                    "glyphicon-refresh",
                                    "glyphicon-list-alt",
                                    "glyphicon-lock",
                                    "glyphicon-flag",
                                    "glyphicon-headphones",
                                    "glyphicon-volume-off",
                                    "glyphicon-volume-down",
                                    "glyphicon-volume-up",
                                    "glyphicon-qrcode",
                                    "glyphicon-barcode",
                                    "glyphicon-tag",
                                    "glyphicon-tags",
                                    "glyphicon-book",
                                    "glyphicon-bookmark",
                                    "glyphicon-print",
                                    "glyphicon-camera",
                                    "glyphicon-font",
                                    "glyphicon-bold",
                                    "glyphicon-italic",
                                    "glyphicon-text-height",
                                    "glyphicon-text-width",
                                    "glyphicon-align-left",
                                    "glyphicon-align-center",
                                    "glyphicon-align-right",
                                    "glyphicon-align-justify",
                                    "glyphicon-list",
                                    "glyphicon-indent-left",
                                    "glyphicon-indent-right",
                                    "glyphicon-facetime-video",
                                    "glyphicon-picture",
                                    "glyphicon-map-marker",
                                    "glyphicon-adjust",
                                    "glyphicon-tint",
                                    "glyphicon-edit",
                                    "glyphicon-share",
                                    "glyphicon-check",
                                    "glyphicon-move",
                                    "glyphicon-step-backward",
                                    "glyphicon-fast-backward",
                                    "glyphicon-backward",
                                    "glyphicon-play",
                                    "glyphicon-pause",
                                    "glyphicon-stop",
                                    "glyphicon-forward",
                                    "glyphicon-fast-forward",
                                    "glyphicon-step-forward",
                                    "glyphicon-eject",
                                    "glyphicon-chevron-left",
                                    "glyphicon-chevron-right",
                                    "glyphicon-plus-sign",
                                    "glyphicon-minus-sign",
                                    "glyphicon-remove-sign",
                                    "glyphicon-ok-sign",
                                    "glyphicon-question-sign",
                                    "glyphicon-info-sign",
                                    "glyphicon-screenshot",
                                    "glyphicon-remove-circle",
                                    "glyphicon-ok-circle",
                                    "glyphicon-ban-circle",
                                    "glyphicon-arrow-left",
                                    "glyphicon-arrow-right",
                                    "glyphicon-arrow-up",
                                    "glyphicon-arrow-down",
                                    "glyphicon-share-alt",
                                    "glyphicon-resize-full",
                                    "glyphicon-resize-small",
                                    "glyphicon-exclamation-sign",
                                    "glyphicon-gift",
                                    "glyphicon-leaf",
                                    "glyphicon-fire",
                                    "glyphicon-eye-open",
                                    "glyphicon-eye-close",
                                    "glyphicon-warning-sign",
                                    "glyphicon-plane",
                                    "glyphicon-calendar",
                                    "glyphicon-random",
                                    "glyphicon-comment",
                                    "glyphicon-magnet",
                                    "glyphicon-chevron-up",
                                    "glyphicon-chevron-down",
                                    "glyphicon-retweet",
                                    "glyphicon-shopping-cart",
                                    "glyphicon-folder-close",
                                    "glyphicon-folder-open",
                                    "glyphicon-resize-vertical",
                                    "glyphicon-resize-horizontal",
                                    "glyphicon-hdd",
                                    "glyphicon-bullhorn",
                                    "glyphicon-bell",
                                    "glyphicon-certificate",
                                    "glyphicon-thumbs-up",
                                    "glyphicon-thumbs-down",
                                    "glyphicon-hand-right",
                                    "glyphicon-hand-left",
                                    "glyphicon-hand-up",
                                    "glyphicon-hand-down",
                                    "glyphicon-circle-arrow-right",
                                    "glyphicon-circle-arrow-left",
                                    "glyphicon-circle-arrow-up",

                                    ];
            var interface_counter = 14;
            var interface_counter_old = 0;
            var interface_titles = ["Make the object","Type & Amount","Design the Object"]
            var interface_titles_counter = 0;
            var interface_amount = 0
            var interface_colors = "AliceBlue-rgb(240, 248, 255)+AntiqueWhite-rgb(250, 235, 215)+Aqua-rgb(0, 255, 255)+Aquamarine-rgb(127, 255, 212)+Azure-rgb(240, 255, 255)+Beige-rgb(245, 245, 220)+Bisque-rgb(255, 228, 196)+Black-rgb(0, 0, 0)+BlanchedAlmond-rgb(255, 235, 205)+Blue-rgb(0, 0, 255)+BlueViolet-rgb(138, 43, 226)+Brown-rgb(165, 42, 42)+BurlyWood-rgb(222, 184, 135)+CadetBlue-rgb(95, 158, 160)+Chartreuse-rgb(127, 255, 0)+Chocolate-rgb(210, 105, 30)+Coral-rgb(255, 127, 80)+CornflowerBlue-rgb(100, 149, 237)+Cornsilk-rgb(255, 248, 220)+Crimson-rgb(220, 20, 60)+Cyan-rgb(0, 255, 255)+DarkBlue-rgb(0, 0, 139)+DarkCyan-rgb(0, 139, 139)+DarkGoldenRod-rgb(184, 134, 11)+DarkGray-rgb(169, 169, 169)+DarkGrey-rgb(169, 169, 169)+DarkGreen-rgb(0, 100, 0)+DarkKhaki-rgb(189, 183, 107)+DarkMagenta-rgb(139, 0, 139)+DarkOliveGreen-rgb(85, 107, 47)+DarkOrange-rgb(255, 140, 0)+DarkOrchid-rgb(153, 50, 204)+DarkRed-rgb(139, 0, 0)+DarkSalmon-rgb(233, 150, 122)+DarkSeaGreen-rgb(143, 188, 143)+DarkSlateBlue-rgb(72, 61, 139)+DarkSlateGray-rgb(47, 79, 79)+DarkSlateGrey-rgb(47, 79, 79)+DarkTurquoise-rgb(0, 206, 209)+DarkViolet-rgb(148, 0, 211)+DeepPink-rgb(255, 20, 147)+DeepSkyBlue-rgb(0, 191, 255)+DimGray-rgb(105, 105, 105)+DimGrey-rgb(105, 105, 105)+DodgerBlue-rgb(30, 144, 255)+FireBrick-rgb(178, 34, 34)+FloralWhite-rgb(255, 250, 240)+ForestGreen-rgb(34, 139, 34)+Fuchsia-rgb(255, 0, 255)+Gainsboro-rgb(220, 220, 220)+GhostWhite-rgb(248, 248, 255)+Gold-rgb(255, 215, 0)+GoldenRod-rgb(218, 165, 32)+Gray-rgb(128, 128, 128)+Grey-rgb(128, 128, 128)+Green-rgb(0, 128, 0)+GreenYellow-rgb(173, 255, 47)+HoneyDew-rgb(240, 255, 240)+HotPink-rgb(255, 105, 180)+IndianRed -rgb(205, 92, 92)+Indigo -rgb(75, 0, 130)+Ivory-rgb(255, 255, 240)+Khaki-rgb(240, 230, 140)+Lavender-rgb(230, 230, 250)+LavenderBlush-rgb(255, 240, 245)+LawnGreen-rgb(124, 252, 0)+LemonChiffon-rgb(255, 250, 205)+LightBlue-rgb(173, 216, 230)+LightCoral-rgb(240, 128, 128)+LightCyan-rgb(224, 255, 255)+LightGoldenRodYellow-rgb(250, 250, 210)+LightGray-rgb(211, 211, 211)+LightGrey-rgb(211, 211, 211)+LightGreen-rgb(144, 238, 144)+LightPink-rgb(255, 182, 193)+LightSalmon-rgb(255, 160, 122)+LightSeaGreen-rgb(32, 178, 170)+LightSkyBlue-rgb(135, 206, 250)+LightSlateGray-rgb(119, 136, 153)+LightSlateGrey-rgb(119, 136, 153)+LightSteelBlue-rgb(176, 196, 222)+LightYellow-rgb(255, 255, 224)+Lime-rgb(0, 255, 0)+LimeGreen-rgb(50, 205, 50)+Linen-rgb(250, 240, 230)+Magenta-rgb(255, 0, 255)+Maroon-rgb(128, 0, 0)+MediumAquaMarine-rgb(102, 205, 170)+MediumBlue-rgb(0, 0, 205)+MediumOrchid-rgb(186, 85, 211)+MediumPurple-rgb(147, 112, 219)+MediumSeaGreen-rgb(60, 179, 113)+MediumSlateBlue-rgb(123, 104, 238)+MediumSpringGreen-rgb(0, 250, 154)+MediumTurquoise-rgb(72, 209, 204)+MediumVioletRed-rgb(199, 21, 133)+MidnightBlue-rgb(25, 25, 112)+MintCream-rgb(245, 255, 250)+MistyRose-rgb(255, 228, 225)+Moccasin-rgb(255, 228, 181)+NavajoWhite-rgb(255, 222, 173)+Navy-rgb(0, 0, 128)+OldLace-rgb(253, 245, 230)+Olive-rgb(128, 128, 0)+OliveDrab-rgb(107, 142, 35)+Orange-rgb(255, 165, 0)+OrangeRed-rgb(255, 69, 0)+Orchid-rgb(218, 112, 214)+PaleGoldenRod-rgb(238, 232, 170)+PaleGreen-rgb(152, 251, 152)+PaleTurquoise-rgb(175, 238, 238)+PaleVioletRed-rgb(219, 112, 147)+PapayaWhip-rgb(255, 239, 213)+PeachPuff-rgb(255, 218, 185)+Peru-rgb(205, 133, 63)+Pink-rgb(255, 192, 203)+Plum-rgb(221, 160, 221)+PowderBlue-rgb(176, 224, 230)+Purple-rgb(128, 0, 128)+RebeccaPurple-rgb(102, 51, 153)+Red-rgb(255, 0, 0)+RosyBrown-rgb(188, 143, 143)+RoyalBlue-rgb(65, 105, 225)+SaddleBrown-rgb(139, 69, 19)+Salmon-rgb(250, 128, 114)+SandyBrown-rgb(244, 164, 96)+SeaGreen-rgb(46, 139, 87)+SeaShell-rgb(255, 245, 238)+Sienna-rgb(160, 82, 45)+Silver-rgb(192, 192, 192)+SkyBlue-rgb(135, 206, 235)+SlateBlue-rgb(106, 90, 205)+SlateGray-rgb(112, 128, 144)+SlateGrey-rgb(112, 128, 144)+Snow-rgb(255, 250, 250)+SpringGreen-rgb(0, 255, 127)+SteelBlue-rgb(70, 130, 180)+Tan-rgb(210, 180, 140)+Teal-rgb(0, 128, 128)+Thistle-rgb(216, 191, 216)+Tomato-rgb(255, 99, 71)+Turquoise-rgb(64, 224, 208)+Violet -rgb(238, 130, 238)+Wheat-rgb(245, 222, 179)+White-rgb(255, 255, 255)+WhiteSmoke-rgb(245, 245, 245)+Yellow-rgb(255, 255, 0)+YellowGreen-rgb(154, 205, 50)+"
            var interface_color_array = []
            var interface_color_choice;
            var interface_group = 0;
            var interface_css_norm = "{"
            var interface_css_before = "{"
            var interface_css_after = "{"
            var interface_css_replace = { color : "",
                                          height:0,
                                          width : 0
                                        }


            $(".debug").after("<div class = 'interface'></div>")
            $(".interface").css(inteface_properties[0]).draggable()
            $(".interface").click(function(){
                if(interface_execute == true){
                    return
                }
                interface_execute = true;
                $(this).css(inteface_properties[1],2000)

                // interface heading
                    {
                        $(this).append("<h1>User Interface</h1>")
                        $(".interface > h1").css({
                            "text-align":"center",
                            "font-size":"5em",
                            "background-color":"white"
                        })
                    }
                //////////////////////////////////////////////////////////
                //
                //////////////////////////////////////////////////////////

                // interface body
                {

                    //helper function
                    {
                        function getStyleByQuery(id) {
                            return getAllStyles(document.querySelector(id));
                        }
                        function getAllStyles(elem) {
                            if (!elem) return []; // Element does not exist, empty list.
                            var win = document.defaultView || window, style, styleNode = [], psuedo = Window_information["psuedo"];
                            if (win.getComputedStyle) { /* Modern browsers */
                                psuedo.forEach(function(ps,i){
                                    style = win.getComputedStyle(elem, ps);
                                    for (var i=0; i<style.length; i++) {
                                        styleNode.push( style[i] + ':' + style.getPropertyValue(style[i]) + ":" +( ps == '' ? "norm" : ps.indexOf(":") == -1 ? ps : ps.split(":")[1]  ));
                                        //               ^name ^           ^ value ^

                                    }
                                })
                            } else if (elem.currentStyle) { /* IE */
                                style = elem.currentStyle;
                                for (var name in style) {
                                    styleNode.push( name + ':' + style[name] );
                                }
                            } else { /* Ancient browser..*/
                                style = elem.style;
                                for (var i=0; i<style.length; i++) {
                                    styleNode.push( style[i] + ':' + style[style[i]] );
                                }
                            }
                            return styleNode;


                        }
                    }
                    //////////////////////////////////////////////////////////
                    //
                    //////////////////////////////////////////////////////////

                    // page1
                    {

                        $(".interface").append("<h2> "+interface_titles[0] +"</h2><div class = 'page1'></div><div class = 'page1'></div> "+
                     '<a class="  carousel-control page1 " role="button" data-slide="next" style="right: 0; left: auto;" ><span class="glyphicon glyphicon-chevron-right interface-right interface_glyph" aria-hidden="true" ></span><span class="sr-only" ></span></a>'+
                    '<a class="  carousel-control page1" role="button" data-slide="prev" ><span class=" glyphicon glyphicon-chevron-left  interface-left interface_glyph" aria-hidden="true" ></span><span class="sr-only" ></span></a>')
                        $(".interface > h2").css({
                            "text-align":"center",
                        })

                        $(".interface > h2").css({
                            "background-color":"yellow"
                        })
                        $(".interface > div").eq(1).css({
                            "height":inteface_properties[1].height,
                            "width":  inteface_properties[1].width,
                        })
                        $(".interface > div:first").css({
                            "height": .3 * numberParse($(".interface > div").eq(1).css("width")),
                            "width":  1.1 * numberParse($(".interface > div").eq(1).css("height")),
                            "background-color":"white",
                            "position":"absolute",
                            "margin-left":"8em"

                        }).append("<div></div>")
                        $(".interface > div > div").css({
                            "margin-left": .4 * numberParse($(".interface > div:first").css("width")),
                            "margin-top": .3 * numberParse($(".interface > div:first").css("height"))
                        }).addClass("shapes glyphicon ").attr("id",interface_shapes[interface_counter])


                        $(".interface-left").click(function(event){
                            interface_counter_old = interface_counter
                            interface_counter = changing_math(interface_counter,interface_shapes,"-")
                            debug["interface object"][0] ? console.log(interface_shapes[interface_counter]) : ""
                            if(interface_shapes[interface_counter].indexOf("glyphicon") != -1){
                                debug["interface object"][0] ? console.log("true") : ""
                                $(".interface > div > div").addClass(interface_shapes[interface_counter]).removeClass(interface_shapes[interface_counter+1]).attr("id","")
                            }
                            else{
                                $(".interface > div > div").attr("id",interface_shapes[interface_counter]).removeClass(interface_shapes[interface_counter_old])
                            }
                        })
                        $(".interface-right").click(function(event){
                            interface_counter_old = interface_counter
                            interface_counter = changing_math(interface_counter,interface_shapes,"+")
                            debug["interface object"][0] ? console.log(interface_shapes[interface_counter]) : ""
                            if(interface_shapes[interface_counter].indexOf("glyphicon") != -1){
                                debug["interface object"][0] ? console.log("true") : ""
                                $(".interface > div > div").addClass(interface_shapes[interface_counter]).removeClass(interface_shapes[interface_counter -1]).attr("id","")
                            }
                            else{
                                $(".interface > div > div").attr("id",interface_shapes[interface_counter])
                                $(".interface > div > div").removeClass(interface_shapes[interface_counter_old])
                            }
                        })

                    }
                    //////////////////////////////////////////////////////////
                    // will use an array to understand how we will make the object
                    //////////////////////////////////////////////////////////

                    // page2

                    // helper function
                    var type_and_arguments_counter = 0;
                    var type_and_arguments_definition = "";
                        function type_and_arguments(){

                            interface_shapes.forEach(function(shape,i){
                                if($(".page2 textarea").eq(0).val() == shape ){
                                    debug["interface object"][2] ? console.log(shape) : ""
                                }
                            })

                            $(".page2 textarea").eq(1).val().split("").forEach(function(char,i){
                                debug["interface object"][0] ? console.log(isNaN(char)) : ""
                                if(isNaN(char)){
                                     type_and_arguments_counter +=1

                                }

                            })
                            if(type_and_arguments_counter >= 1){
                                alert("Please enter a whole number")
                                type_and_arguments_counter = 0
                                return 1
                            }
                            interface_amount = parseInt($(".page2 textarea").eq(1).val())
                            return 2

                        }
                    //////////////////////////////////////////////////////////
                    // this function helps the interface object know how to make the proper amount and type of clones
                    // var type_and_arguments_counter  if this is > 0 that means the function found the amount was  not a string
                    //////////////////////////////////////////////////////////

                    {
                        $(".interface").append("<div class = 'page2'><h3>Label: this is a </h3><textarea type='text' class = 'form-control'></textarea>" +
                        "<h3>Amount </h3><textarea type='text' class = 'form-control'></textarea></div>")
                        $(".page2").css({
                            "height": .3 * numberParse($(".interface > div").eq(1).css("width")),
                            "width":  1.1 * numberParse($(".interface > div").eq(1).css("height")),
                            "position":"absolute",
                            "margin-left":"-500px",
                            "opacity":"0"

                        })
                        $(".page2 h3").css({
                            "background-color":"yellow",
                            "text-align":"center",

                        })
                        $(".page2 textarea").css({
                            "text-align":"center",
                            "font-size":'14px'
                        })

                        $(".page2 textarea").eq(1).val()

                    }
                    //////////////////////////////////////////////////////////
                    // var interface_amount, lets the interface know how many clones to make
                    //////////////////////////////////////////////////////////

                    // page3 details
                        {
                            var detail_information = ["Height","Width","Color"]
                            var detail_css_prop;
                            var detail_css_val;
                            $(".interface").append("<div class = 'page3'></div>")
                            $(".page3").css({
                                "background-color":"blue",
                                "height":.55 * numberParse($(".interface").css("height")),
                                "width":.9 *numberParse($(".interface").css("width")),
                                "margin-left":"-500px",
                                "opacity":"0",
                                "border":"3px solid black",
                                "position":"absolute"
                            }).append("<div class = 'page3 properties'> "+
                            "<div><h3></h3><div>" +
                            "<textarea class ='form-control'></textarea>" +

                            "</div>")

                            $(".page3 .properties").css({
                                "background-color":"white",
                                "height": .4 * numberParse($(".page3:first").css("height")),
                                "width": .25 * numberParse($(".page3:first").css("width")),
                                "border":"3px solid black",
                                "margin-top":"1em"
                            })

                            $(".page3 .properties div").eq(0).css({
                                "background-color" :"yellow",
                                "height":.25 * numberParse($(".page3 .properties").css("height")),
                                "width":.4 * numberParse($(".page3 .properties").css("width")),
                                "margin":"auto",
                                "margin-top":"-1em"
                            })
                            $(".page3 .properties div h3").text(detail_information[0]).css({
                                "text-align":"center"
                            })
                            $(".page3 .properties textarea").css({
                                "text-align":"center",
                                "font-size":"27px",
                                "height":.5 * numberParse($(".page3 .properties").css("height"))

                            })
                            $.map($(".properties").adv_clone({
                                items:3,
                                debug: true,
                                specifiers:[["color",3]]
                            }),function(properties,i){
                                $(".properties div h3").eq(i).text(detail_information[i])
                            })
                            $(".page3").pretty_print({
                                objects: $(".page3 .properties"),
                                indent:"3em",
                                x_spacing:"6em",
                                y_spacing:"-21em"

                            })

                        }
                    //////////////////////////////////////////////////////////
                    // we need the box to hold relevant details,
                    // var detail_css_prop these help the click object know which variable to use
                    // var detail_css_val;
                    //////////////////////////////////////////////////////////
                        // prev and nxt buttons to move through the interface
                            {
                                // helper function
                                    function haystack(css_rule){
                                        if(css_rule.indexOf("rgb(255, 0, 0)") != -1){
                                            interface_css_replace["color"] =  interface_color_choice
                                            debug["interface object"][0]  ? console.log(css_rule,interface_css_replace["color"]) : ""
                                        }
                                        if(css_rule.indexOf(interface_color_choice) != -1){
                                            interface_css_replace["color"] = "rgb(255, 0, 0)"

                                            debug["interface object"][0]  ? console.log(css_rule,interface_css_replace["color"]) : ""
                                        }
                                        return  css_rule.split(":")[0] + ":" + interface_css_replace["color"]  + ";"
                                    }
                                ////////////////////////////////////////////////////////////////////////////////////////
                                //this function helps the css query algorightm fix the specifc difference that are appering wrong in the html_page
                                ////////////////////////////////////////////////////////////////////////////////////////

                                $(".interface").append("<ul class = 'pager'>"+
                                "<li class = 'previous'>"+
                                "<a>Previous</a>" +
                                "</li>" +
                                "<li class = 'next'>" +
                                "<a>Next</a>" +
                                "</li>"
                                )

                                $(".interface ul").css({

                                    "margin-top":"-15em",
                                    "z-index":"5"
                                })


                                $(".interface ul a:first").css({
                                    "margin-left":"10em"
                                })

                                $(".interface ul a:last").css({
                                    "margin-left":"10em",
                                    "float":"none"
                                })

                                $(".interface ul a:first").click(function(event){

                                })

                                $(".interface ul a:last").click(function(event){
                                    interface_titles_counter = changing_math(interface_titles_counter,interface_titles,"+")
                                    debug["interface object"][2] ? console.log(interface_titles_counter) : ""
                                    if(interface_titles_counter == 0){


                                            $.map($(".properties"),function(prop_val,i){
                                                debug["interface object"][0] ? console.log($(".properties textarea").eq(i).val(),
                                                $(".properties div h3").eq(i).text().toLowerCase()) : ""
                                                detail_css_prop = $(".properties div h3").eq(i).text().toLowerCase()
                                                detail_css_val = $(".properties textarea").eq(i).val()
                                                if($(".properties h3").eq(i).text() == "Color"){
                                                    detail_css_prop = ""
                                                    interface_color_choice = $(".properties textarea").eq(i).val()
                                                }
                                                $(".prototype").css(
                                                    detail_css_prop , detail_css_val
                                                )
                                            })
 
                                            $.map($(".html_page .shapes  "),function(shape_group,i){
                                                
                                                debug["interface object"][0] ? console.log($(shape_group)[0].className.indexOf("html_object_")) : ""
                                                if($(shape_group)[0].className.indexOf("html_object_") == -1){
                                                   $(shape_group).removeClass("glyphicon prototype ").addClass("html_object_" + interface_group.toString())
                                                }
                                            })
                                            
                                            // element & psuedo css manipulation
                                            {
                                                interface_colors.split("+").forEach(function(a,i){
                                                    a.split("-")[0].toLowerCase() == interface_color_choice.toLowerCase() ? debug["interface object"][0] ? console.log(a.split("-")[1]): "" : ""
                                                    a.split("-")[0].toLowerCase() == interface_color_choice.toLowerCase() ? interface_color_choice = a.split("-")[1]: ""
                                                })


                                                getStyleByQuery(".html_object_" + interface_group.toString()).forEach(function(shade_style,i){
                                                            interface_css_replace["color"]  = shade_style.split(":")[1]
                                                            if( shade_style.split(":")[2] == "norm"){

                                                                interface_css_norm += haystack(shade_style)
                                                            }
                                                            if( shade_style.split(":")[2] == "before"){

                                                                interface_css_before +=haystack(shade_style)
                                                            }
                                                            if( shade_style.split(":")[2] == "after"){

                                                                interface_css_after += haystack(shade_style)
                                                            }
                                                })
                                                //  so at this point we have enough css rules to remake the shape
                                                $(".html_object_" + interface_group.toString()).attr("id","")
                                                interface_css_norm += "}"
                                                interface_css_before += "}"
                                                interface_css_after += "}"
                                                $('head').append("<style>.html_object_"+interface_group.toString() + interface_css_norm +"</style>");
                                                $('head').append("<style>.html_object_"+interface_group.toString() +"::before"+ interface_css_before +"</style>");
                                                $('head').append("<style>.html_object_"+interface_group.toString()+ "::after"+ interface_css_after +"</style>");
                                                interface_group += 1;
                                                interface_css_norm = "{"
                                                interface_css_before = "{"
                                                interface_css_after = "{"




                                            }
                                            ////////////////////////////////////////////////////////////////////
                                            //
                                            ////////////////////////////////////////////////////////////////////
                                            $(".page3:first ").css({
                                                "margin-left":"-500px",
                                                "opacity":"0"
                                            })
                                            $(".page1:first").css({
                                                "margin-left":"8em",
                                                "opacity":"1"
                                            })

                                            $(".page1:not(:first)").css({
                                                "margin-left":"0px",
                                                "opacity":"1"
                                            })
                                    }
                                    if(interface_titles_counter == 1){

                                        $(".page1 .shapes:first").removeClass("stay")
                                        $(".page1 .shapes").adv_clone(2)
                                        $(".page1 .shapes:first").addClass("stay")
                                        $(".page1 .shapes:last").addClass("prototype")
                                        $(".html_page").append($(".page1 .shapes:not('.stay')"))
                                        // $(".prototype").css({
                                        //     "background-color":"blue"
                                        // })
                                        debug["interface object"][0] ? console.log($(".page1 .shapes")) : ""
                                        $(".page1 ").css({
                                            "margin-left":"-500px",
                                            "opacity":"0"
                                        })
                                        $(".page2").css({
                                            "margin-left":"8em",
                                            "margin-top":"-40em",
                                            "opacity":"1"
                                        })
                                        // alert("If you leave empty it will be assumed you only want one clone")
                                    }
                                    if(interface_titles_counter == 2){

                                        if(type_and_arguments() ==1){
                                            debug["interface object"][0] ? console.log("interface object knows") : ""
                                            interface_titles_counter = 1;
                                        }
                                        else{
                                            debug["interface object"][0] ? console.log($(".page2 textarea").eq(0).val(),$(".page2 textarea").eq(1).val()) : ""
                                            $(".page2 textarea").eq(0).val() != "" ? $(".prototype").addClass("user-" + $(".page2 textarea").eq(0).val()) : ""
                                            $(".prototype").adv_clone(parseInt($(".page2 textarea").eq(1).val()))
                                            $(".page2 ").css({
                                            "margin-left":"-500px",
                                            "opacity":"0"
                                        })
                                            $(".page3:first").css({
                                                "margin-left":"3em",
                                                "margin-top":"-40em",
                                                "opacity":"1"
                                            })
                                        }
                                    }
                                    $(".interface > h2:first").text(interface_titles[interface_titles_counter])

                                })

                            }
                        //////////////////////////////////////////////////////////
                        // for the first part we need to send a shape into the html page
                        //  for the secound part, we need multiple the amount needed and save it as a custom
                        // item in case she wants to use it later
                        // for the 3rd part the prototypes have to be responsive
                        //////////////////////////////////////////////////////////
                        $(".interface > div >div").click(function(event){
                            debug["interface object"][2] ? console.log("label and amount") : ""
                            // $(".interface > div").hide()
                        })

                }
                //////////////////////////////////////////////////////////
                //make the object
                // label the object
                //  choose the design (this means additional design the user cannot envision or cstomer made design)
                        // shapes that have problems and glyphicons
                            // trapezoid
                            // parallelogram
                            // octagon
                            // infinity
                            // cut-diamond
                            // yin-yang
                            // facebook icon
                //////////////////////////////////////////////////////////

            })



        ///////////////////////////////////////////////////////////////
        //the interface object here is what will really redefine how we builid websites
        //  it will be a lot faster, a lot more efficient and people will be able to build websites with this app
        //  this interface should be ergonomic and granular, making the user feel like a programmer when maintaing their website
        //  inteface_properties is the array that will change the interface object when its time to change
        //  interface_execute helps the interface object know when to display or not
        //  var interface_shapes contains a list off all the shapes made in css, since chrome has made them inaccessible through javascript
        //  var interface_counter_shapes helps the first part of the interface object scroll through different shapes
        // var interface_titles is used the help the user understand what page they are on
        // var interface_titles_counter helps the API  know what counter to show the interface sub title
        // var interface_colors all colors the user can choose
        // var interface_color_choice is the color the user chooses to make the the object
        // var interface_css_norm for the existing css element, we have to take the id and give a new one
        // var interface_css_before for the css for the before element
        // var interface_css_after for the css for the after element
        // var interface_css_replace helps the inteface object replace proper values about the object
        // var interface_group gives the created objects an identity group so they wont be affected by new objects coming into the html page
        ///////////////////////////////////////////////////////////////

        // external objects
        {
            var topspace = 0;
            $.map($("body > *"),function(outside,no){
                debug["external objects"][0] ? console.log($(outside).css("position"),$(outside).css("top"),$(outside).css("margin-top"),$(outside)) : ""
                if($(outside)["0"].classList[0] != "html_page"){
                    $(outside).css({
                        "position":"relative",
                        "top":topspace += numberParse($("body > *").eq(no -1).css("height"))

                    })
                    debug["external objects"][1] ? console.log("move it out",$(outside).css("position")): ""
                }
            })

        }
        ////////////////////////////////////////////////////////////////////
        // this section focus on ensure that anything outside html container tag stays outside in the appropriate fashion
        // var topspace ensures that all outside contents are placed in an orderly fashion
        ////////////////////////////////////////////////////////////////////


    }
    ////////////////////////////////////////////////////////////////////
    // the html container was designed for the problem presented by zooming functionality of different websites and the media device dimensions presented
    // nothing should be outside of this container, its is a container now but hopefully code will be  used to solidify the barrier that the the container will present
    // anything that is supposed to be outside the container should not enter the container, to organize it it should be below the container
    // three things required the container to do
        // mobile responiveness
        // item placement suggestion
        // zoom size

    // browser_window.visualViewport.width is responsible for the width ratio change when the page zoom is changed
    //  leading_navigation will be nacigation control, if it refuses to stay in the html container something must be done
    ////////////////////////////////////////////////////////////////////

     /*FIX ME */
    // in firefox window the outerwidth is not the same find a way around this
    ////////////////////////////////////////////////////////////////////

    // test objects ill deal with this when I find necessary
    $(".interface").trigger("click")
    // $(".interface ul a:last").trigger("click")
    // $(".interface ul a:last").trigger("click")
    ////////////////////////////////////////////////////////////////////
    //
    ////////////////////////////////////////////////////////////////////

})
