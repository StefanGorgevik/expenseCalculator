const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js'
      },

    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 8080,
        historyApiFallback: true
      },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [ "babel-loader","source-map-loader"]
        },
        {
          test:/\.css$/,
          use:['style-loader','css-loader']
        }  
      ]
    }  
};

const mongoose = require('mongoose') 

mongoose.connect('mongodb+srv://stefan_gg:furious7@cluster0-ptuut.mongodb.net/expenses?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err)
    })

const Product = mongoose.model(
    "product", new mongoose.Schema({
        name: String,
        type: String,
        description: String,
        date: Date,
        price: Number
    },
        {
            collection: "products"
        })
)

const prod = new Product({
    name: "Coca-Cola",
    type: "Drink",
    description: "Carbonated soft drink",
    date: new Date("2019-04-19T00:00:00Z"),
    price: 75
})

prod.save(err => {
    if(err){
        console.log(err);
        return;
    }
    console.log("product saved")
})