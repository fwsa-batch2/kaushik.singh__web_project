let reviewList = [];
function pageonload(){
    const user = JSON.parse(localStorage.getItem("Customer_review"));
    if(user != null){
    reviewList=user;
    }
  }
  
  pageonload()

function reviewed(event){
    event.preventDefault();
    const review_msg= document.getElementById("review").value;
    const review_name= document.getElementById("reviewer_name").value;  
    const review_city= document.getElementById("reviewer_city").value; 

    const customer_details = {
        "review": review_msg,
        "name": review_name,
        "city": review_city,
        }

    reviewList.push(customer_details);
    localStorage.setItem("Customer_review", JSON.stringify(reviewList));
    // window.location.href = "../../pages/ended.html";
    comments();
}


function comments(){
    let getValue = localStorage.getItem("Customer_review");
    let parseValue = JSON.parse(getValue);
    let len = parseValue.length;
    let addId ="";

    for(let l=0; l<len; l++){
        let create = `<div style="background-color: #333333; width:90%; height: 200px; margin-left: 100px;"><br><label style="margin-left: 50px; font-size: 1.2vw;"><strong>${parseValue[l].name} -</strong></label><label style="color:grey;">${parseValue[l].city}</label><br><br><p style="margin-left: 90px; color: #9BA8A7;">${parseValue[l].review}</p></div><br>`
 
        addId=create+addId;

        document.getElementById("comments").innerHTML=addId;
    }
}

comments();