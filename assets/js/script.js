function Kredit() {
    var Mebleg = document.getElementById("mebleg").value
    var Faiz = document.getElementById("faiz").value
    var Ay = document.getElementById("ay").value
    var muddet = Ay / 12
    var aylig_odenis = 0

    if (Mebleg!=null) {
        if (Faiz!=null) {
            if (Ay!=null) {
                var aylig_odenis = Math.round((Mebleg/Ay) + (Mebleg*(Faiz/100)))
                alert( `Aylig odenis ${aylig_odenis}`)
                // document.getElementById("TextString").innerHTML = "";
            }
        }
    }
}

















// const body = document.getElementById('headerId');
// if(confirm('Would you like to see the body?')){ 
//     body.style.visibility = 'visible';
// };


// function promptFunction() {
//     var Text = prompt("Write your age here:", "");
// if (Text != null) {
//     if (Text != "") {
//         if(Text > 18) {
//             document.getElementById("TextString").innerHTML = "You wrote " + Text + " in the field, and you can entry to this site";
//         } else{
//             document.getElementById("TextString").innerHTML = `Your age ${Text} is not suitable`;

//         }
//     } else {
//         document.getElementById("TextString").innerHTML = "You didn't write anything in the field!";
//     }}
// else {
//         document.getElementById("TextString").innerHTML = "";
//     }
// }



// function Qrup() {

//     var value = document.getElementById("input").value
//     if (value.length === 4 || value.length === 5) {
//         if (value.includes("1", 1)) {
//             body.style.backgroundColor = "pink"
//         }
//         else if (value.includes("2", 1)) {
//             body.style.backgroundColor = "yellow"
//         }
//         else if (value.includes("3", 1)) {
//             body.style.backgroundColor = "black"
//         }
//     } 

// }



