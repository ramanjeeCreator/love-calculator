console.log("Raman is live!");
let previousValue1 = "";

function generate() {
    let first = document.getElementById('first-name').value;
    let last = document.getElementById('last-name').value;
    let write = document.getElementById('generate');
    var changeDiv = document.getElementById('first-div');
    var colorDiv = "greenyellow";

    if (first.length > 3 && last.length > 3) {
        let currentValue1 = first;

        if (currentValue1 == previousValue1) {
            changeDiv.style.color = colorDiv;
            changeDiv.style.fontSize = "larger";
            changeDiv.style.transition = "color 1s ease-in-out, font-size 1s ease-in-out"
            execute("You haven't changed the value.");
        } else if (!/^[a-zA-Z]*$/.test(first) || !/^[a-zA-Z]*$/.test(last)) {
            changeDiv.style.color = colorDiv;
            changeDiv.style.fontSize = "larger";
            changeDiv.style.transition = "color 1s ease-in-out, font-size 1s ease-in-out"
            execute("Spaces and other characters are not allowed!");
        } else if (first.toLowerCase().includes("krishn") && last.toLowerCase().includes("radha")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("krishna") && last.toLowerCase().includes("radha")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("radha") && last.toLowerCase().includes("krishn")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("radha") && last.toLowerCase().includes("krishna")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("vinayak") && last.toLowerCase().includes("sifa")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("vinayak") && !last.toLowerCase().includes("sifa")) {
            write.value = `0%`;
        } else if (!first.toLowerCase().includes("vinayak") && last.toLowerCase().includes("sifa")) {
            write.value = `0%`;
        } else if (first.toLowerCase().includes("sifa") && last.toLowerCase().includes("vinayak")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("sifa") && !last.toLowerCase().includes("vinayak")) {
            write.value = `0%`;
        } else if (!first.toLowerCase().includes("sifa") && last.toLowerCase().includes("vinayak")) {
            write.value = `0%`;
        } else if (first.toLowerCase().includes("krish") && last.toLowerCase().includes("riya")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("krish") && !last.toLowerCase().includes("riya")) {
            write.value = `0%`;
        } else if (!first.toLowerCase().includes("krish") && last.toLowerCase().includes("riya")) {
            write.value = `0%`;
        } else if (first.toLowerCase().includes("riya") && last.toLowerCase().includes("krish")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("riya") && !last.toLowerCase().includes("krish")) {
            write.value = `0%`;
        } else if (!first.toLowerCase().includes("riya") && last.toLowerCase().includes("krish")) {
            write.value = `0%`;
        } else if (first.toLowerCase().includes("vikalp") && last.toLowerCase().includes("harshita")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("vikalp") && !last.toLowerCase().includes("harshita")) {
            write.value = `0%`;
        } else if (!first.toLowerCase().includes("vikalp") && last.toLowerCase().includes("harshita")) {
            write.value = `0%`;
        } else if (first.toLowerCase().includes("harshita") && last.toLowerCase().includes("vikalp")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("harshita") && !last.toLowerCase().includes("vikalp")) {
            write.value = `0%`;
        } else if (!first.toLowerCase().includes("harshita") && last.toLowerCase().includes("vikalp")) {
            write.value = `0%`;
        } else if (first.toLowerCase().includes("shailesh") && last.toLowerCase().includes("anamika")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("shailesh") && !last.toLowerCase().includes("anamika")) {
            write.value = `0%`;
        } else if (!first.toLowerCase().includes("shailesh") && last.toLowerCase().includes("anamika")) {
            write.value = `0%`;
        } else if (first.toLowerCase().includes("anamika") && last.toLowerCase().includes("shailesh")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("anamika") && !last.toLowerCase().includes("shailesh")) {
            write.value = `0%`;
        } else if (!first.toLowerCase().includes("anamika") && last.toLowerCase().includes("shailesh")) {
            write.value = `0%`;
        } else if (first.toLowerCase().includes("shubham") && last.toLowerCase().includes("ikchha")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("shubham") && !last.toLowerCase().includes("ikchha")) {
            write.value = `0%`;
        } else if (!first.toLowerCase().includes("shubham") && last.toLowerCase().includes("ikchha")) {
            write.value = `0%`;
        } else if (first.toLowerCase().includes("ikchha") && last.toLowerCase().includes("shubham")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("ikchha") && !last.toLowerCase().includes("shubham")) {
            write.value = `0%`;
        } else if (!first.toLowerCase().includes("ikchha") && last.toLowerCase().includes("shubham")) {
            write.value = `0%`;
        } else if (first.toLowerCase().includes("raman") || last.toLowerCase().includes("raman")) {
            changeDiv.style.color = colorDiv;
            changeDiv.style.fontSize = "larger";
            changeDiv.style.transition = "color 1s ease-in-out, font-size 1s ease-in-out"
            execute("Website don't allows you to use this name!");
        } else if (first.toLowerCase().includes("shwet") || last.toLowerCase().includes("shwet")) {
            changeDiv.style.color = colorDiv;
            changeDiv.style.fontSize = "larger";
            changeDiv.style.transition = "color 1s ease-in-out, font-size 1s ease-in-out"
            execute("Website don't allows you to use this name!");
        } else if (first.toLowerCase().includes("rinki") || last.toLowerCase().includes("rinki")) {
            changeDiv.style.color = colorDiv;
            changeDiv.style.fontSize = "larger";
            changeDiv.style.transition = "color 1s ease-in-out, font-size 1s ease-in-out"
            execute("Website don't allows you to use this name!");
        } else if (first.toLowerCase().includes("pinki") || last.toLowerCase().includes("pinki")) {
            changeDiv.style.color = colorDiv;
            changeDiv.style.fontSize = "larger";
            changeDiv.style.transition = "color 1s ease-in-out, font-size 1s ease-in-out"
            execute("Website don't allows you to use this name!");
        } else if (first.toLowerCase().includes("ragni") || last.toLowerCase().includes("ragni")) {
            changeDiv.style.color = colorDiv;
            changeDiv.style.fontSize = "larger";
            changeDiv.style.transition = "color 1s ease-in-out, font-size 1s ease-in-out"
            execute("Website don't allows you to use this name!");
        } else if (first.toLowerCase().includes("ragini") || last.toLowerCase().includes("ragini")) {
            changeDiv.style.color = colorDiv;
            changeDiv.style.fontSize = "larger";
            changeDiv.style.transition = "color 1s ease-in-out, font-size 1s ease-in-out"
            execute("Website don't allows you to use this name!");
        } else {
            click.style.transform = 'translate(10px, 10px)'
            setTimeout(() => {
                click.style.transform = 'none'
            }, 100);
            let random = Math.floor(Math.random() * 100);
            write.value = `${random}%`;
            previousValue1 = currentValue1;
        }
    } else {
        changeDiv.style.color = colorDiv;
        changeDiv.style.fontSize = "larger";
        changeDiv.style.transition = "color 1s ease-in-out, font-size 1s ease-in-out"
        execute("Name value must be less than 3");
    }
}

function execute(text) {
    let write = document.getElementById('generate');
    let changeDiv = document.getElementById('first-div');
    let colorDiv = "greenyellow";
    setTimeout(() => {
        changeDiv.innerHTML = text;
        document.getElementById('first-name').value = "";
        document.getElementById('last-name').value = "";
        setTimeout(() => {
            changeDiv.style.color = "white";
            changeDiv.style.fontSize = "3vw";
            changeDiv.innerHTML = "Love Calculator";
        }, 3000);
    }, 700);
    write.value = "sorry";
}