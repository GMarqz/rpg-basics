function createTable(elementFather, cssClassName){
    const table = document.createElement("TABLE")
    elementFather.appendChild(table)
    table.className = cssClassName
}

function createCaption(elementFather, cssClassName, text){
    const caption = document.createElement("CAPTION")
    elementFather.appendChild(caption)
    caption.className = cssClassName
    caption.textContent = text
}

function createTHead(elementFather, cssClassName){
    const thead = document.createElement("THEAD")
    elementFather.appendChild(thead)
    thead.className = cssClassName
}

function createTr(elementFather, cssClassName){
    const tr = document.createElement("TR")
    elementFather.appendChild(tr)
    tr.className = cssClassName
}

function createTh(elementFather, scope, cssClassName, text){
    const th = document.createElement("TH")
    elementFather.appendChild(th)
    th.setAttribute("scope", scope)
    th.className = cssClassName
    th.textContent = text
}

function createTBody(elementFather, cssClassName){
    const tbody = document.createElement("TBODY")
    elementFather.appendChild(tbody)
    tbody.className = cssClassName
}

function createTd(elementFather, cssClassName, text){
    const td = document.createElement("TD")
    elementFather.appendChild(td)
    td.className = cssClassName
    td.textContent = text
}

function createTFoot(elementFather, cssClassName){
    const tfoot = document.createElement("TFOOT")
    elementFather.appendChild(tfoot)
    tfoot.className = cssClassName
}

export {
    createTable,
    createCaption,
    createTHead,
    createTr,
    createTh,
    createTBody,
    createTd,
    createTFoot
}