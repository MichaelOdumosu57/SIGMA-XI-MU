            // media fix
            $(".picture_holder_4").css({
                "height":"300px",
                "width":"0px",
                "background-color":"white",
                "margin-top":"60%",
                "margin-left":"70%",
                "background-size":"500px 350px",
                "background-position":"60 00"
            }).hide()
            
            $(".heading").hide()

            $("body").css({
                "overflow-x":"110%"
            })
    
            
            {
              if(devices[0] === "xs"){

                    $(".picture_holder_1").css({
                        "margin-top":"50%"
                    }).hide()
                    $(".picture_holder_2").hide()
                    $(".picture_holder_3").hide()
                    $(".picture_holder_4").css({
                        "width":"1200px",
                        "margin-left":"30%",
                        "margin-top":"100%"
                    }).show().append("<h1 class = 'letters'> &#931;</h1>")
                    

                    

                    
                    // var some_home_info = $(".container:first").html()
                    // console.log(some_home_info)
                    // $(".container:first").remove();
                    
                    // $(".footers").before(some_home_info)
                    // $(".footers").before("<div class = 'container'></div>")
                    // // $("div:has('.shape')").wrapAll($(".container:first"))
                    // $(".container:first").append($("div:has('.shape')"))
                    
                    // mobile animation
                    {
                        $(".nav_container").css({
                            "width":"150px",
                            "height":"150px",
                            "left":"108em",
                            "margin-top":"0px",
                            "z-index":"20",
                            "background-color":"black",
                            "border":"2px solid grey"
                        }).append("<div class = 'mob_menu_bars'></div>")
                        
                        $(".mob_menu_bars").css({
                            "height":.1 * numberParse($(".nav_container").css("height")),
                            "width":.8 * numberParse($(".nav_container").css("width")),
                            "background-color":"red",
                            "top":"1em",
                            "margin-left":"1em",
                            "margin-top":"2em",
                            "margin-bottom":"-.5em"
                        })
                        
                        $(".mob_menu_bars").adv_clone(3)
                        
                            $(".pretty_0").css({
                            	"margin":"80px",
                            	"margin-left":"-2500px",
                            	"height":"10em",
                            	"width":"80em",
                            	"background-image":"linear-gradient(180deg,grey,black)",
                            }).hide()
                            
                            $(".pretty_0 > h2").css({
                                "background-color":"none",
                                "text-align":"center",
                                "font-size":"3em"
                            })
                        $(".nav_container").click(function(event){
                            $(".pretty_0").fadeToggle()
                        })
                        
                        
                    
                    }
                    //////////////////////////////////////////
                    //controls mobile nav animation
                    //////////////////////////////////////////
                    

                    
                    $(".menu_holder").css({
                        "width":"140px",
                        "margin-left":"0px",
                        "z-index":"20"
                    }).draggable()
                    
                    $(".solo_group").css({
                        "color":"white",
                        "font-size":"5em",
                        "width":text_dimension($(".solo_group"))
                    })
                    
                    $(".footers").css({
                        "margin-left":"7%"
                    })
                    // var letters = $(".group_name").html()
                    // $(".group_name").remove();
                    // $(".picture_holder_1").before(letters)
                    // $(".container").pretty_print({
                    //     objects:$(".solo_group")
                    // })
                    
                    $(".group_name").css({
                        "background-color":"black",
                        "border-radius":"0px",
                        "width":"1500px",
                        "height":"300px",
                        "margin-top":"5%"
                    })

                    $(".group_name").pretty_print({
                        objects:$(".solo_group"),
                        x_spacing: "2em",
                        indent: "20em"
                    })
                    
                    $(".letters").css({
                        "font-size":"33em",
                        "width":text_dimension($(".letters")),
                        "margin-top":"-400px",
                        "margin-left":"50px"
                        
                    }).adv_clone(3)
                    

                    
                    $(".letters").eq(1).html("&#916;")
                    $(".letters").eq(2).html("&#920;")
                    
                    $(".item > img").css({
                    	"height":$(".picture_holder_4").css("height"),
                        "width":$(".picture_holder_4").css("width")
                    })
                    
                    
              }
              
              else if(devices[0] === "sm"){
                  
                    $(".picture_holder_1").css({
                        "margin-top":"50%"
                    }).hide()
                    $(".picture_holder_2").hide()
                    $(".picture_holder_3").hide()
                    $(".picture_holder_4").css({
                        "width":"1200px",
                        "margin-left":"20%",
                        "margin-top":"50%"
                    }).show().append("<h1 class = 'letters'> &#931;</h1>")
                    

                    

                    
                    // var some_home_info = $(".container:first").html()
                    // console.log(some_home_info)
                    // $(".container:first").remove();
                    
                    // $(".footers").before(some_home_info)
                    // $(".footers").before("<div class = 'container'></div>")
                    // // $("div:has('.shape')").wrapAll($(".container:first"))
                    // $(".container:first").append($("div:has('.shape')"))
                    
                    $(".nav_container").css({
                        "width":"2400px",
                        "margin-left":"20px"
                    }).hide()
                    
                    $(".solo_group").css({
                        "color":"white",
                        "font-size":"5em",
                        "width":text_dimension($(".solo_group"))
                    })
                    
                    $(".footers").css({
                        "margin-left":"7%"
                    })
                    // var letters = $(".group_name").html()
                    // $(".group_name").remove();
                    // $(".picture_holder_1").before(letters)
                    // $(".container").pretty_print({
                    //     objects:$(".solo_group")
                    // })
                    
                    $(".group_name").css({
                        "background-color":"black",
                        "border-radius":"0px",
                        "width":"1500px",
                        "height":"300px",
                        "margin-top":"5%"
                    })

                    $(".group_name").pretty_print({
                        objects:$(".solo_group"),
                        x_spacing: "2em",
                        indent: "20em"
                    })
                    
                    $(".letters").css({
                        "font-size":"33em",
                        "width":text_dimension($(".letters")),
                        "margin-top":"-400px",
                        "margin-left":"50px"
                        
                    }).adv_clone(3)
                    

                    

                    
                    $(".letters").eq(1).html("&#916;")
                    $(".letters").eq(2).html("&#920;")
                    
                    $(".item > img").css({
                    	"height":$(".picture_holder_4").css("height"),
                        "width":$(".picture_holder_4").css("width")
                    })
                    
                    //mobile nav animation
                        $(".nav_container").css({
                            "width":"150px",
                            "height":"150px",
                            "left":"108em",
                            "margin-top":"0px",
                            "z-index":"20",
                            "background-color":"black",
                            "margin-left":"-7.9em",
                            "border":"2px solid grey"
                        }).show().append("<div class = 'mob_menu_bars'></div>")
                        
                        $(".menu_holder").css({
                            "width" :$(".nav_container").css("width")
                        })
                        
                        $(".mob_menu_bars").css({
                            "height":.1 * numberParse($(".nav_container").css("height")),
                            "width":.8 * numberParse($(".nav_container").css("width")),
                            "background-color":"red",
                            "top":"1em",
                            "margin-left":"1em",
                            "margin-top":"2em",
                            "margin-bottom":"-.5em"
                        })
                        
                        $(".mob_menu_bars").adv_clone(3)
                        
                            $(".pretty_0").css({
                            	"margin":"80px",
                            	"margin-left":"-1900px",
                            	"height":"10em",
                            	"width":"80em",
                            	"background-image":"linear-gradient(180deg,grey,black)",
                            }).hide()
                            
                            $(".pretty_0 > h2").css({
                                "background-color":"none",
                                "text-align":"center",
                                "font-size":"3em"
                            })
                        $(".nav_container").click(function(event){
                            $(".pretty_0").fadeToggle()
                            
                        })
                        
                        
                        
                    //////////////////////////////////////////
                    //controls mobile nav animation
                    //////////////////////////////////////////
                    
   
                    
                    
                    
                    
                
              }
              
              else if(devices[0] === "md"){
                    $(".picture_holder_1").css({
                        "margin-top":"50%"
                    }).hide()
                    $(".picture_holder_2").hide()
                    $(".picture_holder_3").hide()
                    $(".picture_holder_4").css({
                        "width":"1200px",
                        "margin-left":"15%",
                        "margin-top":"40%"
                    }).show().append("<h1 class = 'letters'> &#931;</h1>")
                    

                    

                    
                    // var some_home_info = $(".container:first").html()
                    // console.log(some_home_info)
                    // $(".container:first").remove();
                    
                    // $(".footers").before(some_home_info)
                    // $(".footers").before("<div class = 'container'></div>")
                    // // $("div:has('.shape')").wrapAll($(".container:first"))
                    // $(".container:first").append($("div:has('.shape')"))
                    
                    $(".nav_container").css({
                        "width":"2400px",
                        "margin-left":"20px"
                    }).hide()
                    
                    $(".solo_group").css({
                        "color":"white",
                        "font-size":"5em",
                        "width":text_dimension($(".solo_group"))
                    })
                    
                    $(".footers").css({
                        "margin-left":"7%"
                    })
                    // var letters = $(".group_name").html()
                    // $(".group_name").remove();
                    // $(".picture_holder_1").before(letters)
                    // $(".container").pretty_print({
                    //     objects:$(".solo_group")
                    // })
                    
                    $(".group_name").css({
                        "background-color":"black",
                        "border-radius":"0px",
                        "width":"1500px",
                        "height":"300px",
                        "margin-top":"5%"
                    })

                    $(".group_name").pretty_print({
                        objects:$(".solo_group"),
                        x_spacing: "2em",
                        indent: "20em"
                    })
                    
                    $(".letters").css({
                        "font-size":"33em",
                        "width":text_dimension($(".letters")),
                        "margin-top":"-400px",
                        "margin-left":"50px"
                        
                    }).adv_clone(3)
                

                    
                    $(".letters").eq(1).html("&#916;")
                    $(".letters").eq(2).html("&#920;")
                    
                    $(".item > img").css({
                    	"height":$(".picture_holder_4").css("height"),
                        "width":$(".picture_holder_4").css("width")
                    })
                    
                  //mobile nav animation
                        $(".nav_container").css({
                            "width":"150px",
                            "height":"150px",
                            "left":"108em",
                            "margin-top":"0px",
                            "z-index":"20",
                            "background-color":"black",
                            "margin-left":"3em",
                            "border":"2px solid grey"
                        }).show().append("<div class = 'mob_menu_bars'></div>")
                        
                        $(".menu_holder").css({
                            "width" :$(".nav_container").css("width")
                        })
                        
                        $(".mob_menu_bars").css({
                            "height":.1 * numberParse($(".nav_container").css("height")),
                            "width":.8 * numberParse($(".nav_container").css("width")),
                            "background-color":"red",
                            "top":"1em",
                            "margin-left":"1em",
                            "margin-top":"2em",
                            "margin-bottom":"-.5em"
                        })
                        
                        $(".mob_menu_bars").adv_clone(3)
                        
                            $(".pretty_0").css({
                            	"margin":"80px",
                            	"margin-left":"-2250px",
                            	"height":"10em",
                            	"width":"80em",
                            	"background-image":"linear-gradient(180deg,grey,black)",
                            }).hide()
                            
                            $(".pretty_0 > h2").css({
                                "background-color":"none",
                                "text-align":"center",
                                "font-size":"3em"
                            })
                        
                        $(".nav_container").click(function(event){
                            
                            $(".pretty_0").fadeToggle()

                        })
                        
                        
                        
                    //////////////////////////////////////////
                    //controls mobile nav animation
                    //////////////////////////////////////////
                    
              }
              
              
              
              else if(devices[0] === "lg"){
                  
                  $(".heading").show().css({
                       "margin-top":"2em"
                  })
                  $("body").pretty_print({
                    objects: $(".heading"),
                    indent:"55em"
                  })
                
              }
              
              if(devices[0] !== "lg"){
                $(".menu_items").unbind("click")
              }
            }
            ///////////////////////////////////////////////////////////////////
            // basically what you want to have here is everything show in vertical fashion if its on a phone
            //  picture holder 4 is for one display of the page
            ///////////////////////////////////////////////////////////////////