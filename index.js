import readlineSync from 'readline-sync';

function getUserChoice() {
    const choices = ["камень", "ножницы", "бумага"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Ничья!";
    }
    if (userChoice === "Камень") {
        return computerChoice === "Ножницы" ? "Вы победили! Камень ломает ножницы." : "Вы проиграли! Бумага заворачивает камень.";
    }
    if (userChoice = "Ножницы") {
        return computerChoice === "Бумага" ? "Вы победили! Ножницы режут бумагу." : "Вы проиграли! Камень ломает ножницы.";
    }
    if (userChoice === "Бумага") {
        return computerChoice === "Камень" ? "Вы победили! Бумага заворачивает камень." : "Вы проиграли! Ножницы режут бумагу.";
    }
}

function getUserChoice(choice) {
    choice = choice.toLowerCase();
    if (choice === "камень" || choice === "ножницы" || choice === "бумага") {
        return choice;
    } else {
        return "Неверный ввод";
    }
}

function playGame() {
    const userChoice = getUserChoice(prompt("Выберите вашу фигуру: Камень, Ножницы или Бумага"));
    const computerChoice = getComputerChoice();
    console.log(`Ваш выбор: ${userChoice}`);
    console.log(`Компьютер выбрал: ${computerChoice}`);
    console.log(`Результат: ${determineWinner(userChoice, computerChoice)}`);
    const playAgain = prompt("Хотите сыграть еще раз? (да/нет)");
    if (playAgain.toLowerCase() === "да") {
        playGame;
    } else {
        console.log("Спасибо за игру! До встречи!");
    }
}

console.log("Добро пожаловать в игру 'Камень, Ножницы, Бумага'!");
playGame();