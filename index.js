let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
document.getElementById("btn").addEventListener("click",function gfgMenu() 
            {const nav = document.querySelector('.nav');
  
            if (nav.style.display === "none") 
            {nav.style.display = "block";}
            else {nav.style.display = "none";}
              }
        )
