console.log("Raman is live!");
let previousValue1 = "";

function generate() {
    let first = document.getElementById('first-name').value;
    let write = document.getElementById('generate');
    let last = document.getElementById('last-name').value;

    if (first.length > 3 && last.length > 3) {
        let currentValue1 = first;
        // let currentValue = first.value;
        if (first == '' || last == '') {
            alert("You ave missed any box...");
        } else if (currentValue1 == previousValue1) {
            alert("You haven't changed the value.");
        } else if (first.toLowerCase().includes("ram") && last.toLowerCase().includes("sita")) {
            write.value = `100%`;
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
            alert(`Sorry guys, You are trying with my name, that i don't want!`)
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