// Add your code here
function submitData(userName, userEmail) {
    let body = document.querySelector("body")
    let idValue = document.createElement('h1')
    let errorMessage = document.createElement('p')
    let formData = {
        name: userName,
        email: userEmail
      };
       
    let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
    };
       
    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          console.log(object);
          idValue.textContent = object.id
          body.append(idValue)
        })
        .catch(function(error) {
            alert("Bad thing!");
            console.log(error.message);
            errorMessage.textContent = error.message
            body.append(errorMessage)
        });
}