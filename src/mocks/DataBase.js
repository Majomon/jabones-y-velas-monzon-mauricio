const products = [
    {
        id: 1,
        name: "Jabon 1",
        description: "Jabon Artesanal",
        stock: 10,
        img: "https://www.consumer.es/app/uploads/2019/07/img_jabones-artesanos-salud-hd.jpg"
    }, 
    {
        id: 2,
        name: "Jabon 2",
        description: "Jabon Artesanal",
        stock: 10,
        img: "https://www.cuerpomente.com/medio/2019/07/03/jabon-casero_bb78caca_846x846.jpg"
    },
    {
        id: 3,
        name: "Jabon 3",
        description: "Jabon Artesanal",
        stock: 10,
        img: "https://cdn.shopify.com/s/files/1/0229/0839/files/vender_jabon.jpg?v=1656493262"
    },
    {
        id: 4,
        name: "Jabon 4",
        description: "Jabon Artesanal",
        stock: 10,
        img: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/04/recetas-de-jabones-artesanales-igoriss.jpg"
    },
]

export const data = new Promise((resolve,reject)=>{
    let condition = true
    setTimeout(()=>{
        if (condition){
            resolve(products)
        }else{
            reject("Algo esta roto")
        }
    },2000)
})