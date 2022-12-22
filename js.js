const result=document.querySelector(".result");
const egale=document.querySelector(".opp-egale");
const one=document.querySelector(".opp-11");
const two=document.querySelector(".opp-22");
const three=document.querySelector(".opp-33");
const four=document.querySelector(".opp-44");
const five=document.querySelector(".opp-55");
const six=document.querySelector(".opp-66");
const seven=document.querySelector(".opp-77");
const eight=document.querySelector(".opp-88");
const nine=document.querySelector(".opp-99");
const reset=document.querySelector(".opp-reset");
const del=document.querySelector(".opp-del");
const pluss=document.querySelector(".opp-pluss");
const moin=document.querySelector(".opp-moin");
const fois=document.querySelector(".opp-fois");
const point=document.querySelector(".opp-point");
const sur=document.querySelector(".opp-sur");
const zero=document.querySelector(".opp-00");
const negative=document.querySelector(".negative");
const mode1=document.querySelector("#mode1");
const mode2=document.querySelector("#mode2");
const mode3=document.querySelector("#mode3");
const changer=document.querySelector(".theme-change");

changer.addEventListener("click",()=>{
    if(document.querySelector(".theme-circle").style.left=="2px"){
        mode_2();
        console.log(1);
    }
    else{
        if(document.querySelector(".theme-circle").style.left=="19px"){
            mode_1();
            console.log(3);
        }
        if(document.querySelector(".theme-circle").style.left=="10px"){
            mode_3();
            console.log(2);
        }
        
    }
    
});
var mode=localStorage.getItem('modee')||('1');
console.log(mode);
window.onload=()=>{result.value=0;
    value=519.2;
    valuee=0;
    variable="";
    t.length=0;
    function apply_mode(){
        if(mode=="1"){mode_1()}
        if(mode=="2"){mode_2()}
        if(mode=="3"){mode_3()}
    }
    apply_mode();
    console.log(mode);
}
var i=0;
var variable="";
function apply_mode(){
    if(mode=="1"){mode_1();}
    if(mode=="2"){mode_2()}
    if(mode=="3"){mode_3()}
}



const t=[];  
mode1.addEventListener("click",()=>{mode_1()});
mode2.addEventListener("click",()=>{mode_2()});
mode3.addEventListener("click",()=>{mode_3()});



