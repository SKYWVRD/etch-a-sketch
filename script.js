const mainContainer = document.querySelector(".main-container");


mainContainer.style.cssText = "border-style: solid; display:flex; flex-direction: column;"

for (let i = 0; i < 16; i++){
    const row = document.createElement('div');
    row.style.cssText = "display: flex;"
    row.setAttribute('class', 'row')

    for ( let j = 0; j < 16; j++ ){
        const box = document.createElement('div');
        box.textContent = `Column ${j}`;
        row.appendChild(box);
    }

    mainContainer.appendChild(row);
}