const orderSoup = () => console.log('soup is ready')

console.log('you start the convo with your girlfriend')
setTimeout(orderSoup, 2000)
console.log('still speaking')

const promise1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        isReady = [true, false][Math.floor(Math.random() * 2)]
        isReady ? resolve('soup is ready'):
       reject('no soup today')
    }, 2000)
})

console.log(
    promise1
    .then(success => console.log({success}))
    .catch(error => console.log({error}))
    )

console.log('fatch:',
fetch('https://dog.ceo/api/breeds/image/random') // promise 
 .then(response => response.json()) // promise
 .then(data => console.log(data))
)

const getDong = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}
