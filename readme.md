# Online Mastermind Game

![Game Screenshot](/img/mainPage.png)
![Game Screenshot](/img/about.png)
![Game Screenshot](/img/colorNamePicker.png)
![Game Screenshot](/img/game.png)

Welcome to the Online Mastermind Game! This is a web-based implementation of the classic Mastermind board game. In this game, you can choose from 4 different colors, and then use those colors to guess the winning combination.

## Table of Contents

- [About the Game](#about-the-game)
- [How to Play](#how-to-play)
- [Getting Started](#getting-started)
- [Features](#features)
- [Code Structure and Functionality](#code-structure-and-functionality)
- [Contributing](#contributing)
- [License](#license)

## About the Game

Mastermind is a classic code-breaking game where one player sets a secret combination of colors, and the other player tries to guess the exact combination within a limited number of attempts.

This online version of Mastermind offers an interactive and user-friendly interface, allowing players to enjoy the game from their web browsers.

## How to Play

1. **Choosing Colors**: Start by selecting your combination of 4 different colors from the available options.

2. **Making Guesses**: After selecting your colors, you can start making guesses. Place your chosen colors in the order you believe matches the secret combination.

3. **Feedback**: After each guess, you will receive feedback on how close you are to the correct combination. The feedback will help you adjust your future guesses.

4. **Win or Lose**: Keep making guesses until you either crack the code or run out of attempts. If you guess the correct combination, you win! If you exhaust all your attempts without guessing correctly, you lose.

## Getting Started

To play the game, you can simply [access it here](https://joseangelcabanes.github.io/fsd0923VALMasterMind/). You can also clone this repository and host it locally on your machine.

## Features

Interactive and intuitive interface.
Customizable color selection.
Real-time feedback on your guesses.
Fun and challenging gameplay.

## Code Structure and Functionality

**Introduction**
In this code, we have a JavaScript program that is used to create a Mastermind game. The Mastermind game is a code-breaking game where the player needs to guess the 
correct combination of colors within a certain number of attempts. The code provided contains various functions and variables that control the game's logic and user
interface.

**Key Concepts**
Before diving into the code examples, let's understand some key concepts used in the code:

DOM Manipulation: The code uses DOM (Document Object Model) manipulation to interact with HTML elements and modify their properties, such as background color, text
content, and styles.

Event Handling: The code utilizes event handling to respond to user interactions, such as button clicks. When a button is clicked, a corresponding function is executed
to perform a specific action.

Random Number Generation: The code uses the Math.random() function to generate random numbers. These random numbers are used to select colors for the game.

Conditional Statements: The code includes conditional statements (if and switch) to control the flow of execution based on certain conditions. These conditions
determine which actions to perform based on the current state of the game.

**Code Structure**
The code is structured into several sections, each serving a specific purpose. Let's break down the code structure:

Variable Declarations: The code begins by declaring several variables (n, n_colors, n_at, Itags, Btags, Secrets, Fon, Htag, Sec, Att, Butt, Bod) and assigning initial
values to them. These variables are used throughout the code to store and manipulate data.

Window Onload Event: The window.onload event is triggered when the webpage finishes loading. Inside this event handler, there are conditional statements that check the
value of n and perform certain actions based on the condition. For example, if n is equal to 5, the width and content of the Htag[0] element are modified.

Function Declarations: After the event handler, there are several function declarations (rand_till, FunColor). These functions are responsible for performing specific
tasks within the game.

Function Definitions: The code defines the rand_till function, which takes a number n as an argument and returns a random integer between 0 and n-1. This function is
used to generate random indices for selecting colors.

Game Logic Function: The FunColor function is the main game logic function. It is called when a button is clicked and performs various actions based on the current
state of the game. This function handles color selection, checking for correct guesses, updating the user interface, and determining the end of the game.

End of Game Handling: The code includes conditional statements within the FunColor function to handle different end-game scenarios. If the player wins or loses the
game, the corresponding messages and styles are displayed.

**Code Examples**
Let's take a closer look at some code examples to understand how the game logic works:

Random Color Selection:
![Random Color Selection](/img/randomColorSelection.png)
In this code snippet, a random color is selected for each element in the Secrets array. The rand_till function is used to generate a random index within the range of available colors (n_colors). The selected color is then applied as the background color for the corresponding Secrets element.

Checking for Correct Guesses:
![Checking for Correct Guesses](/img/checkingCorrectGuesses.png)
These code snippets are used to check the player's guess against the secret code. The first loop compares each color in the colors_cod array (player's guess) with the corresponding color in the colors_attempt array (secret code). If a color match is found, the sum1 variable is incremented.

The second loop checks for color matches between the player's guess and the secret code, regardless of their positions. If a color match is found, the sum2 variable is incremented, and the corresponding color in the colors_attempt array is set to 0 to avoid counting it multiple times.

End of Game Handling:
![End of Game Handling](/img/endGameHandling.png)
These code snippets handle the end of the game. If the player correctly guesses all the colors (sum1 == n), the player wins the game. In this case, the code redirects the player to the win.html page and applies some styling changes to the Htag[0] element.

If the player exhausts all the attempts (attempt_now == n_at) without guessing the correct code, the player loses the game. The code updates the Htag[0] element with a losing message and adjusts its styling.

## Technologies Used

This project was built using the following technologies:

HTML5: Used for structuring the game's web page.
CSS3: Used for styling the game's user interface.
JavaScript: Used for implementing game logic and interactivity.

## Contributing

If you'd like to contribute to this project, feel free to open issues or submit pull requests. We welcome contributions from the community.

1. Fork the project.
2. Create your feature branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/your-feature).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

