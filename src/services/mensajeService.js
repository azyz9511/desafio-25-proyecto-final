const mensajeDao = require('../database/daos/mensajeDao');

const mensajeService = {
    newMesService : async (mensaje) => {
            try{
                const data = await mensajeDao.addMessage(mensaje);
                return data;
            }catch(e){
                console.log(`Ha ocurrido el siguiente error: ${e}`);
            }
        },
    getMesService : async () => {
            try{
                const data = await mensajeDao.readMessages();
                return data;
            }catch(e){
                console.log(`Ha ocurrido el siguiente error: ${e}`);
            }
        }
}

module.exports = mensajeService;