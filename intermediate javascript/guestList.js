var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]

var guestName = prompt("please enter your name: ");

function toCapital(word){
    capedWord = (word.slice(0,1)).toUpperCase() + ((word.slice(1, word.length))).toLowerCase();
    return capedWord;
}

if (guestList.includes(toCapital(guestName)) === true){
    alert("Welcome " + toCapital(guestName));

}
else if (guestList.includes(toCapital(guestName)) === false){
    alert("Elu ga diundang");
}
    