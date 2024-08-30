let counter = document.querySelector(".counter");
let showCount = document.querySelector(".showCounter");
let msg = document.querySelector(".msg");
let msg_container = document.querySelector(".msg-container");

let count = 0;
function myCount(){
    count++;
}



counter.addEventListener("click",myCount);
showCount.addEventListener("click",()=>{
    alert(count);
});




