function father(elementFather){
    return document.querySelector(elementFather)
}

function createSection(elementFather, cssClassName){
    const createSection = document.createElement("SECTION")
    elementFather.appendChild(createSection)
    createSection.className = cssClassName
}

function createDiv(elementFather, cssClassName,){
    const createDiv = document.createElement("DIV");
    elementFather.appendChild(createDiv)
    createDiv.className = cssClassName
}

function createHeading(elementFather, headingType, cssClassName, text){
    const createHeading = document.createElement(headingType)
    elementFather.appendChild(createHeading)
    createHeading.className = cssClassName
    createHeading.textContent = text
}

function createParagraph(elementFather, cssClassName, text){
    const createParagraph = document.createElement("P")
    elementFather.appendChild(createParagraph)
    createParagraph.className = cssClassName
    createParagraph.textContent = text
}

export { father, createSection, createDiv, createHeading, createParagraph };