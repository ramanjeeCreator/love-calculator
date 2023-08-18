console.log("Raman is live!");
let previousValue1 = "";

function generate() {
    let first = document.getElementById('first-name').value;
    let write = document.getElementById('generate');
    let last = document.getElementById('last-name').value;

    if (first.length > 3 && last.length > 3) {
        let currentValue1 = first;
        // let currentValue = first.value;
        if (currentValue1 == previousValue1) {
            alert("You haven't changed the value.");
        } else if (!/^[a-zA-Z]*$/.test(first) || !/^[a-zA-Z]*$/.test(last)) {
            alert('These characters are not allowed!');
            write.value = "sorry"
        } else if (first.toLowerCase().includes("krishn") && last.toLowerCase().includes("radha")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("krishna") && last.toLowerCase().includes("radha")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("vinayak") && last.toLowerCase().includes("sifa")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("vinayak") && !last.toLowerCase().includes("sifa")) {
            write.value = `0%`;
        } else if (!first.toLowerCase().includes("vinayak") && last.toLowerCase().includes("sifa")) {
            write.value = `0%`;
        } else if (first.toLowerCase().includes("krish") && last.toLowerCase().includes("riya")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("krish") && !last.toLowerCase().includes("riya")) {
            write.value = `0%`;
        } else if (!first.toLowerCase().includes("krish") && last.toLowerCase().includes("riya")) {
            write.value = `0%`;
        } else if (first.toLowerCase().includes("vikalp") && last.toLowerCase().includes("harshita")) {
            write.value = `100%`;
        } else if (first.toLowerCase().includes("vikalp") && !last.toLowerCase().includes("harshita")) {
            write.value = `0%`;
        } else if (!first.toLowerCase().includes("vikalp") && last.toLowerCase().includes("harshita")) {
            write.value = `0%`;
        } else if (first.toLowerCase().includes("raman") || last.toLowerCase().includes("raman")) {
            alert(`Sorry guys, You are trying with my name, that i don't want!`);
            first.value = "";
            last.value = "";
            write.value = "sorry"
        } else if (first.toLowerCase().includes("shwet") || last.toLowerCase().includes("shwet")) {
            alert(`Sorry guys, This name you can't use!`);
            first.value = "";
            last.value = "";
            write.value = "sorry"
        } else if (first.toLowerCase().includes("rinki") || last.toLowerCase().includes("rinki")) {
            alert(`Sorry guys, This name you can't use!`);
            first.value = "";
            last.value = "";
            write.value = "sorry"
        } else if (first.toLowerCase().includes("pinki") || last.toLowerCase().includes("pinki")) {
            alert(`Sorry guys, This name you can't use!`);
            first.value = "";
            last.value = "";
            write.value = "sorry"
        } else if (first.toLowerCase().includes("ragni") || last.toLowerCase().includes("ragni")) {
            alert(`Sorry guys, This name you can't use!`);
            first.value = "";
            last.value = "";
            write.value = "sorry"
        } else if (first.toLowerCase().includes("ragini") || last.toLowerCase().includes("ragini")) {
            alert(`Sorry guys, This name you can't use!`);
            first.value = "";
            last.value = "";
            write.value = "sorry"
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
        alert('name value is less than 3')
    }

}