let express = require('express')
let categoryRouter = express.Router();
const {getData} = require('./dbcontoller')


function router(menu){
    categoryRouter.route('/')
    .get(async(req,res)=>{
        let query = {};
        let data = await getData('category',query)
        res.render('category',{title:'Category Page',data:data,menu})
    })

categoryRouter.route('/details')
    .get(function(req, res){
        res.send('This is from Category Details')
    })

    return categoryRouter
}



module.exports = router

