initPage()

function initPage() {
    const dogIndex = localStorage.getItem("dogIndex")
    const bg = document.querySelector('.bg')
   
    const photo = document.getElementById("photo")
    if(dogIndex == 1) {
        bg.style.backgroundImage = "url('https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80')" 
    } else if(dogIndex == 2) {
        bg.style.backgroundImage = "url('https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80')"
    } else if(dogIndex == 3) {
       bg.style.backgroundImage = "url('https://images.unsplash.com/photo-1491604612772-6853927639ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')"
    } else if(dogIndex == 4) {
        bg.style.backgroundImage = "url('https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80')"
    } else if(dogIndex == 5) {
        bg.style.backgroundImage = "url('https://images.unsplash.com/photo-1487001175664-86de872e3cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=372&q=80')"
    } else if(dogIndex == 6) {
        bg.style.backgroundImage = "url('https://images.unsplash.com/photo-1496982411516-bfb7eb1c74e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80')"
    } else {
        bg.style.backgroundImage = "url('https://images.unsplash.com/photo-1517964764-0d7297e9eaf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')"
    }
}


const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0;

let int = setInterval(blurring, 30)
    
function blurring() {
    load++

    if(load > 99){
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter =`blur(${scale(load, 0, 100, 30, 0)}px)`
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers/23202637

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}