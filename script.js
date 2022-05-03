let a = '';

function getData(e) {
    a = e.target.value;
    console.log(a);
}

function str() {
    if(a.length !== 0) {
        localStorage.setItem('name', JSON.stringify(a));
    }
}

function greet() {
    let d = JSON.parse(localStorage.getItem('name'));
    if (d != null) {
        console.log(`Hi my name is ${d}`);
    }
    else {
        console.log('no user key found');
    }
}

function rmv() {
    localStorage.removeItem('name');
}

greet(a);