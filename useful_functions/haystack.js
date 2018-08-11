function haystack(css_rule,actual){
                                        if(actual){
                                            if(css_rule.indexOf("box-shadow") == 0){
                                                debug["interface object"][4] ? console.log(css_rule.split(":")[1].split("0)")[1]) : ""
                                                interface_css_replace["color"] =  interface_color_choice
                                                return css_rule.split(":")[0] + ":" + interface_css_replace["color"]  +  css_rule.split(":")[1].split("0)")[1] + ";"
                                            }
                                            // the other browsers might have something to say
                                            //  if desired then the box-shadow dimensions might need to be affect by the dimension ratio
                                            if(css_rule.indexOf("transform:matrix") == 0){
                                                $("html >" + css_default_tag).css("transform",css_rule.split(":")[1])
                                                interface_special_rules["transform"] = (Math.acos(parseFloat($("html >" + css_default_tag).css("transform").split(",")[0].split("(")[1]))/(Math.PI/180)).toFixed(4)
                                                
                                                parseFloat($("html >" + css_default_tag).css("transform").split(",")[1]) < 0 ? interface_special_rules["transform"] *= -1 : ""
                                                debug["interface object"][0]  ? console.log(interface_special_rules["transform"] , (interface_css_replace["height"]/interface_css_replace["width"]) ,interface_special_rules["transform"] * (interface_css_replace["height"]/interface_css_replace["width"]),parseFloat($("html >" + css_default_tag).css("transform").split(",")[1]) < 0 ,css_rule) : ""
                                                 
                                                 return  css_rule.split(":")[0] + ":rotate(" + (interface_special_rules["transform"] * (interface_css_replace["height"]/interface_css_replace["width"])).toString() + "deg);"
                                                

                                            }
                                            if(css_rule.indexOf("rgb(255, 0, 0)") != -1){
                                                interface_css_replace["color"] =  interface_color_choice
                                                debug["interface object"][4]  ? console.log(css_rule,interface_css_replace["color"]) : ""
                                            }
                                            if(css_rule.indexOf(interface_color_choice) != -1){
                                                interface_css_replace["color"] = "rgb(255, 0, 0)"
    
                                                debug["interface object"][0]  ? console.log(css_rule,interface_css_replace["color"]) : ""
                                            }
                                            
                                            // if(css_rule.indexOf("height") == 0 || css_rule.indexOf("width") == 0 ){
                                            //     debug["interface object"][0]  ? console.log("you cant get this somehow",css_rule) : ""
                                            // }
                                            if(css_rule.split(":")[1].indexOf("px") != -1 &&  (css_rule.indexOf("border") != -1 || css_rule.indexOf("margin-bottom") != -1 || css_rule.indexOf("margin") == -1  || css_rule.indexOf("height") == 0 || css_rule.indexOf("width") == 0 || css_rule.indexOf("transform-origin") == 0  ) ){

                                                if((css_rule.indexOf("left") != -1 || css_rule.indexOf("right") != -1 || css_rule.indexOf("width") == 0 ) && !isNaN(interface_css_replace["width"])   ){
                                                    debug["interface object"][4]  ? console.log(css_rule,numberParse(css_rule.split(":")[1]) ,parseFloat(interface_css_replace["width"])) : ""
                                                    interface_css_replace_width = numberParse(css_rule.split(":")[1]) * parseFloat(interface_css_replace["width"])
                                                    return  css_rule.split(":")[0] + ":" + interface_css_replace_width.toString() + "px"  + ";"
                                                }
                                                
                                                
                                                
                                                else if((css_rule.indexOf("top") != -1 || css_rule.indexOf("bottom") != -1  || css_rule.indexOf("height") == 0) && !isNaN(interface_css_replace["height"]) ){
                                                    debug["interface object"][4]  ? console.log(css_rule,numberParse(css_rule.split(":")[1]) , parseFloat(interface_css_replace["height"])) : ""
                                                    interface_css_replace_height = numberParse(css_rule.split(":")[1]) * parseFloat(interface_css_replace["height"])
                                                    return  css_rule.split(":")[0] + ":" + interface_css_replace_height.toString() + "px"  + ";"
                                                }
                                                
                                                else if(css_rule.indexOf("transform-origin") == 0 && (!isNaN(interface_css_replace["width"]) && !isNaN(interface_css_replace["height"]))  ){
                                                    debug["interface object"][0]  ? console.log("the final piece",css_rule.split(":")[1].split(" ")) : ""
                                                    interface_special_rules["transform-origin:after"] = (numberParse(css_rule.split(":")[1].split(" ")[0]) * interface_css_replace["width"]).toString() + "px" + " " + (numberParse(css_rule.split(":")[1].split(" ")[1]) * interface_css_replace["height"]).toString() + "px"
                                                        return  css_rule.split(":")[0] + ":" + interface_special_rules["transform-origin:after"]  + ";"
                                                    
                                                }
                                                
                                            }
                                        }
                                        return  css_rule.split(":")[0] + ":" + interface_css_replace["color"]  + ";"
                                    }