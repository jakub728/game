import readline from "readline-sync";



console.clear();
if (readline.keyInYN(`Hello, do you wanto to play a game?`) == true) {
    
    console.log(`\n\nGame is about to take the very last symbol from 12 symbols\nYou can take 1, 2 or 3 symbols at once\nYour enemy (Me) also can take 1, 2 of 3 symbols\nWho takes the last one wins\n\nGood luck!!!`);
    
    console.log(`\n\n\nThose are you symbols: all 12 of them:`)
    
    let symbols = "[============]";
    console.log(symbols);
    while (symbols !== "[]") {
        const input = readline.question(`\nHow many symbols you want to take?  `);
        if (input == "3") {
            symbols = "[" + symbols.slice(1, symbols.length - 4) + "]";
            console.clear();
            console.log(symbols);
            console.log(`\nI take 1 symbol`);
            symbols = "[" + symbols.slice(1, symbols.length - 2) + "]";
            console.log(symbols);
                      
        } else if (input == "2") {
            symbols = "[" + symbols.slice(1, symbols.length - 3) + "]";
            console.clear();
            console.log(symbols);
            console.log(`\nI take 2 symbol`);
            symbols = "[" + symbols.slice(1, symbols.length - 3) + "]";
            console.log(symbols);
        } else if (input == "1") {
            symbols = "[" + symbols.slice(1, symbols.length - 2) + "]";
            console.clear();
            console.log(symbols);
            console.log(`\nI take 3 symbol`);
            symbols = "[" + symbols.slice(1, symbols.length - 4) + "]";
            console.log(symbols);
        } else {
            console.log(`\nYou can take only 1, 2 or 3 symbols`);
            console.log(`\nYour symbols:`);
            console.log(symbols);
        }

        
    }
    console.clear();
    console.log(symbols);
    console.log(`\n\nGame is over, I won!`);

} else {
    console.log(`Ok, bye`);
    
}


