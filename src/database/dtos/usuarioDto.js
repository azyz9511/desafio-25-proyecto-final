
class UsuarioDto{
    constructor(data){
        this.nombre = data.nombre;       
        this.email = data.email;       
        this.numTel = data.numTel;       
    }
}

module.exports = UsuarioDto;