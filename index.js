homeSum = 0
guestSum = 0

function homeplus1(){
    homeSum += 1
    document.getElementById("homepoints").textContent = homeSum
    console.log("Home: "+homeSum)
}
function homeplus2(){
    homeSum += 2
    document.getElementById("homepoints").textContent = homeSum
    console.log("Home: "+homeSum)
}
function homeplus3(){
    homeSum += 3
    document.getElementById("homepoints").textContent = homeSum
    console.log("Home: "+homeSum)
}
function guestplus1(){
    guestSum += 1
    document.getElementById("guestpoints").textContent = guestSum
    console.log("Guest: "+guestSum)
}
function guestplus2(){
    guestSum += 2
    document.getElementById("guestpoints").textContent = guestSum
    console.log("Guest: "+guestSum)
}
function guestplus3(){
    guestSum += 3
    document.getElementById("guestpoints").textContent = guestSum
    console.log("Guest: "+guestSum)
}

function newGame(){
    homeSum = 0
    guestSum = 0
    document.getElementById("homepoints").textContent = homeSum
    document.getElementById("guestpoints").textContent = guestSum
    console.log("New Game")
}