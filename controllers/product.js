const { query } = require("express");
const mongoose = require("mongoose")
const Product = require("../models/product")

const getAllProducts = async (req, res) => {
    
    // let page = Number(req.body.page) || 1;
    // let limit = Number(req.body.limit) || 3;

    // let skip = (page - 1) * limit;

    // apiData = apiData.skip(skip).limit(limit);

    const { company, name, featured, sort, select, } = req.query;

    const queryObject = {};

    if (company) {
        queryObject.company = company;
    }
    if (featured) {
        queryObject.featured = { regex: name, $option: "i" };
    }
    let apiData = Product.find(req.query)
    if (select) {
        let selectFix = select.split(",").join();
        apiData = apiData.select(selectFix)
    }
    if (sort) {
        let sortFix = sort.split(",").join();
        apiData = apiData.sort(sortFix)
    }

    if (name) {
        queryObject.name = { regex: name, $option: "i" };
    }



    console.log(queryObject);
    const myData = await apiData;
    res.status(200).json({ myData, nbHits: myData.length });
}

const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find(req.query)
    res.status(200).json({ myData })
}

module.exports = { getAllProducts, getAllProductsTesting }

    // UBG2FU0ykNfkoRBY
    // learnAPI