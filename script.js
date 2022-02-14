setTimeout(function(){
    removeElementsByClass("spline-watermark");
}, );


function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    console.log(elements.length)

    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}