document.querySelector('button').addEventListener('click', getFetch)

async function getFetch() {
    try {
        const userInput = document.querySelector('input').value
        if(userInput) {
            const res = await fetch(`https://www.dnd5eapi.co/api/spells/${userInput}`)
            const jsonData = await res.json();
            console.log(jsonData);
            document.querySelector('h2').innerHTML = jsonData.name
            document.querySelector('h3').innerHTML = jsonData.classes[0].name
            document.querySelector('h4').innerHTML = jsonData.subclasses[0].name
            document.querySelector('p').innerHTML = jsonData.desc
        } else {
            console.log("Provide some input");
        }
    } catch(err) {
        console.error(err)
    }
}
