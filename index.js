// Add your code here
const script = document.querySelector("script")
// const ul = document.createElement('ul')
// script.insertAdjacentElement('afterend', ul)
const body = document.body

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
    return fetch(url, configObj)
        .then(function(response) { 
            return response.json();
        })
        .then(function(json) {
            const currentText = body.innerHTML
            body.innerHTML = currentText + "<br>" + json.id;
            // Alternative, which the test did not like:
            // const li = document.createElement('li');
            // ul.appendChild(li);
            // li.innerHTML = json.id;
        })
        .catch(function(error) {
            const currentText = body.innerHTML
            body.innerHTML = currentText + "<br>" + error.message;
        })
        
}