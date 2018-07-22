// this app is to provide additional developer tools and give ideas for user interface

  //debug control
      var debug ={"checking device width":[false,false],
                "external objects":[false,false],
                "debug object.self":[false,false,false,false]
                }
  ///////////////////////////////////////////////////////
  //  to work on this advanced form website development it is essential we have a good debug program, some sort now
  //  as the program is divided into sections, debug will get longer anything to do with debugging should be taken care of here
  //  if a topic has an array, the first is general info the second is for boolean checking

        // debug topcis
        // 1. checking device width
        // 2. external objects

  ///////////////////////////////////////////////////////

$(document).ready(function(){


    // debugging API
        {
            debug["checking device width"][0] ? console.log(browser_window.outerWidth) : ""
            debug["external objects"][0] ? console.log($("body > *")) : ""
        }

    //////////////////////////////////////////////////////////////////////////////////////////
    // it would make sense that the API makes the webpage  before it debuggs it
    //////////////////////////////////////////////////////////////////////////////////////////
})
