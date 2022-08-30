// % for below, float property will be left, tile each as a div.
let widthAndBottom = 11.1;

const newDiv = document.createElement("div");

for (let x = 0; x < 65; x++) {
    body.appendChild(newDiv)
}

function randomColor() {

    return [((Math.random*255)+1),((Math.random*255)+1),((Math.random*255)+1) ]
}

