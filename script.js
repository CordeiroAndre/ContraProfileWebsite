setTimeout(function(){
    removeElementsByClass("spline-watermark");
},2000 );


function removeElementsByClass(className){
    
    var iframe = document.getElementById("computer3d");
    console.log(iframe);
    const elements = iframe.contentWindow.document.getElementsByClassName(className);
    console.log(elements)

    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}