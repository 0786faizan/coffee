 document.querySelector("#order-form").addEventListener("submit",formfunc)
 function formfunc(event){
   event.preventdefault();
    //  console.log(event)
    let name = document.getElementById("name").value;
    console.log(name)

   
 let mypromise = new Promise(function(resolve,reject){
     let time = Math.random()*0*1000;
     setTimeout(function(){
         resolve();
     },time)
 })

 let mypromise1 = new Promise(function(resolve,reject){
    let time = Math.random()*3*1000;
    setTimeout(function(){
        resolve();
    },time)
})

let mypromise2 = new Promise(function(resolve,reject){
    let time = Math.random()*8*1000;
    setTimeout(function(){
        resolve();
    },time)
})

let mypromise3 = new Promise(function(resolve,reject){
    let time = Math.random()*10*1000;
    setTimeout(function(){
        resolve();
    },time)
})

let mypromise4 = new Promise(function(resolve,reject){
    let time = Math.random()*12;
    setTimeout(function(){
        resolve();
    },time)
})


mypromise.then(function(res){
    alert("Your order is accepted ")
})

mypromise1.then(function(res){
    alert("Your order is being Prepared  ")
})

mypromise2.then(function(res){
    alert(" Your order is being packed ")
})

mypromise3.then(function(res){
    alert("Your order is out for delivery ")
})

mypromise4.then(function(res){
    alert(" Order delivered ")
})

}
 formfunc()