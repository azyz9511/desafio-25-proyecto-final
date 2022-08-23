const Usuario = require('../database/daos/usuarioDao');
const usuario = new Usuario();

const producto = require('../database/daos/productoDao');

const car = require('../services/carritoService');

const index = async (req, res) => {
    if(req.isAuthenticated()){
        const email = req.session.passport.user;
        const user = await usuario.findUser(email);
        const products = await producto.getProducts();
        const carrito = await car.listCarService(1);
        res.render('pages/index',{user, products, carrito});
    }else{
      res.redirect('/login');
    }
}

module.exports = index;