//https://superheroapi.com/api/access-token/character-id
const BASE_URL = "https://superheroapi.com/api.php/${SUPERHERO_TOKEN}"

const getSuperHero = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => console.log(json.image))
}
  
  getSuperHero();

  const img = "https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg"

  document.querySelector('body').innerHTML +=`<img src="${img}"`