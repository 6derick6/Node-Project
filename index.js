const express = require('express');
const path = require('path');

const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

var tarefas = ['Arrumar a casa','Finalizar curso de JS'];

app.get('/',(req,res)=>{

    res.render('index',{tarefasList:tarefas});

});

app.get('/deletar/:id',(req,res)=>{
    tarefas = tarefas.filter(function(val,index){
            if(index != req.params.id){
                return val;
            }
    })
    res.render('index',{tarefasList:tarefas});
})

app.listen(4000,()=>{
    console.log('servidor rodando!');
})