let express = require('express');
let app = express();
const {dbConnect} = require('./src/controller/dbcontoller')

let port = 1234;

let menu = [
    {link:"/",name:'Home'},
    {link:"/category",name:'Category'},
    {link:"/products",name:'Products'}

]

let categoryRouter = require('./src/controller/CategoryRouter')(menu);
let productRouter = require('./src/controller/ProductRouter')(menu);

app.use(express.static(__dirname+'/public'))
app.set('views','./src/views')
app.set('view engine','ejs')

app.get('/',function(req,res){
    res.render('index',{title:'Home Page',menu})
})


app.use('/category',categoryRouter)
app.use('/products',productRouter)
app.use()


app.listen(port, function(err){
    dbConnect()
    if(err) throw err;
    console.log("Server is successfully running on port:"+port)
})

