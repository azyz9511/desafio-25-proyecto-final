const productoService = require('../services/productoService');

const productoController = {
    addProduct :  async (req, res) => {
            try{
                await productoService.addProductService(req.body,req.file);
                res.redirect('/productos');
            }catch(e){
                console.log(`Ha ocurrido el siguiente error: ${e}`);
            }
        },
    getProducts : async (req, res) => {
            try{
                let productos;
                let filt = null;
                if(req.query.filtro){
                    productos = await productoService.findByCategoryService(req.query.filtro);
                    filt= req.query.filtro;
                }else{
                    productos = await productoService.getProductsService();
                }
                res.render('pages/productos',{productos, filt});
            }catch(e){
                console.log(`Ha ocurrido el siguiente error: ${e}`);
            }
        },
    getProductById : async (req, res) => {
            try{
                const data = await productoService.getProdByIdService(req.params.id);
                res.send(data)
            }catch(e){
                console.log(`Ha ocurrido el siguiente error: ${e}`);
            }
        },
    updateProduct : async (req, res) => {
            try{
                const data = await productoService.updateProductService(req.body, req.file);
                res.redirect('/productos');
            }catch(e){
                console.log(`Ha ocurrido el siguiente error: ${e}`);
            }
        },
    deleteProduct : async (req, res) => {
            try{
                const id = req.params.id;
                const data = await productoService.deleteProductService(id);
                res.redirect('/productos');
                return data;
            }catch(e){
                console.log(`Ha ocurrido el siguiente error: ${e}`);
            }
        },
    findByCategory : async (req, res) => {
            try{
                const filtro = req.params.filtro;
                const data = await productoService.findByCategoryService(filtro);
                res.send(data);
                return data;
            }catch(e){
                console.log(`Ha ocurrido el siguiente error: ${e}`);
            }
        }
}

module.exports = productoController;