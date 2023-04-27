document.querySelector('button').addEventListener('click', getFetch)

async function getFetch() {
    try {
        const userInput = document.querySelector('input').value
        if(userInput) {
            const res = await fetch(`https://www.dnd5eapi.co/api/spells/${userInput}`)
            const jsonData = await res.json();
            console.log(jsonData);
            let randClass = Math.floor(Math.random() * jsonData.classes.length)
            let randSubclass = Math.floor(Math.random() * jsonData.subclasses.length)
            console.log(randClass + " " + randSubclass);
            document.querySelector('h2').innerHTML = jsonData.name
            document.querySelector('h3').innerHTML = jsonData.classes[randClass].name
            document.querySelector('h4').innerHTML = jsonData.subclasses[randSubclass].name
            document.querySelector('p').innerHTML = jsonData.desc
        } else {
            console.log("Provide some input");
        }
    } catch(err) {
        console.error(err)
    }
}
