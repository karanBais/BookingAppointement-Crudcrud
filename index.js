function handelForm(event){
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const number =  event.target.number.value;
    const appointement = event.target.appointement.value;

    const Userdetails = {
        name: name,
        email: email,
        number:number,
        appointement: appointement
    }

    // Uploading to Cloude
    axios.post('https://crudcrud.com/api/f541a80d9fec462fba9b7537347c92ce/appointementData', Userdetails)
    .then(res => console.log(res))
    .catch(error => console.error(error))


    // Storing in Local Storage
    localStorage.setItem(`${Userdetails.email}`, JSON.stringify(Userdetails))

    const storage = document.querySelector(".storage")
    const newLi = document.createElement("li");
    newLi.innerHTML = (`${Userdetails.name} - ${Userdetails.email} - ${Userdetails.number} - ${Userdetails.appointement}`)
    storage.appendChild(newLi)

    // Edit button

    const editbtn = document.createElement("button")
    editbtn.innerHTML = "Edit";
    newLi.appendChild(editbtn);

    editbtn.onclick = function(){
        localStorage.removeItem(Userdetails.email);
        newLi.remove();

        document.getElementById("name").value = name;
        document.getElementById("email").value = email;
        document.getElementById("number").value = number;
        document.getElementById("appointement").value = appointement;
    }

    const deletebtn = document.createElement("button")
    deletebtn.innerHTML = "Delete"
    newLi.appendChild(deletebtn)

    deletebtn.onclick = function(){
        newLi.remove();
        localStorage.removeItem(Userdetails.email)
    }
   inputReset()
}
function inputReset(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("appointement").value = "";
}