function verifier() {
    var mot1 = document.getElementById("mot1").value;
    var mot2 = document.getElementById("mot2").value;
    var mot3 = document.getElementById("mot3").value;
    
    if (mot1 == "fruits" && mot2 == "legumes" && mot3 == "viande") {
        alert("Bravo, vous avez réussi !");
    } else {
        alert("Désolé, vous n'avez pas réussi...");
    }
}