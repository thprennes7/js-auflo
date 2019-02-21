function factorielle () {
  var number = prompt("Choisit un chiffre");
  if (number > 0) {
    for (var result = number; number > 1; number--){
      result = result * (number - 1);
    }
  }
  console.log(result);

}
factorielle();
