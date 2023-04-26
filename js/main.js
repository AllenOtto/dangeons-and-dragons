document.querySelector('button').addEventListener('click', getFetch)

async function getFetch() {
    try {
        const userInput = document.querySelector('input').value
        if(userInput) {
            const res = await fetch(`https://www.dnd5eapi.co/api/spells`)
            const jsonData = await res.json();
            document.querySelector('h2').innerHTML = jsonData.results[0].name
            console.log(jsonData)
        } else {
            console.log("Provide some input");
        }
    } catch(err) {
        console.error(err)
    }
}
