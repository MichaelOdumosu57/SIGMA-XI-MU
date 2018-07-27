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

    // setInterval(listening_zoom, .00001)
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
                '<a class="  carousel-control" role="button" data-slide="next" style="right: 0; left: auto;" ><span class="glyphicon glyphicon-chevron-right" aria-hidden="true" ></span><span class="sr-only" ></span></a>'+
                '<a class="  carousel-control" role="button" data-slide="prev" ><span class="glyphicon glyphicon-chevron-left" aria-hidden="true" ></span><span class="sr-only" ></span></a>')
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

                $(".glyphicon-chevron-left").click(function(){

                    $(".topic h2").text(topic[changing_math(debug_counter,topic,"-")])
                    $(".booleans h2").text(booleans[debug_counter])

                })
                $(".glyphicon-chevron-right").click(function(){

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
        $(".debug").after("<div class = 'interface'></div>")
        ///////////////////////////////////////////////////////////////
        //the interface object here is what will really redefine how we builid websites
        //  it will be a lot faster, a lot more efficient and people will be able to build websites with this app
        //  this interface should be ergonomic and granular, making the user feel like a programmer when maintaing their website
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



})
