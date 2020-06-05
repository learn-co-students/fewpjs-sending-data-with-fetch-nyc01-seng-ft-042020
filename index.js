// Add your code here

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hi!")
    submitData("Alice", "alice@alice.com")
});

function submitData(name, email) {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(json => document.body.innerHTML = json.id)
    .catch(error => document.body.innerHTML = error.message)
}

function appendToBody(element){
    debugger;
    console.log(element)
    // const body = document.querySelector("body")
    // const div = document.createElement("div")
    // div.innerText = element
    // body.appendChild(div)
}