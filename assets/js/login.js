
    // let array = JSON.parse(localStorage.getItem("Users_Details"));

    function checkMail(){
        event.preventDefault();
    let array = JSON.parse(localStorage.getItem("Users_Details"));
    let mailid = document.getElementById("mail").value;
    let new_pass = document.getElementById("passwo").value;
    for(let i=0; i < array.length; i++){
    if(array[i].email == mailid && array[i].password == new_pass){
        window.location.href = "./../pages/bike.html";
        break;
    }
    else{
       
        alert("Invalid Email or password");
        break;
    }
    }
    }



   
//     function checkMail(){
//       alert("checkMail");
//     let user_array = JSON.parse(localStorage.getItem("Users_Details"));
//     let mailid = document.getElementById("mail").value;
//     let new_pwd = document.getElementById("passwo").value;
//     alert("user_array *:: "+ user_array);
//     for(let i=0; i < user_array.length; i++){
//      alert("user_array inside:: "+ user_array[i]);
//      alert("user_array email:: "+ user_array[i].email);
//       if(user_array[i].email == mailid && user_array[i].password == new_pwd){
//        window.location.href = "bike.html";
//       }
//       else{
//          alert("invalid mail-id");
//          window.location.href = "#";
//       }
//     }
//    }
