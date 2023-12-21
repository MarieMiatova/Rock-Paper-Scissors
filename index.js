import readlineSync from 'readline-sync';

            
function getComputerChoice() {
    const choices = ["Камень", "Ножницы", "Бумага"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function getUserChoice(){
    console.log('Выберите Вашу фигуру:\n1. Камень\n2. Ножницы\n3.Бумага');
    const choiceIndex = readlineSync.keyIn('Ваш выбор: ', {limit: '$<1-3>'}) - 1;
    const choices = ['Камень', 'Ножницы', 'Бумага'];
    return cnoices[choiceIndex];
}
function determineWinner(userChoice, computerChoice) {
    console.log(`Вы выбрали: ${userChoice}`);
    console.log(`Компьютер выбрал: ${computerChoice}`);
    
    if (userChoice === computerChoice) {
        return "Результат: Ничья!";
    }
    if (userChoice === "Камень" && computerChoice === "Ножницы") {
        return 'Результат: Вы победили! Камень ломает ножницы.';
    }
    if (userChoice === "Камень"  && computerChoice === "Бумага") {
        return 'Результат: Вы проиграли! Бумага заворачивает камень.';
    }
    if (userChoice === "Ножницы" && computerChoice === "Камень") {
        return 'Результат: Вы проиграли! Камень ломает ножницы.';
    }
    if (userChoice === "Ножницы" && computerChoice === "Бумага") {
        return 'Результат: Вы победили! Ножницы режут бумагу.';
    }
    if (userChoice === "Бумага" && computerChoice === "Ножницы") {
        return 'Результат: Вы проиграли! Ножницы режут бумагу.';
    }
    if (userChoice === "Бумага" && computerChoice === "Камень") {
        return 'Результат: Вы победили! Бумага заворачивает камень';
    }
}    

    function playGame() {
        console.log('Добро пожаловать в игру "Камень, Ножницы, Бумага"!\n');
        let playAgain = 'да';
        while (playAgain.toLowerCase() === 'да') {
            const userChoice = getUserChoice();
            const computerChoice = getComputerChoice();
            determineWinner(userChoice, computerChoice);
            playAgain = readlineSync.question('\nХотите сыграть еще раз? (да/нет): ');
        }
        console.log('\nСпасибо за игру! До встречи!');
    }
   playGame();
