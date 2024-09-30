import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const createProduct = (req,res)=>{
    const product = req.body;
    if(!product.name || ! !product.price || !product.image){
        return res.status(400).json({success:false, message:"Please provide all fields"})
    }

    const newProduct = new Product(product)

    try{
        newProduct.save()
        return res.status(201).json({success:true,message:"Added successfully",data:newProduct})
    }
    catch(err){
        console.log("Error while save product : ",err);
        res.status(500).json({success:false, message:"Server Error"}) 
    }
    
}

export const updateProduct  = async (req,res)=>{
        const {id} = req.params
        const product = req.body
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({success:false,message:"No Item Found"})
        }
        try{
            const updated = await Product.findByIdAndUpdate(id,product,{new:true})
            return res.status(200).json({success:true,data:updated})
        }
        catch(error){
            return res.status(404).json({success:false})
        }

}


export const getProducts = async(req,res)=>{
    try{
        const allProducts =  await Product.find({})
        res.status(200).json({success:true,data: allProducts})
    }
    catch(error){
        res.status(500).json({success:false,message:"Server Error"})
    }
}

export const deleteProduct = async(req,res) =>{
    
    const { id } = req.params
    try{
        await Product.findByIdAndDelete(id)
        res.status(200).json({success:true,message:"Item deleted successfully"})
    }
    catch(error){
        console.log("Error while deleting item : ",error)
        res.status(404).json({success:false,message:"Product Not Found"})
    }
}