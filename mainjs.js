// створення масиву з користувачами та відправка в локальне сховище
let form = document.forms[0];
form.onsubmit = function () {
    let user = this.user.value;
    let userclear = user.replaceAll(' ', '');
    let userarray = userclear.split('=');
    let name = userarray[0];
    let value = userarray[1];
    let uobj = {name:userarray[0], value:userarray[1]};
    if (!!name.match(/[a-zA-Z1-9]/g) && !!value.match(/[a-zA-Z1-9]/g) && userarray.length < 3) {
        let userslist = JSON.parse(localStorage.getItem('userlist')) || [];
        userslist.push(uobj);
        localStorage.setItem('userlist', JSON.stringify(userslist));
    }
    // виведення списку користувачів
}
let list = document.getElementById(1);
let array = JSON.parse(localStorage.getItem('userlist'));
for (const user of array) {
    let div = document.createElement("div")
    list.appendChild(div);
    div.innerText = user.name+'='+user.value;
}

// сортування користувачів за імям
let suname = document.getElementById(2);
suname.onclick = function () {
    list.innerText = '';
   let nsort = array.sort((a, b) => {
       if (a.name > b.name) {
           return 1;
       }
       if (a.name < b.name) {
           return -1;
       }
       if (a.name === b.name) {
           return 0;
       }
   })
    for (const nsort of array) {
        let div = document.createElement("div")
        list.appendChild(div);
        div.innerText = nsort.name+'='+nsort.value;

    }
}
// сортування користувачів за значенням
let suvalue = document.getElementById(3);
suvalue.onclick = function () {
    list.innerText = '';
    let vsort=array.sort((a, b) =>
    {
        if (a.value > b.value) {
            return 1;
        }
        if (a.value < b.value) {
            return -1;
        }
        if (a.value === b.value) {
            return 0;
        }
    })
    for (const vsort of array) {
        let div = document.createElement("div");
        list.appendChild(div);
        div.innerText = vsort.name+'='+vsort.value;
    }
}

// видалення списку
let clen = document.getElementById(4);
clen.onclick = function () {
    localStorage.clear();
    list.innerText = '';
}