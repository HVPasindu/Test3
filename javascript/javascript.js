function Login() {
    var name = "pasindu@gmail.com";
    var password = "123456";

    var in_name = document.getElementById('email').value;
    var in_password = document.getElementById('password').value;

    if (in_name == "" || in_password == "") {
        alert("you must fill this....");
    }

    else if (in_name === name && in_password === password) {
        alert("you are login scussusfull");
        window.location.href = "addChild.html"
    } else {
        alert("wrong data enter,try again....")
    }

    document.getElementById('email').value = '';
    document.getElementById('password').value = '';

}



var customer = [];
function Add() {
    var nic = document.getElementById('nic').value;
    var name = document.getElementById('Name').value;
    var address = document.getElementById('Address').value;
    var salary = document.getElementById('Salary').value;

    if (nic == "" || name == "" || address == "" || salary == "") {
        alert("please full this all");
    } else {

        var salary = parseFloat(salary);



        var cus = {
            nic: nic,
            name: name,
            address: address,
            salary: salary,

        }

        customer.push(cus);
        console.log(customer);
        displayDetails()

        var nic = document.getElementById('nic').value = "";
        var name = document.getElementById('Name').value = "";
        var address = document.getElementById('Address').value = "";
        var salary = document.getElementById('Salary').value = "";
    }

}


function displayDetails() {

    var add = document.getElementById('show');
    add.innerHTML = '';

    customer.forEach(function (item) {

        let row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.nic}</td>
            <td>${item.name}</td>
            <td>${item.address}</td>
            <td>${item.salary}</td>
        `;

        add.appendChild(row);
    });


}
