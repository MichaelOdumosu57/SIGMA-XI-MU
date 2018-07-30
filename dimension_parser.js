function numberParse(dimension){
    var censure = dimension.indexOf("p") != -1 ? "p" :"deg"
    dimension = parseFloat(dimension.split(censure)[0])
    
    return dimension;
}
//this function takes a dimension and cuts it off and returns the number for use

{
                        function getStyleByQuery(id) {
                            return getSomeStyles(document.querySelector(id));
                        }
                        function getSomeStyles(elem) {
                            if (!elem) return []; // Element does not exist, empty list.
                            var win = document.defaultView || window, style, styleNode = [], psuedo = ['after'];
                            if (win.getComputedStyle) { /* Modern browsers */
                                psuedo.forEach(function(ps,i){
                                    style = win.getComputedStyle(elem, ps);
                                    
                                    for (var i=0; i<style.length; i++) {
                                        if(style[i] == "transform-origin"){
                                        styleNode.push( style[i] + ':' + style.getPropertyValue(style[i]) + ":" +( ps == '' ? "norm" : ps.indexOf(":") == -1 ? ps : ps.split(":")[1]  ));
                                        //               ^name ^           ^ value ^
                                        }
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