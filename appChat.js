const listNoteElement = document.getElementById('listNote')
const inputNotebookElement = document.getElementById('inputNotebook')
const NotebookCreateBtn = document.getElementById('NotebookCreate')

const notes = []

function render() {
  listNoteElement.innerHTML = ''
  if (notes.length === 0) {
    listNoteElement.innerHTML = '<p>Нет элементов</p>'
  }

  for (let i = 0; i < notes.length; i++) {
    listNoteElement.insertAdjacentHTML('beforeend', GetNote(notes[i], i))
  }
}
render()

NotebookCreateBtn.onclick = function () {
  if (inputNotebookElement.value.length === 0) {
    return
  }
  const NewNote = {
    title: inputNotebookElement.value,
    completed: false,
  }

  notes.push(NewNote)
  render()
  inputNotebookElement.value = ''
}

listNoteElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index)
    const type = event.target.dataset.type

    if (type === 'toggle') {
      notes[index].completed = !notes[index].completed
    } else if (type === 'remove') {
      // console.log('remove', index)
      notes.splice(index, 1)
    }
  }
  render()
}
function GetNote(note, index) {
  console.log(note.completed)
  return `<li>
      <div id="TextNotebook" class= "${
        note.completed ? 'readyText' : 'listNote'
      }"> ${note.title} </div>
  
      <div class="OptionsNote">
        <div data-type="toggle" 
        data-index="${index}" class="ready"
        >${note.completed ? '&#9989;' : '&#9745;'} </div>
        
        <div class="delete" data-type="remove"
        data-index="${index}">&#10062;</div>
      </div>      
    </li>`
}
// Нажатие на интер не получается
// $('#inputNotebook').keyup(function (event) {
//   if (event.keyCode === 13) {
//     $('#NotebookCreate').click()
//   }
// })
// $('#NotebookCreate').click(function () {
//   document.getElementById('listNote').innerHTML = 'Button clicked'
// })

// ***** Хочу сделать: 1) в сабменю клик по иконке Заметок, чтобы открыались заметки; 2) редактируемое поле при щелчке на текст; 3) перенос правильный; 4) нажатие на Enter

// const NotebookElement = document.getElementById('Notebook')
// const NotebookSubMenuBtn = document.getElementById('NotebookSubMenu')

// NotebookSubMenuBtn.onclick = function () {
//   NotebookElement.
// }

const listOfStudent = document.querySelector('#listOfStudent')
const filterStudents = document.querySelector('#filterStudents')
let USERS = []

async function start() {
  try {
    listOfStudent.innerHTML = 'Loading...'
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    setTimeout(() => {
      USERS = data
      renderStudent(data)
    }, 2000)
  } catch (err) {
    listOfStudent.style.color = 'red'
    listOfStudents.style.backgroundColor = 'blue'
    listOfStudent.innerHTML = err.message
  }
}
function renderStudent(users = []) {
  if (users.length === 0) {
    listOfStudent.innerHTML = 'No matched users!'
  } else {
    const html = users.map(toHTML).join('')
    listOfStudent.innerHTML = html
  }
}
function toHTML(user) {
  return `
  <li id="listOfStudent">${user.name}</li>
  `
}
start()

filterStudents.addEventListener('input', (event) => {
  const value = event.target.value.toLowerCase()
  const filteredStudentsUsers = USERS.filter((user) =>
    user.name.toLowerCase().includes(value)
  )
  renderStudent(filteredStudentsUsers)
})
