
const btnjsonf=document.getElementById('btnjsonf');

//const url='http://127.0.0.1:5500/demo/w12/text/api/1.json';

function getjsonDataByApiAsync(){
    fetch(url)
    .then((response)=>{
        console.log(response);
        const prom=response.json();
        console.log(prom);
        return prom;
    })
    .then((data)=>{
        console.log(data);
        const div= document.createElement('div');
        div.innerHTML=`<h1>${data[1].name}</h1>
        <h1>${data[1].email}</h1>
        
        `
        document.body.appendChild(div);
    })
    .catch((err)=>{
        console.log(err);
    });


}

btnjsonf.addEventListener('click',getjsonDataByApiAsync);
