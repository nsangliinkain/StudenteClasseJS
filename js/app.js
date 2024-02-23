class Studente{
    #nome;
    #cognome;
    #eta;
    #matricola;
    constructor (nome, cognome, eta, matricola){
        this.#nome = nome;
        this.#cognome = cognome;
        this.#eta = eta;
        this.#matricola = matricola;
    }
    get nome(){
        return this.#nome;
    }
    set nome(nome){
        this.nome = nome
    }
    get cognome(){
        return this.#cognome;
    }
    set cognome(cognome){
        this.cognome = cognome
    }
    get eta(){
        return this.#eta;
    }
    set eta(eta){
        this.eta = eta
    }
    get matricola(){
        return this.#matricola;
    }
    set matricola(matricola){
        this.matricola = matricola
    }

    toString(){
        return "Nome: "+this.#nome+" - Cognome: "+this.#cognome+ " - Età: "+ this.#eta+" - Matricola: "+this.#matricola;
    }

    isMaggiorenne(){
        return this.#eta >=18;
    }
}
 /*
var s1 = new Studente("Matteo", "Purici", 18, 12345);
var s2 = new Studente("Nsanglii", "Nkain", 17, 67890);

console.log(s1.toString());
console.log(s2.toString());

console.log(s1.isMaggiorenne());
console.log(s2.isMaggiorenne());
*/

function istanziaStudente(){
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var eta = document.getElementById("eta").value;
    var matricola = document.getElementById("matricola").value;

    var s = new Studente(nome, cognome, eta, matricola);

    if (s.isMaggiorenne()) document.getElementById("lista").innerHTML += "<br>" +s.toString() + "<br>Studente Maggiorenne";
    else document.getElementById("lista").innerHTML += "<br>" +s.toString() + "<br>Studente Minorenne";

}

function reset(){
    document.getElementById("nome").value = "";
    document.getElementById("conome").value = "";
    document.getElementById("eta").value = "";
    document.getElementById("matricola").value = "";
}
