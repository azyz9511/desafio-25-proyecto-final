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
            try{
                const data = await mensajeController.getMesService();
                return data;
            }catch(e){
                console.log(`Ha ocurrido el siguiente error: ${e}`);
            }
        }
}

module.exports = mensajeController;