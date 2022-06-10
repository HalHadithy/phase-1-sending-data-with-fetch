// Add your code here

//Event Listner
//document.querySelector('')


//set a JavaScript arguement that will be used to change default's behavior 
const formData ={
    dogName: "Byron",
    dogBreed: "Poodle",
};

const configObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json",
    },
    body: JSON.stringify({formData}),
}

//fetch to the dogs object from the local host 
fetch('http://localhost:3000/dogs', configObject)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
    })
    .catch(function(error){
        alert("Something went wrong!");
        console.log(error.message);
    });

/* alternative way of writing the .then:
    .then (response => response.json() )
    .then (object => console.log(object))
*/

const deleteObject = {
    method: "DELETE",
   
}



function submitData(){
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json",
        },
        body: JSON.stringify({ 
            name: "Steve",
            email: "steve@steve.com",
        }),
    }

    fetch('http://localhost:3000/users', configObject)
        .then (response => response.json())
        .then (object => document.body.append(object.id))
        .catch(function(error){
            document.body.append("Unauthorized Access")
        });

}
