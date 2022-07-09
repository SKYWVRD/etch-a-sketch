const mainContainer = document.querySelector(".main-container");


mainContainer.style.cssText = "border-style: solid; display:flex; flex-direction: column;"

for (let i = 0; i < 16; i++){
    const row = document.createElement('div');
    row.textContent = `Row ${i}`
    row.setAttribute('class', 'row')
    for (let i = 0; i < 16; i++){
        console.log(i);
    }

    mainContainer.appendChild(row);
}