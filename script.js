// Select all elements with the class "box"
const boxes = document.querySelectorAll('.box');

// Add an onclick event listener to each box
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        // You can access the text of the clicked box
        console.log(`You clicked on box number: ${box.textContent.trim()}`);
    });
});