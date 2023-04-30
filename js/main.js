document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('#close').addEventListener('click', close)

async function getFetch() {
    try {
        let userInput = document.querySelector('input').value.toLowerCase()
        
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

            // For everly object returned fetch the classes associated with it and display them in a list item
            for(let i = 0; i < jsonData.classes.length; i++) {
                const li = document.createElement('li')
                ul.append(li)
                li.innerText = jsonData.classes[i].name
                document.querySelector('.classes-div').append(ul)
            }

            // For everly object returned fetch the subclasses associated with it and display them in a list item
            const ul2 = document.createElement('ul')

            for(let i = 0; i < jsonData.subclasses.length; i++) {
                const li = document.createElement('li')
                ul2.append(li)
                li.innerText = jsonData.subclasses[i].name
                document.querySelector('.subclasses-div').append(ul2)
            }

            document.querySelector('p').innerHTML = jsonData.desc
        } else {
            document.querySelector('h2').innerText = "Provide some input first..."
        }
    } catch(err) {
        console.error(err)
    }
}

function close() {
    const footerDiv = document.querySelector("#footer")
    footerDiv.innerHTML = ""
}
