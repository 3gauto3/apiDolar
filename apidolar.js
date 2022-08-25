const API_KEY = "4a32d3dec3603919cec9a6a8f0d9664778f877ae";


const divDolar = document.getElementById("divDolar")
function mostrarDolar() {
    fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({oficial, solidario, mep, ccl, blue}) => {
        divDolar.innerHTML = `
            <div>
                <h2>Valores del dólar</h2>
                <p>Oficial: $${oficial}</p>
                <p>Solidario: $${solidario}</p>
                <p>MEP: $${mep} </p>
                <p>CCL: $${ccl} </p>
                <p>Blue: $${blue} </p>
            <div>
        `
    })
}
mostrarDolar()
setInterval(() => {
    mostrarDolar()
}, 10000)