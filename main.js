$(document).ready(function(){

$(".fa-bars").click(function(){
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
     
});


$(window).on("load scroll",function(){
    $(".fa-bars").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");
    
    if($(window).scrollTop() > 30){
        $(".header").css({"background":"#a708","box-shadow":"0 .2rem .5rem rgba(0,0,0,.4)"});
    }else{
        $(".header").css({"background":"none","box-shadow":"none"});  
    }

});
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
});