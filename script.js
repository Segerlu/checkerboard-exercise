// % for below, float property will be left, tile each as a div.
//let widthAndBottom = 11.1;

// let attributes = {
//     'width': '11.1%',
//     'padding-bottom': '11.1%',
//     'float': "left",
//     'background-color': randomColor()
// }

play();
//checkerboard();
async function play() {
    while (true) {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        refresh();
        await new Promise(r => setTimeout(r, 500));
    }
}

function refresh() {
    for (let x = 0; x < 63; x++) {
        //attributes['background-color'] = randomColor();
        document.body.appendChild(createDiv());
    }
    //document.body.appendChild(gradient());
}   

function createDiv() {
    let div = document.createElement("div");
    //Object.assign(div.style, attributes);
    div.style.width = '11.1%';
    div.style.paddingBottom = '11.1%';
    div.style.float = "left";
    div.style.backgroundColor = randomColor();
    return div;
}

function randomColor() {
    return `rgb(${((Math.random() * 255) + 1)},${((Math.random() * 255)) + 1},${((Math.random() * 255) + 1)})`
}

function checkerboard() {

    for (let x = 0; x < 63; x++) {

        var div = createDiv();

        if (x % 2 === 0){
            div.style.backgroundColor = 'red';
        } else {
            div.style.backgroundColor = 'black';
        }
        document.body.appendChild(div);
    }

}

function gradient() {

    let div = document.createElement('div');
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.position = 'fixed';
    div.style.background = 'linear-gradient(45deg, blue, transparent)';
    div.style.zIndex = '2';

    return div;

}

