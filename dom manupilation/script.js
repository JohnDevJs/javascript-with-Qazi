console.log('hello')

let title =
document.getElementById('title')

console.log('before: ', 
titleDiv.innerText)

let message = "Goodbye my lover!"

titleDiv.innerText = message; 

console.log('after:', 
titleDiv.innerText)

titleDiv.innerHTML = <p>${message}</p>

titleDiv.style.color = "red"