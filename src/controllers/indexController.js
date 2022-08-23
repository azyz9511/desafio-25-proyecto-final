const Usuario = require('../database/daos/usuarioDao');
const usuario = new Usuario();

const producto = require('../services/productoService');
const car = require('../services/carritoService');

const index = async (req, res) => {
    if(req.isAuthenticated()){
        const email = req.session.passport.user;
        const user = await usuario.findUser(email);
        const carrito = await car.listCarService(email);

        let productos;
        let filt = null;
        if(req.query.filtro){
            productos = await producto.findByCategoryService(req.query.filtro);
            filt= req.query.filtro;
        }else{
          productos = await producto.getProductsService();
        }
        
        res.render('pages/index',{user, productos, filt, carrito, email});
    }else{
      res.redirect('/login');
    }
}

module.exports = index;