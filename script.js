setTimeout(function(){
    removeElementsByClass("spline-watermark");
},2000 );


function removeElementsByClass(className){
    
    var iframe = document.getElementById("computer3d");
    const elements = iframe.contentWindow.document.getElementsByClassName(className);
    console.log(elements.length)

    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}