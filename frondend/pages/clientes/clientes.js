import { getClientes,nuevoCliente } from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargarClientes();
})

async function cargarClientes(){

    const clientes = await getClientes();
    const tablaClientes = document.querySelector('#datosClientes')
    console.log(clientes);
    clientes.forEach(element => {
        const {id_constructora,nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto} = element
        tablaClientes.innerHTML+=`
        <tr>
            <th scope="row">${id_constructora}</th>
            <th>${nombre_constructora}</th>
            <th>${nit_constructora}</th>
            <th>${nombre_representante}</th>
            <th>${email_contacto}</th>
            <th>${telefono_contacto}</th>
        </tr>
        `
    });
    
}
const formulario = document.getElementById('registrar');
formulario.addEventListener('submit',nuevoClientes)
function nuevoClientes(e){
    e.preventDefault();

    const id_constructora = document.querySelector('#id_constructora').value
    const nombre_constructora = document.querySelector('#nombre_constructora').value
    const nit_constructora = document.querySelector('#nit_constructora').value
    const nombre_representante = document.querySelector('#nombre_representante').value
    const email_contacto = document.querySelector('#email_contacto').value
    const telefono_contacto = document.querySelector('#telefono_contacto').value

    const registro={
        id_constructora,
        nombre_constructora,
        nit_constructora,
        nombre_representante,
        email_contacto,
        telefono_contacto
    }
    if(validation(registro)){
        alert ("Todos los datos son obligatorios");
    }return nuevoCliente(registro);
}

function validation(Objeto){
    return !Object.values(Objeto).every(element=>element !=='');
}