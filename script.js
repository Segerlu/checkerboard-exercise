// % for below, float property will be left, tile each as a div.
let widthAndBottom = 11.1;

let attributes = {
    'width': '11.1%',
    'padding-bottom': '11.1%',
    'float': "left",
    'background-color': randomColor()
}

for (let x = 0; x < 63; x++) {
    attributes['background-color'] = randomColor();
    document.body.appendChild(createDiv());
}

function createDiv() {
    let div = document.createElement("div");
    Object.assign(div.style, attributes);
    return div;
}

function randomColor(element) {
    return `rgb(${((Math.random() * 255) + 1)},${((Math.random() * 255)) + 1},${((Math.random() * 255) + 1)})`
}

