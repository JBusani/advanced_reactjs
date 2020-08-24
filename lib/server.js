import express from 'express';
import { port } from './config';
import serverRender from '../lib/renderers/server';

const app = express();

app.use(express.static('public'));

//we also need to configure express to use ejs as its template language
app.set('view engine', 'ejs');

//prepare the / endpoint, we'll render the index template
//we can also pass variables here next to index
app.get('/', (req,res) => {
    const initialContent = serverRender();
    res.render('index', {initialContent});
});

app.listen(port, function listenHandler(){
    console.info(`Running on port ${port}...`)
});

//changed res.render('index', {answer:42} ), for server side render