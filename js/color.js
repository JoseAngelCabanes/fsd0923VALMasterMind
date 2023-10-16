// //color selection
// const btnColorPage = document.getElementById('btnColorPage');
// const colorSelects = document.querySelectorAll('[id^="color"]');
// const boxes = document.querySelectorAll('[id^="color"]');

// colorSelects.forEach((colorSelect, index) => {
//     colorSelect.addEventListener('input', () => {
//         boxes[index].style.backgroundColor = colorSelect.value;
//         localStorage.setItem(`color${index + 1}`, colorSelect.value);
//     });
// }); 

// btnColorPage.addEventListener("click", function () {
//     const colors = Array.from(boxes).map(box => box.style.backgroundColor);

//     if (colors.some(color => color === "")) {
//         alert("You cannot have an empty cell");
//     } else if (new Set(colors).size !== colors.length) {
//         alert("You cannot have a duplicate cell");
//     } else {
//         window.location.href = "game.html";
//     }
// });

let btnName = document.getElementById('btnNombre');
let userName = document.getElementById('userName');

let inputName

btnName.addEventListener("click", function () {

    inputName = userName.value.toUpperCase();

    if (inputName.trim() !== "") {
        localStorage.setItem("name", inputName);
        window.location.href = "color.html"

    } else {
        alert("Please insert a name.");
    }
});