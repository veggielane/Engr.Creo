///<reference path='includes.ts'/>


window.onload = () => {
    var creo = new Creo.Connect();
    var session = creo.session;
    alert(creo.version);
};