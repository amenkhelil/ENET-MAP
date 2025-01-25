document.getElementById('createAccountForm')?.onsubmit = function(e) {  
    e.preventDefault(); // Prevent form submission  
    const username = document.getElementById('username').value;  
    const email = document.getElementById('email').value;  
    const password = document.getElementById('password').value;  

    alert('Account created for ' + username);  
    window.location.href = 'index.html';  
};  

document.getElementById('loginForm')?.onsubmit = function(e) {  
    e.preventDefault(); // Prevent form submission  
    const username = document.getElementById('loginUsername').value;  
    const password = document.getElementById('loginPassword').value;  

    alert('Logging in ' + username);  
};  

  
document.getElementById('forgotPassword')?.onclick = function() {  
    const email = prompt("Enter your email:");  
    if (email) {  
        alert(`A recovery code has been sent to ${email}.`);  
  
        setTimeout(() => {  
            window.location.href = 'enter_code.html';  
        }, 1000);  
    }  
};  
 
document.getElementById('codeForm')?.onsubmit = function(e) {  
    e.preventDefault();   
    const code = document.getElementById('verificationCode').value;  
    const newPassword = document.getElementById('newPassword').value;  

    if (code === "123456") {   
        alert("Password has been successfully reset!");  
        window.location.href = 'index.html';   
    } else {  
        alert("Invalid code. Please try again.");  
    }  
};
