// const WorkingAreaElement = document.getElementById('WorkingArea')
// const WorkingAreaResultElement = document.getElementById('WorkingAreaResult')
// const btnBoardBtn = document.getElementById('btnBoard')
// Тест
const PrimerElement = document.getElementById('Primer')
const MatemResultElement = document.getElementById('MatemResult')
const btnPrimerBtn = document.getElementById('btnPrimer')

// ________
// btnPrimerMatemBtn.onclick = function () {
//   MatemResultElement.textContent = Primer.value
// }

function NumberComputer(inp) {
  const num1 = Number(Primer.value)
  // if (num1 == 17) {
  //   MatemResultElement.style.color = 'green'
  // } else {
  //   MatemResultElement.style.color = 'red'
  //  } Это всё можно заменить на тернарное выражение, представила ниже:

  num1 == 17
    ? (MatemResultElement.style.color = 'green')
    : (MatemResultElement.style.color = 'red')

  MatemResultElement.textContent = inp
}

btnPrimerBtn.onclick = function () {
  NumberComputer(Primer.value)
}

//   Правильный код
// btnPrimerBtn.onclick = function () {
//   if (Number(Primer.value) == 17) {
//     MatemResultElement.style.color = 'green'
//   } else {
//     MatemResultElement.style.color = 'red'
//   }
//   MatemResultElement.textContent = Number(Primer.value)
// }

// btnBoardBtn.onclick = function () {
//   WorkingAreaResultElement.textContent = WorkingArea.value
// }

// btnPrimerBtn.onclick = function () {
//   MatemResultElement.textContent = Primer.value
// }

//   let result = WorkingAreaResultElement.textContent + 'two' + WorkingArea.value

// btnBoardBtn.onclick = function () {
//   WorkingAreaResultElement.textContent =
//     WorkingArea.value + ' two ' + WorkingArea.value
// }

// console.log(WorkingAreaResultElement.textContent)
// console.log(WorkingAreaResultElement.value)

// let sum = WorkingAreaResult + WorkingArea.value
//   WorkingAreaResultElement.textContent = sum

// ________

//   if (primer1Element.value == 13) {
//     primer1Element.value.style.color = 'green'
//   } else {
//     primer1Element.style.color = 'red'
//   }
