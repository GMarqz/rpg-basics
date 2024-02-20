async function listaItens() {
    const conexao = await fetch("http://localhost:3000/equipamentos")
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida;
}

export const conectaAPI = {
    listaItens
}