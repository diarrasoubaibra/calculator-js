var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');
for(item of btn){
    
    item.addEventListener('click',(e)=>{
        
       var btnText = e.target.innerText;
       console.log(e)
        if(btnText == 'x'){
            btnText = '*';
        }
        if(btnText == '÷'){
            btnText = '/';
        }
        
        screen.value += btnText;
    })
} 

function percent(){
    screen.value = screen.value/100;
}

function sin(){
    screen.value= Math.sin(screen.value);
}

function cos(){
    screen.value= Math.cos(screen.value);
}

function tan(){
    screen.value= Math.tan(screen.value);
}

function pow(){
    screen.value= Math.pow(screen.value,2);
}

function sqrt(){
    screen.value= Math.sqrt(screen.value,2);
}

function log(){
    screen.value= Math.log(screen.value);
}

function pi(){
    screen.value= 3.141592653589793;
}

function ex(){
    if(screen.value=="") {
        screen.value= 2.718281828459045;
    } else {
screen.value=Math.exp(screen.value) ;
    }
    
    
}

function fact(){
    var i , num, f;
    f = 1;
    num= screen.value;
    for(i=1; i<=num; i++){
        f = f*i;
    }
    screen.value=f;
}

function backspc(){
    screen.value= screen.value.substr(0,screen.value.length-1);
}