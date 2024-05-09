
const btn=document.getElementById('btn');
const btnjson=document.getElementById('btnjson');

const url='http://127.0.0.1:5500/demo/w12/text/api/1.json';

function getjsonData(){

    const xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
            console.log(xhr.responseText);
            const data=JSON.parse(xhr.responseText);
            console.log(data);
          
         
           const div= document.createElement('div');
           div.innerHTML=`<h1>${data[0].name}</h1>
           <h1>${data[0].age}</h1>
           
           `
           document.body.appendChild(div);
        }
        else{
            console.log("ex:"+xhr.statusText); 
        }
    }

    xhr.send();
}
btnjson.addEventListener('click',getjsonData);

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
