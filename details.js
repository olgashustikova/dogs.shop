initPage()

function initPage() {
    const dogIndex = localStorage.getItem("dogIndex")
    const name = document.getElementById("name")
    const photo = document.getElementById("photo")
    const text = document.getElementById("text")

    var client = new XMLHttpRequest();
    client.open('GET', 'config.json');
    client.onreadystatechange = function() {

        if(client.readyState === 4)
        {
            if(client.status === 200 || client.status == 0)
            {
                const obj = JSON.parse(client.responseText);
                name.innerHTML = obj[dogIndex].nameDog
                photo.setAttribute("src", obj[dogIndex].photoDetails)
                text.innerHTML = obj[dogIndex].description
            }
        }
    }
    client.send()
}

const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))