const express=require('express')
const router = express.Router()
    
    
    
    const lisOfService=[
            {
                "id":1,
    
                "Name":"Painting"
    
            },
            {
                "id":2,
    
                "Name": 'Sketching'
            },
            {
                "id":3,
    
                "Name": 'Oil Painting'
            },
            {
                "id":4,
    
                "Name": 'Pencil Carving'
            },
            {
                "id":5,
    
                "Name": 'Wall Painting'
            },
    
        ]
    
    
    
    router.get('/:id',(request,response)=>{
        const serviceId=Number(request.params.id);
        const getService=lisOfService.find((service) => service.id===serviceId)
    
        if(!getService){
            response.status(500).send("Expected not found")
            console.log(request.params.id)
        }
        else{
            response.json(getService.Name)
        }
    })
    
    
    
    module.exports=router