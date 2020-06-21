var Get,Flag;

function init() { 
    Get = document.getElementsByTagName("img");
    Flag=true; //true O false X
}


function num(i) {
    if(Get[i].alt !='OX'){ return alert("不能下這") ;}
    if(Flag){
        Get[i].src = 'sharpGame/cat.jpg';
        Get[i].alt = 'O';
    }else{
        Get[i].src = 'sharpGame/dog.jpg';
        Get[i].alt = 'X';
    }
    checkWinner();
    Flag = !Flag;
}

function checkWinner(){
    if(Get[0].alt+Get[1].alt+Get[2].alt == 'OOO') {alert('cat win!')};
    if(Get[3].alt+Get[4].alt+Get[5].alt == 'OOO') {alert('cat win!')};
    if(Get[6].alt+Get[7].alt+Get[8].alt == 'OOO') {alert('cat win!')};
    if(Get[0].alt+Get[3].alt+Get[6].alt == 'OOO') {alert('cat win!')};
    if(Get[1].alt+Get[4].alt+Get[7].alt == 'OOO') {alert('cat win!')};
    if(Get[2].alt+Get[5].alt+Get[8].alt == 'OOO') {alert('cat win!')};
    if(Get[0].alt+Get[4].alt+Get[8].alt == 'OOO') {alert('cat win!')};
    if(Get[2].alt+Get[4].alt+Get[6].alt == 'OOO') {alert('cat win!')};

    if(Get[0].alt+Get[1].alt+Get[2].alt == 'XXX') {alert('dog win!')};
    if(Get[3].alt+Get[4].alt+Get[5].alt == 'XXX') {alert('dog win!')};
    if(Get[6].alt+Get[7].alt+Get[8].alt == 'XXX') {alert('dog win!')};
    if(Get[0].alt+Get[3].alt+Get[6].alt == 'XXX') {alert('dog win!')};
    if(Get[1].alt+Get[4].alt+Get[7].alt == 'XXX') {alert('dog win!')};
    if(Get[2].alt+Get[5].alt+Get[8].alt == 'XXX') {alert('dog win!')};
    if(Get[0].alt+Get[4].alt+Get[8].alt == 'XXX') {alert('dog win!')};
    if(Get[2].alt+Get[4].alt+Get[6].alt == 'XXX') {alert('dog win!')};
}
