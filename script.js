const mainContainer = document.querySelector(".main-container");
//const resolution = 64; //Change to max it an resolution x resolution sized board

buildBoard(64);


mainContainer.style.cssText = "border-style: solid; display:inline-flex; flex-direction: column;";

function buildBoard(resolution){
    for (let i = 0; i < resolution; i++){
        const row = document.createElement('div');
        row.style.cssText = "display: flex;";
        row.setAttribute('class', 'row');

        for ( let j = 0; j < resolution; j++ ){
            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            box.style.cssText = "border-style: solid; border-width: 0.5px; height: 7.5px; width: 7.5px;";
            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = "black";
            });
            row.appendChild(box);
        }

        mainContainer.appendChild(row);
    }
};
    



const resetButton = document.querySelector(".reset");
const resizeButton = document.querySelector(".resize")
const pixels = document.getElementsByClassName('box');



resetButton.addEventListener('click', () => {
    for(let i = 0; i < pixels.length; i++){
        pixels[i].style.backgroundColor = "white";
    }
});

resizeButton.addEventListener('click', () => {
    let valid_choice = false;
    let new_res = 0
    while(!valid_choice){
        new_res = prompt("What resolution do you want?");
        if(new_res > 0 && new_res <= 100){
            valid_choice = true;
        } else {
            alert('Value must be between 1 and 100')
        }
    }
    
    let child = mainContainer.lastElementChild;
    while (child) {
        mainContainer.removeChild(child);
        child = mainContainer.lastElementChild;
    }
    buildBoard(new_res);
})

