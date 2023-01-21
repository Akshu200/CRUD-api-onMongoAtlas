const express = require('express')
const details = require('../models/userModels')
const router = express.Router();

// fetching ID
router.get('/',async(req,res)=>{

    const result=await details.find();
    res.json(result);
})

//single id fetching
router.get("/:userId",async(req, res)=>{
   const result = await details.findById(req.params.userId)

   res.json(result)
})


// creating
router.post('/',async(req, res)=>{

    const result =await details.create(req.body)
    res.json(result);
})
//updating 

router.put('/:userId',async(req, res)=>{

    const final = req.params.userId

    try {
       const result = await details.updateOne({
            "_id":final
        },
        req.body)
        res.json(result);
        
    } catch (error) {
        console.log(error);
    }

})
//deleting id
router.delete('/:userID',async(req, res)=>{

    const final = req.params.userID
    try {
      const r= await details.deleteOne({_id:final})
       res.json({
        message:`Detlted user ID :${r}` 
       })
        
    } catch (error) {
        console.log(error)
    }

})

module.exports = router;