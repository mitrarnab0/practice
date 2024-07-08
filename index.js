const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const catchAsync = require('./utils/catchAsync');
const Number = require('./utils/schema');
const methodOverride = require('method-override');


const app = express();

app.use(express.static(path.join(__dirname, 'assets')))

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/pf');
    console.log('\t Mongoose connected');
}
main().catch(e => console.log(e));


app.get('/', async (req, res) => {
    const products = await Number.find({});
    res.render('index', { products });
    // res.send({ products })
});

app.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Number.findById(id);
    const likedNumb = product.likedNumb + 1;

    const newUpdate = await Number.findByIdAndUpdate(id, { likedNumb });
    // res.send({ newUpdate })
    res.redirect('/');
    console.log({ newUpdate })
})


app.get('*', (req, res) => {
    res.send('wrong page');
})

// listening 
app.listen('3000', () => console.log('\t Listening on port :3000'))