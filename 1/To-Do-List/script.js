function Todo(){

    let li = document.createElement("li");
    let text = document.querySelector('#text').value
    let t = document.createTextNode(text);
    li.appendChild(t);
    document.querySelector(".lista").appendChild(li);
    document.getElementById("text").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

        for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}