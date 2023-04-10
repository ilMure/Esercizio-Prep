const pizzeria = {
    pizzeria: "Otello",
    indirizzo: "Via tal dei Tali, 1 - Firenze", 
    recensioni: 
            [ 
             { nome: "Mario", descrizione: "Pizza buonissima"},
             { nome: "Sara", descrizione: "Pizza ottima ma tempi di attesa troppo lunghi"},
   
             { nome: "Mario", descrizione: "Non fanno pizza senza glutine "}
            ]
}

let contenitore = document.querySelector("#container")


let tagTitolo = document.createElement("h1")
let testo = document.createTextNode(pizzeria.pizzeria)
tagTitolo.appendChild(testo)

let tagIndirizzo = document.createElement("h2")
testo = document.createTextNode(pizzeria.indirizzo)
tagIndirizzo.appendChild(testo)

let divRecensioni = document.createElement("div")

let tagBottone = document.createElement("button")
testo = document.createTextNode("Mostra Recensioni")
attr = tagBottone.setAttribute("onclick", "mostraRecensioni()")
tagBottone.appendChild(testo)


contenitore.appendChild(tagTitolo)
contenitore.appendChild(tagIndirizzo)
contenitore.appendChild(divRecensioni)
contenitore.appendChild(tagBottone)


function mostraRecensioni(){
    let tagRec = document.createElement("h3")
    testo = document.createTextNode("Recensioni:")
    tagRec.appendChild(testo)
    divRecensioni.appendChild(tagRec)

    for (let i=0; i<pizzeria.recensioni.length; i++){
        let tagParag = document.createElement("p")
        testo = document.createTextNode("Nome: "+pizzeria.recensioni[i].nome + ", Descrizione: " +pizzeria.recensioni[i].descrizione);
        tagParag.appendChild(testo)

        divRecensioni.appendChild(tagParag)
    }

    tagBottone.innerHTML = "Nascondi Recensioni"
    tagBottone.removeAttribute("attr")
    attr = tagBottone.setAttribute("onclick", "nascondiRecensioni()")   

}

function nascondiRecensioni(){
    while (divRecensioni.firstChild) {
        divRecensioni.removeChild(divRecensioni.lastChild);
    }
    tagBottone.innerHTML = "Mostra Recensioni"
    attr = tagBottone.setAttribute("onclick", "mostraRecensioni()")
}
