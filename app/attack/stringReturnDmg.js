let firstCall = true;

function stringReturnDmg(dano) {
    const secaoDmg = document.querySelector('.secao__damage');
    if (firstCall) {
        const paragrah = document.createElement("P");
        secaoDmg.appendChild(paragrah);
        paragrah.classList.add("informa__dano");
        paragrah.textContent = `vilão tomou ${dano} de dano`
        firstCall = false;
    } else {
        const existingParagrah = document.querySelector(".informa__dano");
        existingParagrah.textContent = `vilão tomou ${dano} de dano`;
    }
}


export default stringReturnDmg;