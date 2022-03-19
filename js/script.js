let users = [
    {
        id: "123456789",
        createdDate: "2021-01-06T00:00:00.000Z",
        status: "En validation",
        firstName: "Mohamed",
        lastName: "Taha",
        userName: "mtaha",
        registrationNumber: "2584",
    },
    {
        id: "987654321",
        createdDate: "2021-07-25T00:00:00.000Z",
        status: "Validé",
        firstName: "Hamid",
        lastName: "Orrich",
        userName: "horrich",
        registrationNumber: "1594",
    },
    {
        id: "852963741",
        createdDate: "2021-09-15T00:00:00.000Z",
        status: "Rejeté",
        firstName: "Rachid",
        lastName: "Mahidi",
        userName: "rmahidi",
        registrationNumber: "3576",
    }
]


var table = document.getElementById('table');
var id = 0;
window.onload = function () {


    Object.keys(users).forEach(key => {
        let value = users[key];
        var status;
        if (value.status == "Rejeté") {
            status = "class = \"rejected\"";
        } else if (value.status == "En validation") {
            status = "class = \"on-validation\"";
        } else {
            status = "class = \"valide\"";
        }
        const date = new Date(value.createdDate);
        table.innerHTML += "<tr id=\"" + id + "\"><td class=\"id\">" + value.id + "</td><td>" + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + "</td><td " + status + "><div>" + value.status + "</div></td><td>" + value.firstName + "</td><td>" + value.lastName + "</td><td>" + value.userName + "</td><td>" + value.registrationNumber + "</td><td class=\"action\"><button onclick=\"remove(" + id + ")\" class=\"remove\"><i class=\"fa fa-trash\"></i></button></td></tr+>";
        id++;
    });
}

var i = 0;
function remove(row) {
    document.getElementById(row).remove();
    users.splice(row - i, 1);
    Object.keys(users).forEach(key => {
        let value = users[key];
        console.log(value);
    });
    i++;
}



var dialog = document.querySelector('dialog');
document.getElementById("btnAdd").addEventListener('click', () => {
    dialog.showModal();
});

var idUser = 1;
document.getElementById('form').addEventListener('submit', (e)=>{
    var status;
    var createDate = document.getElementById('dateCreation').value;
    var etat = document.getElementById('etat').value;
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var username = document.getElementById('user').value;
    var matricule = document.getElementById('matricule').value;
    let user = {
        id: idUser,
        createdDate: createDate,
        status: etat,
        firstName: nom,
        lastName: prenom,
        userName: username,
        registrationNumber: matricule,
    };
    if(user.status = "Valide"){
        status = "class = \"valide\"";
    }
    else if (user.status == "En validation") {
        status = "class = \"on-validation\"";
    } else if (user.status == "Rejeté") {
        status = "class = \"rejected\"";
    } 
    else{
        status="class = \"\"";
    }

    users.push(user);

    const date = new Date(user.createdDate);
    table.innerHTML += "<tr id=\"" + id + "\"><td class=\"id\">" + user.id + "</td><td>" + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + "</td><td " + status + "><div>" + user.status + "</div></td><td>" + user.firstName + "</td><td>" + user.lastName + "</td><td>" + user.userName + "</td><td>" + user.registrationNumber + "</td><td class=\"action\"><button onclick=\"remove(" + id + ")\" class=\"remove\"><i class=\"fa fa-trash\"></i></button></td></tr+>";
    id++;
    idUser++;
    document.getElementById('form').reset();
    dialog.close();
    e.preventDefault();
});
function closeDialog() {
    dialog.close();
}

