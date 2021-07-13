const ciclistas = localStorage.getItem('ciclistas') ? JSON.parse(localStorage.getItem('ciclistas')) : []

document.querySelector("#frm-ciclista").addEventListener('submit', e => {
    let nombre = document.querySelector("#nombre_ciclista").value
    let documento = document.querySelector("#documento_ciclista").value
    let registroTiempos = []
    let modalAdicionarCiclista = bootstrap.Modal.getInstance(document.querySelector("#modalAdicionarCiclista"))
    
    registroTiempos.push(parseFloat(document.querySelector("#carrera_1_corredor").value))
    registroTiempos.push(parseFloat(document.querySelector("#carrera_2_corredor").value))
    registroTiempos.push(parseFloat(document.querySelector("#carrera_3_corredor").value))
    registroTiempos.push(parseFloat(document.querySelector("#carrera_4_corredor").value))
    registroTiempos.push(parseFloat(document.querySelector("#carrera_5_corredor").value))
    const ciclista = {
        nombre,
        "documento" : documento, 
        registroTiempos
    }
    modalAdicionarCiclista.toggle()
    ciclistas.unshift(ciclista)
    localStorage.setItem("ciclistas", JSON.stringify(ciclistas))
    pintarTablaCorredores()
    e.preventDefault()
})    


const pintarTablaCorredores = () => {
    document.querySelector("#tbl-ciclistas tbody").innerHTML = ''
    ciclistas.forEach((ciclista, indice) => {
        document.querySelector("#tbl-ciclistas tbody").innerHTML += `<tr>
                                                                        <td>${indice+1}</td>
                                                                        <td>${ciclista.nombre}</td>
                                                                        <td>${ciclista.registroTiempos[0]} min</td>
                                                                        <td>${ciclista.registroTiempos[1]} min</td>
                                                                        <td>${ciclista.registroTiempos[2]} min</td>
                                                                        <td>${ciclista.registroTiempos[3]} min</td>
                                                                        <td>${ciclista.registroTiempos[4]} min</td>
                                                                        <td></td>
                                                                    </tr>`
    })
}

pintarTablaCorredores()