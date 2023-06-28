const urlClientes = "http://localhost/clase2/backend/controller.php?op=GetAll"
const utlNuevocliente = "http://localhost/clase2/backend/controller.php?op=insert"

export const getClientes = async () =>{
    try {
        const clientes = await fetch(urlClientes);
        const datosClientes = clientes.json();
    return datosClientes
    } catch (error) {
        console.log(error);
    }
    
}

export const nuevoCliente = async (registrar) =>{
    try {
        await fetch(utlNuevocliente,{
            method: "POST",
            body:JSON.stringify(registrar),
            headers:{
                'Content-Type':'application/json'
            }
        })
    } catch (error) {
        
    }
}