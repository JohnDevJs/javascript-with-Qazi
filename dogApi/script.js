console.log('hello')
// https: // dog.ceo/api/breeds/image/random


console.log('run 1st')

const dogImageDiv = document.getElementById('dogImage')
const dogImage = document.getElementById('dogImage')

const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then (json => {
        dogImageDiv.innerHTML = `<img src="${json.message}"/>`
      })
}

dogButton.onclick = () => getNewDog()

console.log('run 3rd')