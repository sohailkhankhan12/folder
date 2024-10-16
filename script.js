setInterval(() => {
let timefrompc = new Date()
time.innerHTML=timefrompc.toLocaleTimeString()   
    
}, 1000);


function setalarm(){
    let h = hourhtml.value;
    let m = minutehtml.value;
    setalarmtime.innerHTML=h+":"+m+":00"

};

let checkinterval=setInterval(()=>{
    let alarmtime=setalarmtime.innerHTML;
    alarmtime=alarmtime.split(":")
    let alarmhours=alarmtime[0];
    let alarmminute=alarmtime[1];
    let systemTime=new Date();
    let systemhours=systemTime.getHours();
    let systemminute=systemTime.getMinutes();
    if(systemhours>12){
        systemhours=systemhours-12;
    }
    if(alarmhours==systemhours && alarmminute==systemminute){
        alarmImage.src="hi.gif";
        alarmSound.play()
        clearInterval(checkinterval);
    }
},1000);



