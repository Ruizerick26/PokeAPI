let url = "https://jsonplaceholder.typicode.com/users";

const obtenerUsaurios = async () => {
    try{
        let Response = await fetch(url);
        if(!Response.ok){
            throw new Error ("Ocurrio un Error al realizar la peticion");
        }
        let data = await Response.json();
        pintarUsuarios(data);
    }catch(error){
        console.log(error);
    }
}
obtenerUsaurios();

const pintarUsuarios = (data) => 
{
    let body = "";
    for (let i = 0; i < data.length; i++){
        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
    }
    document.getElementById("data").innerHTML = body;
}