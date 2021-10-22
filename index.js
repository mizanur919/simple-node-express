const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Only Hello')
});

const users = [
    {id: 1, name:"Milon", email: "milon@gmail.com"},
    {id: 2, name:"Hasan", email: "Hasan@gmail.com"},
    {id: 3, name:"Mahmud", email: "mahmud@gmail.com"},
    {id: 4, name:"Niloy", email: "niloy@gmail.com"},
    {id: 5, name:"Jahid", email: "jahid@gmail.com"},
    {id: 6, name:"Millat", email: "millat@gmail.com"}
]

app.get('/users', (req, res) =>{
    const search = req.query.search;
    if(search)
    {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
})

// app.METHOD
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting post method', req.body);
    //res.send(JSON.stringify(newUser));
    res.json(newUser);
})

app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/friends/dhaka/mirpur', (req, res) => {
    res.send(['Minhaz', 'Jilani', 'Hossain']);
})

app.listen(port, () =>{
    console.log('Listening to port ', port);
})