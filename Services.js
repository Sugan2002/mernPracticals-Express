const express = require ('express')
const router = express.Router()

router.get('/', (request,response) => {
    response.send("Service Page")
})


router.get('/:id',(request,response)=>{
    if(request.params.id==1){
        response.send("Painting")}
    else if(request.params.id==2){
        response.send("Drawing")}
    else if(request.params.id==3){
        response.send("Sketching")}
    else if(request.params.id==4){
        response.send("Pencil Carving")}
    else if(request.params.id==4){
        response.send("Wall Painting")}
    else if(request.params.id==4){
        response.send("Oil Painting")}
    else{
        response.send(`Service with this ID is not found.. Sorry!!!`)
    }
})


module.exports = router