load()

var panels

function load() {
  var client = new XMLHttpRequest()
  client.open('GET', 'config.json')
  client.onreadystatechange = function () {
    if (client.readyState === 4) {
      if (client.status === 200 || client.status == 0) {
        const dogsArray = JSON.parse(client.responseText)

        var rootElement = document.querySelector('#root')
        // "background-image: url(PICTURE URL)"
        for (let i = 0; i < dogsArray.length; i++) {
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

        panels = document.querySelectorAll('.panel')
        panels.forEach((panel) => {
          panel.addEventListener('click', () => {
            removeActiveClasses()
            panel.classList.add('active')
          })
        })
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
