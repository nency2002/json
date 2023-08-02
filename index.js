let data = []

let pro = () =>{
  document.querySelector("#ui").innerHTML=""
  data.map((ele)=>{
        let img = document.createElement("img")
        img.src=ele.images[0]
    
        let title = document.createElement("h1")
        title.innerHTML=ele.title
    
        let price = document.createElement("h2")
        price.innerHTML=ele.price
    
        let brand = document.createElement("h3")
        brand.innerHTML=ele.brand
        
        let category = document.createElement("h4")
        category.innerHTML=ele.category
  
        let div = document.createElement("div")
        div.append(img,title,price,brand,category)

        document.querySelector("#ui").append(div)
  })
}

// this mathod are normal 

// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))  <-- "This method is just for information to GET jsondata to server" 


// this is a async/await function mathod 

let get = async () =>{ 

  let  datas = await fetch("https://dummyjson.com/products") // <-- past api lint extantion is http || this json are dummy not created by me
    let  promo = await datas.json() // <-- ".json()" it's a json file not a fuction
    data = promo.products // <-- store data in array
    console.log(promo.products )

  pro() // <-- print data in html file
}

get()