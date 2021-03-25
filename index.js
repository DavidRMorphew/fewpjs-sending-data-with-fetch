// Add your code here
const script = document.querySelector("script")
const ul = document.createElement('ul')
script.insertAdjacentElement('afterend', ul)

function submitData(name, email) {
    const data = { "name": name, "email": email };
    const url = "http://localhost:3000/users"
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(url, configObj)
        .then(function(response) { 
            return response.json();
        })
        .then(function(json) {
            // console.log(json);
            // document.body.innerHTML = json.id
            const li = document.createElement('li')
            li.innerHTML = json.id
            ul.appendChild(li)
        });
        
}