function mode_1(){
document.querySelector(".theme-circle").style.background="#3B4664";
document.querySelector("body").style.background="#3B4664";
document.querySelector(".calc-op").style.background="#181F32";
document.querySelector(".calc-sign").style.background="#252D44";
document.querySelector(".opp-egale").style.background="#F96C5B"; 
document.querySelector("#calc").style.color="black";  
document.querySelector(".opp-reset").style.background="#A2B3E1";
document.querySelector(".opp-del").style.background="#A2B3E1";
document.querySelector("#ppp").style.background="#EAE3DB";
document.querySelector(".opp-77").style.background="#EAE3DB";
document.querySelector(".result").style.background="#181F32";
document.querySelector(".theme-circle").style.left="2px";
document.querySelector(".opp-egale").style.borderBottom="#88271E solid"; 
document.querySelector("#theme").style.color="black";
document.querySelector("h").style.color="black";
document.querySelector("h1").style.color="black";
document.querySelector("h2").style.color="black";
document.querySelector(".result").style.color="black";
document.querySelector("#calc").style.color="white";
localStorage.setItem('modee','1');
}
function mode_2(){
    document.querySelector(".theme-circle").style.background="#D47437";
    document.querySelector("body").style.background="#E6E6E6";
    document.querySelector(".calc-op").style.background="#EEEEEE";
    document.querySelector(".calc-sign").style.background="#D3CDCD";
    document.querySelector(".opp-egale").style.background="#FF8B38"; 
    document.querySelector("#calc").style.color="black";
    document.querySelector(".opp-egale").style.borderBottom="#88271E solid"; 
    document.querySelector(".opp-reset").style.background="rgb(15, 158, 198)";
    document.querySelector(".opp-del").style.background="rgb(15, 158, 198)";
    document.querySelector("#ppp").style.background="#A79F96";
    document.querySelector(".opp-77").style.background="rgb(234, 227, 219)";
    document.querySelector(".result").style.background="#EEEEEE";
    document.querySelector(".theme-circle").style.left="10px";
    document.querySelector("#theme").style.color="black";
    document.querySelector("h").style.color="black";
    document.querySelector("h1").style.color="black";
    document.querySelector("h2").style.color="black";
    document.querySelector(".result").style.color="black";
    document.querySelector("#calc").style.color="black";
    localStorage.setItem('modee','2');
}
function mode_3(){
    document.querySelector(".theme-circle").style.background="#96FBF5";
    document.querySelector("body").style.background="#17062A";
    document.querySelector(".calc-op").style.background="#1E0836";
    document.querySelector(".calc-sign").style.background="#1E0836";
    document.querySelector(".opp-egale").style.background="#94FFF9";
    document.querySelector(".opp-egale").style.borderBottom="#6CF8EF solid"; 
    document.querySelector(".opp-reset").style.background="#8631B0";
    document.querySelector(".opp-del").style.background="#8631B0";
    document.querySelector(".result").style.background="#1E0836";
    document.querySelector(".result").style.color="#FCE25A";
    document.querySelector(".theme-circle").style.left="19px";
    document.querySelector("#calc").style.color="#FCE25A";
    document.querySelector("#theme").style.color="#FCE25A";
    document.querySelector("h").style.color="#FCE25A";
    document.querySelector("h1").style.color="#FCE25A";
    document.querySelector("h2").style.color="#FCE25A";
    localStorage.setItem('modee','3');
}
function there_is(x){
    var i=0;
    for(i=0;i<x.length;i++){
        sign=x.charAt(i);
        if(sign=="="||sign=="/"||sign=="*"||sign=="+"){return false;}
    }
 return true;
}

function btt_sign(y){
    if(result.value==0){result.value="";}
    sign=result.value;
    if(isNaN(y)==false){result.value="";}
    if(there_is(result.value)==false){alert("wrong input !!!");
    y=0;
}
    result.value=y;
    console.log(variable);
    if(variable!=""){t.push(parseFloat(variable));}
    t.push(y);
    variable="";

}

function btt_number(y){
    if((result.value==0)&&(y!=".")&&(result.value.length==1)){result.value="";};
    sign=result.value;
if(sign=="="||sign=="/"||sign=="*"||sign=="+"||sign=="-"){
    result.value="";
}
    if((y==".")&&(sign=="="||sign=="/"||sign=="*"||sign=="+")){y="0.";}
    result.value=result.value+y;
    variable=String(variable)+String(y);
}


one.addEventListener("click",()=>{
    btt_number(1);
});
two.addEventListener("click",()=>{
    btt_number(2);
});
three.addEventListener("click",()=>{
    btt_number(3);
});
four.addEventListener("click",()=>{
    btt_number(4);
});
five.addEventListener("click",()=>{
    btt_number(5);
});
six.addEventListener("click",()=>{
    btt_number(6);
});
seven.addEventListener("click",()=>{
    btt_number(7);
});
eight.addEventListener("click",()=>{
    btt_number(8);
});
nine.addEventListener("click",()=>{
    btt_number(9);
});
zero.addEventListener("click",()=>{
    btt_number(0);
});
reset.addEventListener("click",()=>{
    result.value=0; 
    variable=0;
    t.length=0;
    s=0;
});

del.addEventListener("click",()=>{
    reslu=result.value;
    result.value=reslu.substr(0,reslu.length-1);
    if(result.value==""){result.value=0;
    variable=0;}
});

