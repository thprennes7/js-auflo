function pyramideMario () {
  let number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
  let space = 0;
  let indice = 1;

  while  (indice <= number) {
    let spaces = "";
    let floor = "";
    space = number - indice;
    for (let x = 0; x < space; x++) {
      spaces = spaces + " ";
    }
    for (let x = 0; x < indice ; x++) {
      floor = floor + "#";
    }
    console.log(spaces + floor);
    indice++;

  }

}

pyramideMario();
