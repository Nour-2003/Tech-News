const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link");

//   js code to show/hide password and change icon
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

// js code to appear signup and login form
signUp.addEventListener("click", () => {
  container.classList.add("active");
});
login.addEventListener("click", () => {
  container.classList.remove("active");
});
function login1 (){
            event.preventDefault();
            var username = document.getElementById('email_login').value;
            var pass = document.getElementById('pass_login').value;
            // var result = document.getElementById('result');

            var user = localStorage.getItem(username);
            var date = JSON.parse(user);
            console.log(localStorage.getItem(username));
            if (username == "admin" && pass == "admin"){
                alert('hi admin');
                window.location.href="admin.html";
            }
            else if (user == null) {
                alert('wrong username');
                // result.innerHTML = 'wrong username';
            }
            else if (username == date.username && pass == date.password){
                
                // result.innerHTML = 'logged in';
                alert("found");
                window.location.href="index.html";
            }
            else {
                alert('wrong password');
                // result.innerHTML = 'wrong password';
            }
        }
 function register1(){
            event.preventDefault();
            let username = document.getElementById('email_register').value;
            let email = document.getElementById('username').value;
            let pass = document.getElementById('pass_register').value;

            let user = {
                email: email,
                username: username,
                password: pass,
            };
            let json = JSON.stringify(user);
            localStorage.setItem(username, json);
            if(username.value == "" && pass.value == ""){
                console.log(alert("Empty Fields!"));
            }
            window.location.href="index.html";
            //else 
                //window.location.href="/indexh.html";
        }