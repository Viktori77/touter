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

// Хочу сделать в сабменю клик по иконке Заметок, чтобы открыались заметки

// const NotebookElement = document.getElementById('Notebook')
// const NotebookSubMenuBtn = document.getElementById('NotebookSubMenu')

// NotebookSubMenuBtn.onclick = function () {
//   NotebookElement.
// }
