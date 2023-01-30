const express = require("express")
const Item = require("../models/itemModel")
const mongoose = require("mongoose")

const getItems = async (req, res) => {
    const items = await Item.find({}).sort({createdAt:-1})
    res.status(200).json(items)
};

const getItem = async (req, res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error:"Invalid Id!"})
  }
  const item = await Item.findById(id)

  if(!item){
    return res.status(400).json({error:"Item doesn't exists"})
  }
  res.status(200).json(item);
};

const createItem = async (req, res) => {
    const {title,quantity,price} = req.body
    let emptyFields = []

    if(!title){
        emptyFields.push('title')
    }
    if(!quantity){
        emptyFields.push('quantity')
    }
    if(!price){
        emptyFields.push('price')
    }

    try{
        const item = await Item.create({title,quantity,price})
        res.status(200).json(item)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }

};


const deleteItem = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({mssg:"No such item available"})
    }

    const item = await Item.findOneAndDelete({_id:id})
    if(!item){
        return res.status(400).json({error:"No such item!"})
    }
    res.status(200).json(item)
}

const updateItem = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({mssg:"No such workout available"})
    }
    const item = await Item.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!item){
        return res.status(400).json({error:"No such workout"})
    }
    res.status(200).json(item)

}
module.exports = {
  createItem,
  getItems,
  getItem,
  deleteItem,
  updateItem,
};
