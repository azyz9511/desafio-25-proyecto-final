const socket = io();

const sendMess = document.getElementById('sendMess');
const texto = document.getElementById('texto');
const divMensajes = document.getElementById('mensajes');

sendMess.addEventListener('submit',(e) => {
    e.preventDefault();
    const fyh = new Date();
    const mensaje = { 
        id: 0,
        email: email,
        tipoUser: '',
        fyh: `${fyh.getDate()}/${(fyh.getMonth() + 1)}/${fyh.getFullYear()} ${fyh.getHours()}:${fyh.getMinutes()}:${fyh.getSeconds()}`,
        text: texto.value
    };

    socket.emit('nuevoMensaje', mensaje);
    socket.on('historialGlobal',data => {
        render(data);
    });
    texto.value = '';
});

socket.on('historialChat', data => {
    if(data.length !== 0){
        render(data);
    }else{
        divMensajes.innerHTML = '';
        formChat.reset();
    }
});

function render(data){
    let color = '';
    const html = data
        .map((elem, index) => {
            let admin = '';
            let user = elem.email;
            if(elem.tipoUser == 'Administrador'){
                admin = 'Administrador';
                user = '';
            }
            return `<div>
                <span style="color: blue">${user}<b>${admin}</b></span>
                <span>[${elem.fyh}] : </span>
                <b><i>${elem.text}</i></b>
            </div><br>`
        })
        .join(' ');
        divMensajes.innerHTML = html;
}