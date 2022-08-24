const mensajeService = require('../services/mensajeService');

const mensajeController = {
    newMessage : async (req, res) => {
            try{
                const data = await mensajeService.newMesService(req.body);
                return data;
            }catch(e){
                console.log(`Ha ocurrido el siguiente error: ${e}`);
            }
        },
    getMessages : async (req, res) => {
            if(req.isAuthenticated()){
                try{
                    const email = req.session.passport.user;
                    const data = await mensajeService.getMesService();
                    res.render('pages/mensajes',{data, email});
                    return data;
                }catch(e){
                    console.log(`Ha ocurrido el siguiente error: ${e}`);
                }
            }else{
                res.redirect('/login');
            }
        }
}

module.exports = mensajeController;