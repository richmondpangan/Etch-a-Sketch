const body = document.querySelector('body');

const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');

const button = document.createElement('button');
button.classList.add('input-btn');
button.textContent = "Click me";
mainContainer.appendChild(button);

// This function sets the default screen display of 16x16 boxes
function defaultDisplay() {
    for (let i = 0; i < 16; i++) {
        let subContainer = document.createElement('div');
        subContainer.className = "sub-container";
        mainContainer.appendChild(subContainer);

        for (let i = 0; i < 16; i++) {
            let boxRow = document.createElement('div');
            boxRow.className = "box";
            subContainer.appendChild(boxRow);
            boxRow.addEventListener('mouseover', () => {
                boxRow.classList.add('permahover');     // Changes the color of the box to gray permanently when hovered
            });
        }
        button.addEventListener('click', () => {
            mainContainer.removeChild(subContainer);    // This removes all the displayed boxes when the "click me" button is clicked
        });
    }
}

defaultDisplay();

// This function will display the number of boxes based on the input of the user
function userInputDisplay(dimension) {
    for (let i = 0; i < dimension; i++) {
        let subContainer = document.createElement('div');
        subContainer.className = "sub-container";
        mainContainer.appendChild(subContainer);
    
        for (let i = 0; i < dimension; i++) {
            let box = document.createElement('div');
            box.className = "box";
            subContainer.appendChild(box);
            box.addEventListener('mouseover', () => {   
                box.classList.add('permahover');    // Changes the color of the box to gray permanently when hovered
            });
        }
        button.addEventListener('click', () => {
            mainContainer.removeChild(subContainer);    // This removes all the displayed boxes when the "click me" button is clicked
        });
    }
}

// This function will ask the user to input a number and if the number is acceptable it will call the userInputDisplay function to display the number of boxes that the user inputted
button.addEventListener('click', () => {
    let dimension = prompt("Enter a number:");

    if (dimension > 99) {
        alert("Only accepts number below 100");
    }
    else if (dimension <= 0) {
        alert("Can't accept negative and O number");
    }
    else {
        userInputDisplay(dimension);
    }
});

body.appendChild(mainContainer);