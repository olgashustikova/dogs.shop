load()

var panels

var dogsArray
var start = 0

function load() {
  var client = new XMLHttpRequest()
  client.open('GET', 'config.json')
  client.onreadystatechange = function () {
    if (client.readyState === 4) {
      if (client.status === 200 || client.status == 0) {
        dogsArray = JSON.parse(client.responseText)

        var rootElement = document.querySelector('#root')

        processingTemplateDogPreview(rootElement)

        processingPanelDogPreview()
      }
    }
  }
  client.send()
}

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}

function detailsClick(dogIndex) {
  localStorage.setItem('dogIndex', dogIndex)
  document.location = 'details.html'
}

function processingTemplateDogPreview(rootElement) {
  for (let i = start; i < start + 5; i++) {
    var temp = document.querySelector('#dogPreview')
    var clon = temp.content.cloneNode(true)
    var dogImageDiv = clon.querySelector('#dogImage')
    dogImageDiv.setAttribute(
      'style',
      'background-image: url(' + dogsArray[i].photoMain + ')'
    )

    var nameImageP = clon.querySelector('#nameDog')
    nameImageP.innerHTML = dogsArray[i].name
    var clickMoreP = clon.querySelector('#clickMore')
    clickMoreP.setAttribute('onclick', 'detailsClick(' + i + ')')
    nameImageP.setAttribute('onclick', 'detailsClick(' + i + ')')

    rootElement.appendChild(clon)
  }
}

function processingPanelDogPreview() {
  panels = document.querySelectorAll('.panel')
  panels.forEach((panel) => {
    panel.addEventListener('click', () => {
      removeActiveClasses()
      panel.classList.add('active')
    })
  })
}

function next() {
  const dogsPanelsRoot = document.getElementById('root')
  while (dogsPanelsRoot.firstChild) {
    dogsPanelsRoot.removeChild(dogsPanelsRoot.lastChild)
  }

  start = start + 5
  if (start > dogsArray.length - 5) {
    start = dogsArray.length - 5
  }
  processingTemplateDogPreview(dogsPanelsRoot)
}

function previous() {
  const dogsPanelsRoot = document.getElementById('root')
  while (dogsPanelsRoot.firstChild) {
    dogsPanelsRoot.removeChild(dogsPanelsRoot.lastChild)
  }

  start = start - 5
  if (start < 0) {
    start = 0
  }
  processingTemplateDogPreview(dogsPanelsRoot)
}
