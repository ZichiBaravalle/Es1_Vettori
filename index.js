window.onload = init;
let nomeUtente = ""

let utenti = ["Elisa", "Giacomo", "Alessandro", "Sara", "Negozio", "Locale"];
let password = {
    "Elisa": {
        psw: "1234"
    },
    "Giacomo": {
        psw: "1234"
    },
    "Alessandro": {
        psw: "1234"
    },
    "Sara": {
        psw: "1234"
    }
}


function init(){
    let select = document.getElementById("pagante");

    for (let i = 0; i < utenti.length - 2; i++) {
        select.innerHTML += `<option value="${utenti[i]}">${utenti[i]}</option>`
    }

    select = document.getElementById("pagato")

    for (let i = 0; i < utenti.length; i++) {
        select.innerHTML += `<option value="${utenti[i]}">${utenti[i]}</option>`
    }
}

function Login(){
    nomeUtente = prompt("Inserire il nome Utente")
    let utentiVeri = ["Elisa", "Giacomo", "Alessandro", "Sara"];

    if (utentiVeri.includes(nomeUtente))
    {
        let pws = prompt("Inserisci la password")
        if (password[nomeUtente].psw === pws)
            document.getElementById("presentazione").innerHTML = `<h4>ciao ${nomeUtente}</h4>`
        else
            alert("password sbagliata")
    }
    else
        alert("Nome utente NON esistente")
}

function divisione() {
    let valore = document.getElementById("importo")
    let pagato = document.getElementById("pagato")

    if (valore.value === "")
        alert("Inserire l'importo correttamente")
    else if (pagato.value !== utenti[utenti.length - 2] && pagato.value !== utenti[utenti.length - 1])
        alert("Per dividere il prezzo tra tutti il pagato deve essere un negozio o un locale")
    else {
        let importo = parseInt(valore.value) / 4
        document.getElementById("importo1").textContent = importo.toString()
        document.getElementById("importo2").textContent = importo.toString()
        document.getElementById("importo3").textContent = importo.toString()
        document.getElementById("importo4").textContent = importo.toString()
    }
}

function confermaPagamento(utente, pagamento) {
    if (nomeUtente === utente)
        document.getElementById("pagamentiConfermati").appendChild(pagamento)
    else
        alert("Solo " + utente + " può confermare questo pagamento")
}

function inserisciPagamento() {
    let pagante = document.getElementById("pagante")
    let pagato = document.getElementById("pagato")
    let importo = document.getElementById("importo")
    let pagamentiDaConfermare = document.getElementById("pagamenti da confermare")
    let data = new Date()

    if (pagante.value === pagato.value)
        alert("Il pagante non può essere uguale al pagato")
    else if (importo.value === "")
        alert("Inserire l'importo correttamente")
    else {
        let pagamento = document.createElement("article")
        pagamento.onclick = function() {
            confermaPagamento(`${pagante.value}`, this);
        };

        let span1 = document.createElement("span")
        span1.textContent = data.getDate().toString()
        let span2 = document.createElement("span")
        span2.textContent = (data.getMonth() + 1 > 9 ? data.getMonth() + 1 : "0" + (data.getMonth() + 1).toString()).toString() + "/" + data.getFullYear().toString().substring(2, 4)
        span1.appendChild(span2)
        pagamento.appendChild(span1)

        let div = document.createElement("div")
        div.textContent = pagante.value
        pagamento.appendChild(div)

        let div2 = document.createElement("div")
        div2.textContent = importo.value + " €"
        div2.className = "entrata"
        pagamento.appendChild(div2)

        let div3 = document.createElement("div")
        div3.textContent = pagato.value
        pagamento.appendChild(div3)

        pagamentiDaConfermare.appendChild(pagamento)
    }
}