console.log("test");

const circleType = new CircleType(document.getElementById("header"));

var para1 = new CircleType(document.getElementById('para1'))
  .radius(270);

window.addEventListener('resize', function updateRadius() {
    para1.radius(para1.element.offsetWidth / 2);
});

//despite existing in line 8, it freaks out about us calling it in line 13? i dont fully understand on this one
//updateRadius();

//letterng.js: select class letter then iterate to chars based on the sleected keyword (this one being letters)
var lettering = new Lettering('.letter');
lettering.letters();
