
const btn=document.getElementById('btn');
function getData(){
    
    const xhr=new XMLHttpRequest();
    xhr.open('GET','./1.txt',true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
            console.log(xhr.responseText);
            const ele=document.createElement('p');
            ele.textContent=xhr.responseText;
            document.body.appendChild(ele);
        }
        else{
            console.log("ex:"+xhr.statusText); 
        }
    }
    
    xhr.send();
}

btn.addEventListener('click',getData);
/*

const xhr=new XMLHttpRequest();
console.log(xhr.UNSENT);
console.log(xhr.OPENED);
xhr.open('GET','./1.txt',true);
console.log(xhr.OPENED);

xhr.onreadystatechange=function(){
    console.log("xhr.readyState"); 
    console.log(xhr.readyState);
    if(xhr.readyState===4){
        console.log(xhr.responseText);
        const ele=document.createElement('p');
        ele.textContent=xhr.responseText;
        document.body.appendChild(ele);
    }
    else{
        console.log("ex:"+xhr.statusText); 
    }
}
xhr.send();

*/
