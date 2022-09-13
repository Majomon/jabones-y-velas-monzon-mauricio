const products = [
    {
        id: 1,
        name: "Jabon 1",
        category: "jabones",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quibusdam impedit explicabo amet",
        stock: 8,
        price: 200,
        img: "https://www.consumer.es/app/uploads/2019/07/img_jabones-artesanos-salud-hd.jpg",
        alt:"imgJabon"
    }, 
    {
        id: 2,
        name: "Jabon 2",
        category: "jabones",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quibusdam impedit explicabo amet",
        stock: 10,
        price: 200,
        img: "https://www.cuerpomente.com/medio/2019/07/03/jabon-casero_bb78caca_846x846.jpg",
        alt:"imgJabon"
    },
    {
        id: 3,
        name: "Jabon 3",
        category: "jabones",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quibusdam impedit explicabo amet",
        stock: 15,
        price: 200,
        img: "https://cdn.shopify.com/s/files/1/0229/0839/files/vender_jabon.jpg?v=1656493262",
        alt:"imgJabon"
    },
    {
        id: 4,
        name: "Jabon 4",
        category: "jabones",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quibusdam impedit explicabo amet",
        stock: 10,
        price: 200,
        img: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/04/recetas-de-jabones-artesanales-igoriss.jpg",
        alt:"imgJabon"
    },
    {
        id: 5,
        name: "Vela 1",
        category: "velas",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quibusdam impedit explicabo amet",
        stock: 5,
        price: 200,
        img:"https://todoparafina.online/wp-content/uploads/2020/11/Curso-Elaboracion-Velas-Artesanales.jpg",
        alt:"imagenVela"
    },
    {
        id: 6,
        name: "Vela 2",
        category: "velas",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quibusdam impedit explicabo amet",
        stock: 5,
        price: 200,
        img:"https://gemmagonzalezevents.com/wp-content/uploads/2019/11/velas-peras.jpg",
        alt:"imagenVela"
    },
    {
        id: 7,
        name: "Vela 3",
        category: "velas",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quibusdam impedit explicabo amet",
        stock: 5,
        price: 200,
        img:"https://www.decoracionia.net/imagenes/2014/06/velas-artesanales-8.jpg",
        alt:"imagenVela"
    },
    {
        id: 8,
        name: "Vela 4",
        category: "velas",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quibusdam impedit explicabo amet",
        stock: 5,
        price: 200,
        img:"https://i.pinimg.com/474x/14/5d/f3/145df3ab01920b9bbd4ad83df8122e42.jpg",
        alt:"imagenVela"
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