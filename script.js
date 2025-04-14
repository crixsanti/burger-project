const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapDiscount = document.querySelector('.map-discount')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterVegans = document.querySelector('.filter-vegans')

function formatCurrency(value) {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
}

function showAllItens(newArray) {
    let myLi = ``

    newArray.forEach(product => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">${formatCurrency(product.price)}</p>
            </li>`
    });

    list.innerHTML = myLi
}

function showMapItens() {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9
    }))
    showAllItens(newPrice)
}

function sumAllItens() {
    const totalPrice = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
            <li>
                <p>Somando todos os Hamburgers, fica um valor total de: ${formatCurrency(totalPrice)}</p>
            </li>
            `
}

function filterAllVegans() {
    const onlyVegans = menuOptions.filter((product) => product.vegan === true)
    showAllItens(onlyVegans)
}

buttonShowAll.addEventListener('click', () => showAllItens(menuOptions))
buttonMapDiscount.addEventListener('click', showMapItens)
buttonSumAll.addEventListener('click', sumAllItens)
buttonFilterVegans.addEventListener('click', filterAllVegans)