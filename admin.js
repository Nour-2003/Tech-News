        function remove (){
            event.preventDefault();
            var username = document.getElementById('user').value;
            var pass = document.getElementById('pass').value;
            // var result = document.getElementById('result');

            var user = localStorage.getItem(username);
            var date = JSON.parse(user);
            localStorage.removeItem(username);
            console.log(username);
            
        }