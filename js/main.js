document.querySelector('button').addEventListener('click', getFetch)

async function getFetch() {
    try {
        const userInput = document.querySelector('input').value
        // Check that there is some user input else ask for some
        if(userInput) {
            // Request for data about a spell of choice
            const res = await fetch(`https://www.dnd5eapi.co/api/spells/${userInput}`)
            const jsonData = await res.json(); // Get data in json format
            console.log(jsonData);
            // let randSubclass = Math.floor(Math.random() * jsonData.subclasses.length)
            // console.log(randSubclass)
            document.querySelector('h2').innerHTML = jsonData.name // Display the name of spell searched for
            const ul = document.createElement('ul') // Create an unordered list
            // For everly class item in 
            for(let i = 0; i < jsonData.classes.length; i++) {
                const li = document.createElement('li')
                ul.append(li)
                li.innerText = jsonData.classes[i].name
                document.querySelector('.classes-div').append(ul)
            }

            const ull = document.createElement('ul')
            for(let i = 0; i < jsonData.subclasses.length; i++) {
                const li = document.createElement('li')
                ul.append(li)
                li.innerText = jsonData.subclasses[i].name
                document.querySelector('.subclasses-div').append(ul)
            }

            document.querySelector('p').innerHTML = jsonData.desc
        } else {
            document.querySelector('h2').innerText = "Provide some input first..."
        }
    } catch(err) {
        console.error(err)
    }
}
