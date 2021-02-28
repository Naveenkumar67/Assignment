function spa(){
    let x=document.getElementById("fname").value;
    x.replace(/\s/g, '');

}

function val(){
    let x=document.getElementById("password").value;
    let y=document.getElementById("conpass").value;
    let z=document.getElementById("para");
    if(x!==y){
        z.innerHTML="passwords are not same";
    }
    else{
        z.style.visibility="hidden";
    }
}


function da(){
    let dob=document.getElementById("dob").value;
let d= new Date();
let y=d.getFullYear();
let m=d.getMonth();
let da=d.getDay();
let s="";
let x="";
let b="";
for(let i=5;i<7;i++){
    x+=dob[i];
}
for(let i=8;i<10;i++){
    b+=dob[i];
}
for(let i=0;i<4;i++){
    s+=dob[i];
}
if(y-parseInt(s)>18 ){
    let h=document.getElementById("par1");
    h.style.visibility="hidden";
}
else if(y===parseInt(s)){
    if(m>parseInt(x)){
        let h=document.getElementById("par1");
    h.style.visibility="hidden";
    }
    else if(m<parseInt(x)){
        if(da>=parseInt(b)){
            let h=document.getElementById("par1");
        h.style.visibility="hidden";
        }
        else{
            let h=document.getElementById("par1");
            h.innerHTML="You must be 18 years old";
        }
    }
    else{
        let h=document.getElementById("par1");
        h.innerHTML="You must be 18 years old";
    }
}
// else if(y==parseInt(s) && m==parseInt(x)){
//     if(da>=parseInt(b)){
//         let h=document.getElementById("par1");
//     h.style.visibility="hidden";
//     }
//     else{
//         let h=document.getElementById("par1");
//         h.innerHTML="You must be 18 years old";
//     }
// }
else{
    let h=document.getElementById("par1");
    h.innerHTML="You must be 18 years old";
}
}



function pasval(){
    let x=document.getElementById("password").value;
    if (x.match(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]*[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~])(?=\D*\d).{8,}$/)) {
        // now, it is valid
        let y=document.getElementById("par2");
        y.style.visibility="hidden"
     }
    else{
        let y=document.getElementById("par2");
        y.innerHTML="Password should contain 1 uppercase 1 lowercase 1 digit 1 special character";
    }
}

// var a=document.getElementById("country")
// if(a.value=='India'){
//     let s1=document.getElementById("s1");
//     s1.innerHTML="Telangana";
//     let s2=document.getElementById("s2");
//     s2.innerHTML="Maharashtra";
//     let s3=document.getElementById("s3");
//     s3.innerHTML="Kerala";

// }
// else if(a.value=='America'){
//     let s1=document.getElementById("s1");
//     s1.innerHTML="California";
//     let s2=document.getElementById("s2");
//     s2.innerHTML="Texas";
//     let s3=document.getElementById("s3");
//     s3.innerHTML="Telangana";
// }
