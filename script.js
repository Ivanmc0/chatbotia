async function enviarConsulta() {
    const consulta = document.getElementById("consulta").value;

    const response = await fetch('http://xxxxx.ngrok.io/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ consulta: consulta })
    });

    const data = await response.json();
    document.getElementById("respuesta").innerText = data.respuesta;
}
