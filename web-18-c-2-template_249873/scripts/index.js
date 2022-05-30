// Add the coffee to local storage with key "coffee"


   // async function getData(){
        let url = `https://masai-mock-api.herokuapp.com/coffee/menu`
     
    //     let res = await fetch(url);
    //     let data = await res.json();
    //     console.log(data);
    //     appendData(data.data)
    //     }
        
    //     getData()

    //     function appendData(data){
    //        data.map(function(el){
               
    //       let box = document.createElement("div");
    //             let p = document.createElement("p")
    //             p.innerText = el.title;

    //             let img = document.createElement("img")
    //             img.src = el.image;
               
    //         })
    //  console.log(p)
    //         div.append(p,img)
    //         document.querySelector("#container").append(div)
    //     }

    

// console.log(url)
fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res);
 appendData(res.menu.data)
})
.catch(function(err){
    console.log( err)
})

function appendData(data){
    data.foreach(function(el){
        let div = document.createElement("div");
        let title = document.createElement("p");
        title.innerText = el.title;
       
    })
    console.log(title)
} 

function appendData(data){
    data.foreach(function(el){
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = el.title

        let description = document.createElement("p");
        description.innerText = el.description

        let img = document.createElement("img");
     img.src= el.image
     console.log(p,description,img)

     let button = document.createElement("button")
     button.innerText = "Add to Bucket"
     button.addEventListener(click,function(){
         Addtobucket(el);
     })
        div.append(img,p,description,button)
        document.querySelector("#container").append(div)
    })
}

function  Addtobucket(el){
    console.log(el)
}