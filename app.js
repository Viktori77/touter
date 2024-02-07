const WorkingAreaElement = document.getElementById('WorkingArea')
const WorkingAreaResultElement = document.getElementById('WorkingAreaResult')
const btnBoardBtn = document.getElementById('btnBoard')

// _________**Правильный вариант, когда просто добавляются данные____

// btnBoardBtn.onclick = function () {
//   WorkingAreaResultElement.textContent =
//     WorkingArea.value + ' two ' + WorkingArea.value
// }
// **_______

const IconsElement = document.getElementById('Icons')
const inputElement = document.getElementById('WorkingArea')
const BoardBtn = document.getElementById('Board')
const listElement = document.getElementById('list')

const notes = []

function render() {
  listElement.innerHTML = ''

  if (notes.length === 0) {
    listElement.innerHTML = '<p>Доска чистая</p>'
  }

  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
  }
}
render()
BoardBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return
  }
  const newNote = {
    title: inputElement.value,
    name: 'Vika',
  }
  notes.push(newNote)

  render()
  inputElement.value = ''
}

listElement.onclick = function (event) {
  // console.log(event.target.dataset.index)
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index)
    // const type = event.target.dataset.type

    // if (type === 'Redacted') {
    //   notes[index].completed = !notes[index].completed
    // } else if (type === 'remove') {
    // console.log('remove', index)
    notes.splice(index, 1)
  }
  render()
}

function getNoteTemplate(note, index) {
  console.log(index)

  return `
<li>
          <span class="TextBoard">${note.title}</span>
          <div class="Icon" id="Icons">
            
            <span id="BtnDelete" data-index="${index}""="remove">&cross;</span>
          </div>
        </li>`
}

let mode = 'date'
const output = document.getElementById('output')
const timeBtn = document.getElementById('time')
const dateBtn = document.getElementById('date')
const fullBtn = document.getElementById('full')

function bindMode(name) {
  return function () {
    mode = name
    update()
  }
}

fullBtn.onclick = bindMode('full')
dateBtn.onclick = bindMode('date')
timeBtn.onclick = bindMode('time')

setInterval(update, 1000)
update()

function update() {
  output.textContent = format(mode)
}
function format(formatMode) {
  const now = new Date()

  switch (formatMode) {
    case 'time':
      return now.toLocaleTimeString()
    case 'date':
      return now.toLocaleDateString()
    case 'full':
      return now.toLocaleDateString() + '||' + now.toLocaleTimeString() + '||'
    default:
      return now.toLocaleTimeString()
  }
}
