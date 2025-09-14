const express = require('express');
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');


app.use(express.static('./methods-public'));

app.use(express.urlencoded({extended: false}))

app.use(express.json());

app.use('/api/people', people )
app.use('/login', auth )


app.get('/api/people', (req,res)=>{
    res.status(200).json({success: true , data: people})
});



app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...');
});
//6:30
