console.log("Raman is live!");

function generate() {
    let first = document.getElementById('first-name').value;
    let write = document.getElementById('generate');
    let last = document.getElementById('last-name').value;

    if (first == '' || last == '') {
        alert("You ave missed any box...");
    } else if (first.toLowerCase().includes("vikalp") && last.toLowerCase().includes("harshita")) {
        write.value = `100%`;
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
    }
}