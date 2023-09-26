
function store() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var mail = document.getElementById('mail').value;
    var pwd = document.getElementById('pwd').value;
    var confirmpwd= document.getElementById('confirmpwd').value;
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("mail", mail);
    localStorage.setItem("pwd", pwd);
    localStorage.setItem("confirmpwd", confirmpwd); 
}
function check() {
    var storedemail= localStorage.getItem('mail');
    var storedpwd = localStorage.getItem('pwd'); 
    var userName = document.getElementById('username');
    var userPwd = document.getElementById('pwd');
    if(userName.value !== storedemail || userPwd.value !== storedpwd) {
        alert('username or password are inccorect');
    }else {
        alert('You are loged in.');
    }
}
function checkfname(){
    var regName = /^[a-zA-Z]+$/;
    var fname = document.getElementById('fname').value;
    if(!fname.match(regName)){
         alert('Please enter Valid first name');      
        document.getElementById('fname').focus();
        return false;
    }
    /* else{
        alert('Valid name given.');
        return true;
    }*/
}
function checklname(){
    var regName = /^[a-zA-Z]+$/;
    var lname = document.getElementById('lname').value;
    if(!lname.match(regName)){
        alert('Please enter Valid last name');
        document.getElementById('lname').focus();
        return false;
    }
    /*else{
        alert('Valid name given.');
        return true;
    }*/
}
function checkEmail () {
    var regEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById('mail').value;
    if(!email.match(regEmail)) {
        alert('Please enter valid email');
        document.getElementById('mail').focus();
        return false;
    }
    /* else {
        alert('Valid email given');
        return true;
    }*/
} 
function checkPwd() {   
    var pwd = document.getElementById('pwd').value; 
    var regPwd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    if (!pwd.match(regPwd)) {
        alert("Please enter valid password ");
        document.getElementById('pwd').focus();
        return false;
    } 
    /* else {
       alert("Valid Password given");
       return true;
    }*/
}
function checkConfirmPwd() {
    var confirmpwd = document.getElementById('confirmpwd').value;
    var pwd = document.getElementById('pwd').value; 
    if(confirmpwd !== pwd) {
        alert("Passwords are not matching");
        document.getElementById('confirmpwd').focus();
        return true;
    }
    /* else {
        alert("Passwords are matching");
        return false;
    }*/
}