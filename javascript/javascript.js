function Login() {
    var name = "pasindu@gmail.com";
    var password = "123456";

    var in_name = document.getElementById('email').value;
    var in_password = document.getElementById('password').value;

    if (in_name === name && in_password === password) {
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

    var salary = parseFloat(salary);

    var cus = {
        nic :nic,
        name: name,
        address: address,
        salary: salary,

    }

    customer.push(cus);
    console.log(customer);

}