let shop = document.getElementById('shop');

// let shopItemsData = [{
//     id: "ghjghjfy",
//     name: "Casual Shirt",
//     price: 45,
//     desc: "Lorem ipsum dolor sit amet consectetur adisiciping.",
//     img: "images/img-1.png"
// }, 
// {
//     id: "uirtyui",
//     name: "Offici Shirt",
//     price: 100,
//     desc: "Lorem ipsum dolor sit amet consectetur adisiciping.",
//     img: "images/img-2.png"
// }, 
// { 
//     id: "nmcvytry",
//     name: "Fit Shirt",
//     price: 25,
//     desc: "Lorem ipsum dolor sit amet consectetur adisiciping.",
//     img: "images/img-3.png"
// },
// { 
//     id: "iytuiy",
//     name: "Mens Suit",
//     price: 300,
//     desc: "Lorem ipsum dolor sit amet consectetur adisiciping.",
//     img: "images/img-4.png"
// }];

let basket = JSON.parse(localStorage.getItem("data")) || []

let generateshop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, price, desc, img } = x;
            let search = basket.find((x)=>x.id === id) || []
            return `
            <div id="product-id=${id}" class="items">
                <img width="200" height="150" src="${img}" alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>${price}</h2>
                        <div class="buttons">
                            <i onclick="decrement('${id}')" class="bi bi-dash"></i>
                            <div id="${id}" class="quantity">
                            ${search.item === undefined? 0: search.item}
                            </div>
                            <i onclick="increment('${id}')" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
        }).join(""));
};

generateshop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);

    if (search === undefined) {
        basket.push({
            id: selectedItem,
            item: 1,
        });
    } else {
        search.item += 1;
    }
    
    localStorage.setItem('data', JSON.stringify(basket));

    update(selectedItem);
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);

    if (search === undefined || search.item === 0) return;
    
    search.item -= 1;

    localStorage.setItem('data', JSON.stringify(basket));
    
    update(selectedItem);
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation =()=>{
    let cartIcon = document.getElementById("cartAmount")
    cartIcon.innerHTML = basket.map ((x) => x.item).reduce((x, y) => x + y, 0);
}

calculation()