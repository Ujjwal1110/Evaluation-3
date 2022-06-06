

document.querySelector("#form").addEventListener("submit",userDetail);
var myuserDetail =JSON.parse(localStorage.getItem("user")) || [];

function userDetail(){
  event.preventDefault()

  contractObj={

    personName : form.name.value,
    personEmail : form.email.value,
    personAddress : form.address.value,
    personAmount : form.amount.value,
  };

  myuserDetail.push(contractObj);
  localStorage.setItem("user",JSON.stringify(myuserDetail));

}




