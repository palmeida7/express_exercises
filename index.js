const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

//Init middleware
//app.use(logger);

// app.get('/', (req,res)=>{
//     res.send('<h1>Hello Today, World!!!</h1>')
// });

// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname,'public', 'index.html'))
// });


//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Animals API Routes
app.use('/api/animals', require('./routes/api/animals'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));