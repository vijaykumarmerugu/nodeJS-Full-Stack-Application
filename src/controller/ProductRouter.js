let express = require('express')
let productRouter = express.Router();
let {getData} = require('./dbcontoller')



function router(menu){
productRouter.route('/')
    .get(async(req, res)=>{
        let query ={};
        let products = await getData('product', query)
        res.render('product',{title:'Products Page',products,menu})
    })

productRouter.route('/details')
    .get(function(req, res){
        res.send('This is from Product details')
    })

    return productRouter
    
}


module.exports = router