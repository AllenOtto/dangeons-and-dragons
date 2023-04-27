document.querySelector('button').addEventListener('click', getFetch)

async function getFetch() {
    try {
        const userInput = document.querySelector('input').value
        if(userInput) {
            const res = await fetch(`https://www.dnd5eapi.co/api/spells/${userInput}`)
            const jsonData = await res.json();
            console.log(jsonData);
            // let randClass = Math.floor(Math.random() * jsonData.classes.length)
            let randSubclass = Math.floor(Math.random() * jsonData.subclasses.length)
            console.log(randSubclass);
            document.querySelector('h2').innerHTML = jsonData.name
            const UlListOfClasses = document.createElement('ul')
            for(let i = 0; i < jsonData.classes.length; i++) {
                const listItemForClass = document.createElement('li')
                UlListOfClasses.append(listItemForClass)
                listItemForClass.innerText = jsonData.classes[i].name
                document.querySelector('.ul-list-classes').append(UlListOfClasses)
            }

            const UlListOfSubclasses = document.createElement('ul')
            for(let i = 0; i < jsonData.subclasses.length; i++) {
                const listItemForSubclass = document.createElement('li')
                UlListOfSubclasses.append(listItemForSubclass)
                listItemForSubclass.innerText = jsonData.subclasses[i].name
                document.querySelector('.ul-list-subclasses').append(UlListOfSubclasses)
            }

            document.querySelector('p').innerHTML = jsonData.desc
        } else {
            console.log("Provide some input");
        }
    } catch(err) {
        console.error(err)
    }
}
