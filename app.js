let ko = document.getElementById("kepKo");
let papir = document.getElementById("kepPapir");
let ollo = document.getElementById("kepOllo");
let dontes = document.getElementById("dontes");
let sel;
let tagValasz;
let droidValasz;
let tagSzamla = document.getElementById("tagPontok");
let tagPont = 0;
let droidSzamla = document.getElementById("droidPontok");
let droidPont = 0;
let droidnakValasza = document.getElementById("droidnakValasza");
let eredmeny;
function KoSel() {
    sel = 0;
    TagSelect() }
function PapirSel() {
    sel = 1;
    TagSelect() }
function OlloSel() {
    sel = 2;
    TagSelect() }
function TagSelect() {
    switch(sel) {
        case 0: 
            tagValasz = 0;
            ko.style.border = "4px solid red"; 
            papir.style.border = "none";
            ollo.style.border = "none";
            break
        case 1: 
            tagValasz = 1;
            papir.style.border = "4px solid red"; 
            ko.style.border = "none";
            ollo.style.border = "none";
            break
        case 2: 
            tagValasz = 2;
            ollo.style.border = "4px solid red"; 
            ko.style.border = "none";
            papir.style.border = "none";
            break }
    DroidSelect() }
function DroidSelect() {
    let droidSzam = Math.floor(Math.random()*3) + 1;
    switch (droidSzam) {
        case 1:
            droidnakValasza.src = "kő.png";
            droidValasz = 0;
            break
        case 2:
            droidnakValasza.src = "papír.png";
            droidValasz = 1;
            break
        case 3:
            droidnakValasza.src = "olló.png";
            droidValasz = 2;
            break }
    LvagyW() }
function LvagyW() {
    if(tagValasz == 0 && droidValasz == 0 ||tagValasz == 1 && droidValasz == 1 ||tagValasz == 2 && droidValasz == 2 ) {
        eredmeny = "Dönthetetlen";
        PontKiiras()}
    else if(tagValasz == 0 && droidValasz == 2 || tagValasz == 1 && droidValasz == 0  || tagValasz == 2 && droidValasz == 1 ) {
        tagPont += 1;
        eredmeny = "Túl könnyű";  
        PontKiiras()}
    else {
        eredmeny = "A manóba";
        droidPont +=1;
        PontKiiras()}}
function PontKiiras() {
    dontes.textContent = eredmeny;
    tagSzamla.textContent = tagPont;
    droidSzamla.textContent = droidPont }
