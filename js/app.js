// Változók, típusok
/* 
var, let -> let a = 23;
let -> block scope
var -> function scope
Állandó: const const a = 10; block scope

Elemi típusok:
- "sztring", 'sztring' `sztring (template) literal ${változó}`
- number: 3, 3.12 parseInt(), Number(),       parseFloat()  ((NaN egy number "érték"))
- boolean
-undefined (érték és egyben típus) -> Nincs definiálva, de majd lesz.
-null -> Vagy null a definiált értéke, vagy semmit adtak értékül a változónak.

Operátorok:
+ (túlterhelt), *, -, / % (modulo, modulus), // = (értékadó), 
inkrementálás: ++ (python: +=1)
dekrementálás: -- (python: -= 1)

Összehasonlító operátorok:
<, >, <=, >=, ==, ===

Logikai operátorok: negálás -> !, and -> &&, or -> ||

A JS gyengén típusos nyelv: ==, 3+"4" -> '34',  3*"4" -> 12
*/
// HTML elemek elérés:
// console.log(document);
const button = document.querySelector("ul li:last-child a");
button.textContent = "Új szöveg";
button.style.backgroundColor = "rgb(200, 20, 20)";
// button.style.display = "none";
console.log(button);

document.querySelector(".card").style.backgroundColor = "#123456";

const floatDiv = document.querySelector(".float-div");
const paragraph = document.createElement("p");
const text = "Ez egy hosszú szöveg";
paragraph.textContent = text;
paragraph.style.fontSize = "1.2rem";
floatDiv.appendChild(paragraph);
/*
Array (tömb) ~ Python lista (dinamikus, heterogén)
const t = [];  NE: const t = new Array();
Elemek elérése: t[0], t.at(-1)
t.slice(start, end) end nélkül a tömb végéig megy. (Szeletelő) ~ [::]
t.splice(start, deletedCount, inserted elements)
const newT = t.tospliced(start, deletedCount, inserted elements);
t.indexOf(20)  --> az elem indexét adja vissza.
t.toString()  ---> '10,20,30'
t.join() ---> '10,20,30'     t.join('')   ---> '102030'   
*/

const pElements = document.querySelectorAll("p");
//pElements.at(-1).style.fontFamily = "Arial";
pElements[pElements.length-1].style.color = "hsl(100, 60%, 70%)";

// Ez a rész már nem kell:
Array.from(pElements).splice(0, 3);
// Az Array.from() metódus tömböt készít a nodeList-ből. A NodeList nem tömb!!!
floatDiv.innerHTML = "";
console.log(Array.from(pElements));
for (let element of pElements) {
    console.log(element.innerHTML);
    floatDiv.innerHTML += element.innerHTML;
}