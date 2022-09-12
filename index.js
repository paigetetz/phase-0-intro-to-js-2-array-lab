

const cats = ["Milo", "Otis", "Garfield"]
 function destructivelyAppendCat(){
    cats.push("Ralph")
 }
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop ("Garfield")
}
function destructivelyRemoveFirstCat(){
    cats.shift ("Milo")
}
const copyOfCats = [...cats]

function appendCat(Broom){
const copyOfCats= [...cats, Broom]
    return copyOfCats
}
function prependCat(Arnold){
    const copyOfCats= [Arnold,...cats]
    return copyOfCats
}
function removeLastCat (){
    return cats.slice(0,cats.length-1)
}
function removeFirstCat(Milo){
    return cats.slice (1,cats.length)
}