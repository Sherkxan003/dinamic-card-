let wrapper = document.querySelector('.wrapper'),
    card = document.createElement('div'),
    leter = document.querySelector('#leter'),
    brand = document.querySelector('#brand'),
    turi = document.querySelector('#turi'),
    search = document.querySelector('#search')

function render(data) {
    wrapper.innerHTML = null
    data.forEach((e) => {
        let card = document.createElement('div')
        card.setAttribute("class", "card w-[320px] h-[530px] bg-white shadow-md rounded-[12px]");

        card.innerHTML = `
        <img src="${e.img}" alt="" class="w-[140px] h-[180px] mx-auto py-3">
                <div class="px-5 mt-6 ">
                    <p class="ml-2 h-[70px]">${e.name}</p>
                    <p class=" ml-2 mb-2  text-[20px] font-[500]">${e.brand}</p>
                  
                    <p class="font-bold text-[20px] py-1 ml-2 rounded-md">Color: ${e.color}</p>
                    <p class="ml-2 text-[20px] mt-2 font-[500]">${e.price}</p>
                    <p class="p-2 bg-yellow-300 mt-2 rounded-lg"> 1 299 000 so'm / 12 oy</p>
                </div>
                <img src="./images/yulduz.png" alt="" class="ml-4 mx-2" >
                <div class="flex">
                    <button class="w-1/2 bg-green-600 text-white font-[500] m-2 rounded-lg h-[35px]">Rassrochka</button>
                    <button class="w-1/2 bg-sky-600 text-white font-[500] m-2 rounded-lg h-[35px]">Bir klilda olish</button>
                </div>
        
        `
        wrapper.append(card)
    });

}
render(product)

leter.addEventListener("change", (e) => {
    if (e.target.value === "A-z") {
        let sortName = product.sort((a, b) => {
            return a.name.localeCompare(b.name)

        })
        render(product)
    } else {
        let sortName = product.sort((a, b) => {
            return b.name.localeCompare(a.name)

        })
        render(product)
    }
})



function dinamicOption() {
    sortBrand = []
    product.forEach(item => {
        if (!sortBrand.includes(item.brand)) {
            sortBrand.push(item.brand)
        }

    })
    sortBrand.sort();
    sortBrand.forEach(item => {
        const option = document.createElement("option")
        option.innerHTML = item
        option.setAttribute("class", "font-bold ")
        brand.append(option)
    })
}







dinamicOption()

function dinamicOption1() {
    sortType = []
    product.forEach(item => {
        if (!sortType.includes(item.type)) {
            sortType.push(item.type)
        }

    })
    sortType.sort();
    sortType.forEach(item => {
        const option = document.createElement("option")
        option.innerHTML = item
        option.setAttribute("class", "font-bold ")
        turi.append(option)
    })
}
dinamicOption1()
brand.addEventListener('change', (e) => {
    const sortbrand = product.filter(item => {
        return item.brand === e.target.value

    })
    render(sortbrand)
})
turi.addEventListener('change', (e) => {
    const sorttype = product.filter(item => {
        return item.type === e.target.value

    })
    render(sorttype)
})

search.addEventListener("keyup", (e) => {

    const searchName = product.filter(item => {
        return item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    })
      render(searchName)
})