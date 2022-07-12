const mainContainer = document.querySelector(".main-container");
const resolution = 32; //Change to max it an resolution x resolution sized board


mainContainer.style.cssText = "border-style: solid; display:inline-flex; flex-direction: column";

for (let i = 0; i < resolution; i++){
    const row = document.createElement('div');
    row.style.cssText = "display: flex;";
    row.setAttribute('class', 'row');

    for ( let j = 0; j < resolution; j++ ){
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        box.style.cssText = "border-style: solid; border-width: 0.5px; height: 10px; width: 10px;";
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = "black";
        });
        row.appendChild(box);
    }

    mainContainer.appendChild(row);
}

const pixels = document.querySelectorAll(".box");

