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
