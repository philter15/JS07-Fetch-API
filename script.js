const apiUrl = 'https://reqres.in/api/users?delay=3';

const fichas = document.getElementById('fichas');

getUsers(apiUrl);

function getUsers(url) {
    fetch(url).then(res => res.json()).then(datas =>{
        newUser(datas.data);
    })
    
}

function newUser(ficha) { 
    fichas.innerHTML = '';

    ficha.forEach(user => {
        const {id,email,first_name,last_name,avatar,title} = user;
        const userElement = document.createElement('div');
        userElement.classList.add('usuario');
        userElement.innerHTML = `
        <div class="col">
                <div class="avatar"> 
                <img src="${avatar} " alt="${title}">
                </div>
                <div>
                    <h4 >"Id:${id}"</h4>
                    <h5 >"Nombre: ${first_name}"</h5>
                    <h5 >"Apellido:${last_name}"</h5>
                    <h5 >"Email: ${email}"</h5>
                </div>
        </div>
        `
    fichas.appendchild(userElement);
    });
}