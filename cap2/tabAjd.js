function tabAjs(fil, colm) {
    let tab = "";
    for (let i = 0; i < fil; i++) {
        for (let j = 0; j < colm; j++) {
            if ((i + j) % 2 == 0) {
                tab += "#";
            } else {
                tab += " ";
            }
        }
        tab += "\n";
    }
    console.log(tab);
}

console.clear();
tabAjs(8, 8)