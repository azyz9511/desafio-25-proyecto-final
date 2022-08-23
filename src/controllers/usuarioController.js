const mongoose = require('mongoose');
const usuarioSchema = require('../database/models/usuarioSchema');
const bCrypt = require('../utils/bcryptPass');
require('dotenv').config();

class Usuario{
    
    constructor(){
        
    }

    async connectDB(){
        try{
            const URL = process.env.URLDB;
            let connect = await mongoose.connect(URL,{
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        }catch (e){
            console.log(e);
        }
    }
    
    async addUser(user){
        try{
            const newUser = {
                email: user.username,
                nombre: user.nombre,
                numTel: user.numtel,
                password: await bCrypt.encryptPass(user.password)
            };
            await this.connectDB();
            await usuarioSchema.create(newUser);
            mongoose.disconnect();
        }catch (e){
            console.log(`Ha ocurrido el siguiente error: ${e}`);
        }
    }
    
    async findUser(username){
        try{
            await this.connectDB();
            const user = await usuarioSchema.findOne({email: username});
            mongoose.disconnect();
            return user;
        }catch (e){
            console.log(`Ha ocurrido el siguiente error: ${e}`);
        }
    }

    async findUserLogin(username,password){
        try{
            await this.connectDB();
            const user = await usuarioSchema.findOne({email: username});
            mongoose.disconnect();
            if(user && (await bCrypt.validarPass(user,password))){
                return user;
            }else{
                return null;
            }
        }catch (e){
            console.log(`Ha ocurrido el siguiente error: ${e}`);
        }
    }

}

module.exports = Usuario;