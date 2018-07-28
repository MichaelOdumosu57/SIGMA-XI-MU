//  tried to use this but if the psuedo element has a css rule it will not be overwritten
 
 {
                                                interface_colors.split("+").forEach(function(a,i){
                                                    a.split("-")[0].toLowerCase() == interface_color_choice.toLowerCase() ? debug["interface object"][0] ? console.log(a.split("-")[1]): "" : ""
                                                    a.split("-")[0].toLowerCase() == interface_color_choice.toLowerCase() ? interface_color_choice = a.split("-")[1]: ""
                                                })
                                                
                                                
                                                getStyleByQuery(".html_object").forEach(function(shade_style,i){
                                                        
                                                        
                                                        if((shade_style.indexOf(interface_color_choice) != -1)  || (shade_style.indexOf("rgb(255, 0, 0)") != -1 )){
                                                            debug["interface object"][0]  ? console.log(shade_style.split(":")) : ""
                                                            interface_color_array.push(shade_style.split(":"))
                                                        }
                                                })
interface_color_array.forEach(function(swapping,i){
                                                        
                                                         
                                                         if(swapping[1] == "rgb(255, 0, 0)" && swapping[0].indexOf("border") != -1){
                                                             interface_spot = swapping[0];
                                                             
                                                             if(swapping[2] != "norm"){
                                                                debug["interface object"][0]  ? console.log(swapping[2]) : ""
                                                                if( swapping[2] == "before"){
                                                                     interface_css_before +=  interface_spot + ":" + interface_color_choice  + ","
            
                                                                }
                                                                if( swapping[2] == "after"){
                                                                    interface_css_after  += interface_spot  + ":" + interface_color_choice   + ","
                                                                }
                                                             }
                                                            else{
                                                                 $(".html_object").css(
                                                                     interface_spot, interface_color_choice
                                                                 ).css({
                                                                     "background-color":"transparent"
                                                                 })
                                                            }
                                                         debug["interface object"][0]  ? console.log(swapping,interface_spot,interface_color_choice) : ""
                                                          
                                                         }
                                                            
                                                        
                                                })
 }