// Add your code here
const setUrl = "http://localhost:3000/users"
function submitData(userName,userEmail){
let formData = {
    name: userName,
    email: userEmail
};
let postObj = {
    // method: "POST",
    headers: {
        "Content-Type":"application/json", 
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
};
    fetch(setUrl, postObj)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
       let objId = object.id
       let element = document.createElement('p');
       let body = document.getElementsByTagName('body')[0];
       body.append(objId);
       
    })
    .catch(function(error){
        alert("Error!");
        let body = document.getElementsByTagName('body')[0];
        let element = document.createElement('h1')
        element.textContent = "error: " + error.message;
       body.append(element);
    });
    return postObj;
}
