function clock(){
    let h=document.getElementById("h");
    let m=document.getElementById("m");
    let s=document.getElementById("s");
    let d=new Date();
    let houre=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();
    if(houre>12){
        houre-=12;
    }
    s.style.transform=`rotate(${sec*6}deg)`;
    m.style.transform=`rotate(${min*6+sec*0.1}deg)`;
    h.style.transform=`rotate(${houre*30+min*0.5}deg)`;
    var a=setTimeout(function(){clock()},1000);
}