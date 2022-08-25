
if(filtroChecked == 'all' || filtroChecked == null){
    document.getElementById('all').checked = true;
}else{
    document.getElementById(filtroChecked).checked = true;
}

async function filtroCat(filtro){
    window.location.href = `/?filtro=${filtro}`;
}

async function sendPedido(){
    const fyh = new Date();
    const orden = { 
        id: 0,
        fyh: `${fyh.getDate()}/${(fyh.getMonth() + 1)}/${fyh.getFullYear()} ${fyh.getHours()}:${fyh.getMinutes()}:${fyh.getSeconds()}`,
        estado: 'Generada',
        emailUser: email,
        productos: []
    };

    await axios.get(`/productos`);
    // render(response.data);
}



// pedido.addEventListener('submit',(e) => {
//     e.preventDefault();
//     const fyh = new Date();
//     const orden = { 
//         id: 0,
//         fyh: `${fyh.getDate()}/${(fyh.getMonth() + 1)}/${fyh.getFullYear()} ${fyh.getHours()}:${fyh.getMinutes()}:${fyh.getSeconds()}`,
//         estado: 'Generada',
//         emailUser: email,
//         productos: carrito.productos
//     };
//     console.log(orden);
// });
