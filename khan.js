import s from './img/tow.jpg';

const b = ()=>{
    let ss = document.createElement('img');
    ss.src = s;
    document.body.appendChild(ss);
}

export default b;