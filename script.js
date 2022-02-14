window.onload = function() {
    let myiFrame = document.getElementById("computer3d");
    console.log(myiFrame)
    let doc = myiFrame.contentWindow;
    console.log(doc)
    doc.body.innerHTML = doc.body.innerHTML + '<style> .spline-watermark img{display: none !important;}</style>';
 }