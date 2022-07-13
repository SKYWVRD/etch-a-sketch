const mainContainer = document.querySelector(".main-container");
const resetButton = document.querySelector(".reset");
const resizeButton = document.querySelector(".resize")

buildBoard(64);
mainContainer.style.cssText = "border-style: solid; display:inline-flex; flex-direction: column;";


//Function to build grid using javascript
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

//Function to assist in resizing the board when button clicked
function resizeBoard(newResolution) {
    let child = mainContainer.lastElementChild;
    while (child) {
        mainContainer.removeChild(child);
        child = mainContainer.lastElementChild;
    }
    buildBoard(newResolution);
};
    
const pixels = document.getElementsByClassName('box');


//Section for button even listeners

//Event Listener to reset grid to all white
resetButton.addEventListener('click', () => {
    for(let i = 0; i < pixels.length; i++){
        pixels[i].style.backgroundColor = "white";
    }
});


//Event listener to prompt board resize
resizeButton.addEventListener('click', () => {
    let validChoice = false;
    let newRes = 0
    while(!validChoice){
        newRes = prompt("What resolution do you want?");
        if(newRes > 0 && newRes <= 100){
            validChoice = true;
        } else {
            alert('Value must be between 1 and 100')
        }
    }
    resizeBoard(newRes);

});

