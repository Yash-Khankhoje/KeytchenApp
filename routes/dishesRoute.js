const express = require("express");
const router = express.Router();
const Dish = require('../models/dishModel')

router.get("/getalldishes", async(req, res) => {
  
    try {
        const dishess = await Dish.find({})
        res.send(dishess)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/adddish", async(req, res) => {

    const dish = req.body.dish

   try {
    const newdish = new Dish({
        name : dish.name,
        image :dish.image,
        description : dish.description,
        category : dish.category,
        price : dish.price
    })
    await newdish.save()
    res.send('New Dish Added Successfully')
   } catch (error) {
       return res.status(400).json({ message: error });
   }
  
});

router.post("/getdishbyid", async(req, res) => {

 const dishid = req.body.dishid

 try {
     const dish = await Dish.findOne({_id : dishid})
     res.send(dish)
 } catch (error) {
     return res.status(400).json({ message: error });
 }
  
});

router.post("/editdish", async(req, res) => {

    const editeddish = req.body.editeddish

    try {
        const dish = await Dish.findOne({_id : editeddish._id})
        
        dish.name= editeddish.name,
        dish.description= editeddish.description,
        dish.image= editeddish.image,
        dish.category=editeddish.category,
        dish.price = editeddish.prices

        await dish.save()

        res.send('dish Details Edited successfully')

    } catch (error) {
        return res.status(400).json({ message: error });
    }
  
});

router.post("/deletedish", async(req, res) => {

    const dishid = req.body.dishid

  try {
    await Dish.findOneAndDelete({_id : dishid})
    res.send('Dish Deleted successfully')
  } catch (error) {
      return res.status(400).json({ message: error });
  }
  
});




module.exports = router;
