const buttons = document.querySelectorAll('.button');
const statusBox = document.getElementById('status-box');
const statusText = document.getElementById('status-text');

// Define an array of button texts that should trigger the box turning green
const F04Buttons = [
  'Fault Code: F04',
  'Extend deceleration ramps',
  'Check supply cable to braking resistor',
  'Check technical data of braking resistor',
  'Replace the MOVIDRIVE unit'
];

const F08Buttons = [
    'Fault Code: F08',
    'Reduce load',
    'Increase deceleration time',
    'Check current limitation',
    'Extend deceleration ramps',
    'Check motor cable and motor',
    'Check line phases'
];  

const F27Buttons = [
    'Fault Code: F27',
    'Open the circuit/both limit switches are missing',
    'Limit switches are swapped over in relation to direction of rotation of motor',
    'Check wiring of limit switches',
    'Reprogram terminals'
];   

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('highlighted');

    if (button.classList.contains('highlighted')) {
      button.style.backgroundColor = 'red';
    } else {
      button.style.backgroundColor = '';
    }

    // Check if all green buttons are highlighted
    const allGreenButtonsHighlighted = greenButtons.every(buttonText =>
      Array.from(buttons).find(btn => btn.innerText === buttonText)?.classList.contains('highlighted')
    );

    // Change the background color of the status box
    if (allGreenButtonsHighlighted) {
      statusBox.style.backgroundColor = 'green';
      statusText.textContent = 'Machine is Now Operational';
    } else {
      statusBox.style.backgroundColor = 'red';
      statusText.textContent = 'System Error Machine is Inoperational';
    }
  });
});