egale.addEventListener("click",()=>{
    
    t.push(parseFloat(result.value));
    sign=t[t.lengthy];
    if(sign=="="||sign=="/"||sign=="*"||sign=="+"||sign=="-"){alert("something went wrong!!")}
    let i=0;
    console.log(t);
    if(isNaN(t[0])==false){
    if(t[i+1]=="+"){
            s=t[i]+t[i+2]
        }
    if(t[i+1]=="-"){
            s=t[i]-t[i+2]
        } 
    if(t[i+1]=="*"){ 
            s=t[i]*t[i+2]
        }
    if(t[i+1]=="/"){
            s=t[i]/t[i+2]
        }
        console.log(s);
    if(t.length>3){
        for(i=3;i<(t.length);i+=2){
    if(t[i]=="+"){
        s=s+t[i+1]
    }
    if(t[i]=="-"){
        s=s-t[i+1]
    }
    if(t[i]=="*"){
        s=s*t[i+1]
    }
    if(t[i]=="/"){
        s=s/t[i+1]
    
    } }}}
    if(isNaN(t[0])){
        for(i=0;i<(t.length);i+=2){
            if(t[i]=="+"){
                s=s+t[i+1]
            }
            if(t[i]=="-"){
                s=s-t[i+1]
            }
            if(t[i]=="*"){
                s=s*t[i+1]
            }
            if(t[i]=="/"){
                s=s/t[i+1]
            
            }
    }}
    result.value=s;
    t.length=0;
    variable=0;
});
document.addEventListener("keydown",(el)=>{
    if(el.key=="Enter"){
    t.push(parseFloat(result.value));
    sign=t[t.lengthy];
    if(sign=="="||sign=="/"||sign=="*"||sign=="+"||sign=="-"){alert("something went wrong!!")}
    let i=0;
    console.log(t);
    if(isNaN(t[0])==false){
    if(t[i+1]=="+"){
            s=t[i]+t[i+2]
        }
    if(t[i+1]=="-"){
            s=t[i]-t[i+2]
        } 
    if(t[i+1]=="*"){ 
            s=t[i]*t[i+2]
        }
    if(t[i+1]=="/"){
            s=t[i]/t[i+2]
        }
        console.log(s);
    if(t.length>3){
        for(i=3;i<(t.length);i+=2){
    if(t[i]=="+"){
        s=s+t[i+1]
    }
    if(t[i]=="-"){
        s=s-t[i+1]
    }
    if(t[i]=="*"){
        s=s*t[i+1]
    }
    if(t[i]=="/"){
        s=s/t[i+1]
    
    } }}}
    if(isNaN(t[0])){
        for(i=0;i<(t.length);i+=2){
            if(t[i]=="+"){
                s=s+t[i+1]
            }
            if(t[i]=="-"){
                s=s-t[i+1]
            }
            if(t[i]=="*"){
                s=s*t[i+1]
            }
            if(t[i]=="/"){
                s=s/t[i+1]
            
            }
    }}
    result.value=s;
    t.length=0;
    variable=0
    }
});
fois.addEventListener("click",()=>{
    btt_sign("*");
});

pluss.addEventListener("click",()=>{
    btt_sign("+");

});

moin.addEventListener("click",()=>{
    btt_sign("-");
});

point.addEventListener("click",()=>{
    btt_number(".");
});

sur.addEventListener("click",()=>{
    btt_sign("/");
});

negative.addEventListener("click",()=>{
    if(result.value!="" && result.value!=0 && result.value!="-" && there_is(result.value)){
        result.value=-1*(result.value);
        variable=variable*-1;
        }
});

document.addEventListener("keydown",(event)=>{
    const el=event.key;
    if(el=="ArrowRight"){
       document.querySelector(".calculat").style.left=String(value+10)+"px";
       value+=10;
    }
    if(el=="ArrowLeft"){
        document.querySelector(".calculat").style.left=String(value-10)+"px";
        value-=10;
     }
     if(el=="ArrowUp"){
        document.querySelector(".calculat").style.top=String(valuee-10)+"px";
        valuee-=10;
     }
     if(el=="ArrowDown"){
        document.querySelector(".calculat").style.top=String(valuee+10)+"px";
        valuee+=10;
     }
     if(document.querySelector(".calculat").style.top=="190px"){
        document.querySelector(".calculat").style.top="-560px";
        valuee=-560
     }
     console.log(valuee);

});
