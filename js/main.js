console.log("Raman is live!");
let previousValue1 = "";

function generate() {
    let first = document.getElementById('first-name').value;
    let write = document.getElementById('generate');
    let last = document.getElementById('last-name').value;

    let currentValue1 = first;
    // let currentValue = first.value;
    if (first == '' || last == '') {
        alert("You ave missed any box...");
    } else if (currentValue1 == previousValue1) {
        alert("You haven't changed the value.");
    } else if (first.toLowerCase().includes("vikalp") && !last.toLowerCase().includes("harshita")) {
        write.value = `0%`;
    } else if (!first.toLowerCase().includes("vikalp") && last.toLowerCase().includes("harshita")) {
        write.value = `0%`;
    } else {
        click.style.transform = 'translate(10px, 10px)'
        setTimeout(() => {
            click.style.transform = 'none'
        }, 100);
        let random = Math.floor(Math.random() * 100);
        write.value = `${random}%`;
        previousValue1 = currentValue1;
    }
}