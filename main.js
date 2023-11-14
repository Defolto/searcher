const input = document.querySelector("input")
const button = document.querySelector("button")
const select = document.querySelector("select")

function findSearch() {
    const text = input.value
    const searchText = text.split(' ').join("+")
    
    switch (select.value) {
        case "гугл":
            location.assign(`https://www.google.com/search?q=${searchText}`)
            break;
    
        case "яндекс":
            location.assign(`https://ya.ru/search/?text=${searchText}`)
            break;
    }
}

button.addEventListener("click", findSearch)

addEventListener("keypress", (e)=>{
    if (e.key == "Enter") {
        findSearch()
    }
})