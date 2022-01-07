let letters = []
letters[0] = "azertyuiop<"
letters[1] = "qsdfghjklm@"
letters[2] = "wxcvbn."

window.onload = function () {
    let col = 0
    let line = 0
    let result = document.querySelector(".result")

    for (let i=0; i<letters.length; i++){
        let child = document.createElement(`div`)
        child.classList.toggle(`line-${i}`)
        document.body.children[0].appendChild(child)
        letters[i].split("").forEach(l => {
            let child = document.createElement('div')
            child.classList.add("key")
            child.innerText = l;
            document.body.children[0].children[i].appendChild(child)
        })
    }

    function pressKey(k) {
        if (k === "<") {
            result.innerHTML = result.innerHTML.slice(0, -1)
        }
        else result.innerHTML += k
    }

    document.body.children[0].children[line].children[col].classList.toggle("selected")

    window.onkeydown = function (e) {
        switch (e.key) {
            default:
                break;
            case "Enter":
                pressKey(letters[line][col]);
                break;
            case "ArrowUp":
                console.log("Up")
                document.body.children[0].children[line].children[col].classList.toggle("selected")
                line-1 >= 0 ? line -= 1 : line = letters.length - 1
                col > letters[line].length-1 ? col = letters[line].length-1 : ""
                document.body.children[0].children[line].children[col].classList.toggle("selected")
                break;
            case "ArrowLeft":
                console.log("Left")
                document.body.children[0].children[line].children[col].classList.toggle("selected")
                col-1 >= 0 ? col -= 1 : col = letters[line].length - 1
                document.body.children[0].children[line].children[col].classList.toggle("selected")
                break;
            case "ArrowRight":
                console.log("Right")
                document.body.children[0].children[line].children[col].classList.toggle("selected")
                col+1 >+ letters[line].length-1 ? col=0 : col += 1
                document.body.children[0].children[line].children[col].classList.toggle("selected")
                break;
            case "ArrowDown":
                console.log("Down")
                document.body.children[0].children[line].children[col].classList.toggle("selected")
                line+1 >+ letters.length-1 ? line=0 : line += 1
                col > letters[line].length-1 ? col = letters[line].length-1 : ""
                document.body.children[0].children[line].children[col].classList.toggle("selected")
                break;
        }
    }
}
