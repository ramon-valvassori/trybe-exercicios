const currentHour = 10;
let message ='';

if (currentHour >= 22){
    console.log("Não deveríamos comer nada, é hora de dormir")
}

else if (currentHour >= 18 && < 22){
    console.log("Rango da noite, vamos jantar :D")
}

else if (currentHour >= 14 && < 18){
    console.log("Vamos fazer um bolo pro café da tarde?")
}

else if (currentHour >= 11 && < 14){
    console.log("Hora do almoço!!!")
}

else (currentHour >=4 && < 11){
    console.log("Hmmm, cheiro de café recém-passado")
}

