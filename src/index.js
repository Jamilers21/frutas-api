const express= require("express")
const server= express();

server.listen(3000,()=>{

    console.log("Olá, mundo")

});

server.get("/pseudofrutos", (_,response) =>{
    response.json([
        {
            name: "Morango",
            type:"pseudofruto",

        },
        {
            name:"Maçã",
            type:"pseudofruto",

        }
    ])
})

server.get("/bagas", (_,response) => { 
 response.json([
   { name:"Laranja", type: "baga"},
   { name:"Banana", type:"baga"},
 ])
})

server.get("/frutos-secos",(_,response) =>{
 response.json([
    {name:"Noz", "type": "fruto seco"},
    {name:"Amendoa", "type": "fruto seco"},
 ]) 
})
