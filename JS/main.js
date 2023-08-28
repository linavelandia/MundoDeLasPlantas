//const resgistro = require('../jsRouter/registroRouter');

const cartShopping = document.getElementById('carShopping')
const aside = document.getElementById('asideCar')

cartShopping.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside(){
    console.log(aside)
    aside.classList.toggle('block');

}


//window.addEventListener('load')

/*function routerApi(app){
    app.use('/registro', resgistro);
}
*/
//module.exports = routerApi;

