
const btnjsonf=document.getElementById('btnjsonf');
const btnjsonfasync=document.getElementById('btnjsonfasync');


const test1Async= async ()=>{
        try {
            const response=await fetch(url);
            console.log(response);
            const data=await response.json();
            console.log(data);
            const div= document.createElement('div');
            div.innerHTML=`<h1>${data[3].name}</h1>
            <h1>${data[3].email}</h1>
            
            `
            document.body.appendChild(div);
            
        } catch (error) {
        }
};

async function test2Async() {
    try {
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data);
        const div = document.createElement('div');
        div.innerHTML = `<h1>${data[3].name}</h1>
        <h1>${data[3].email}</h1>`;
        document.body.appendChild(div);
    } catch (error) {
        console.log(error);
    }
}

 function test3Async() {
     (async()=>{
        try {
            const response = await fetch(url);
            console.log(response);
            const data = await response.json();
            console.log(data);
            const div = document.createElement('div');
            div.innerHTML = `<h1>${data[3].name}</h1>
            <h1>${data[3].email}</h1>`;
            document.body.appendChild(div);
        } catch (error) {
            console.log(error);
        }
    })().then(()=>{console.log('done')});
}

btnjsonfasync.addEventListener('click', test2Async);;


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

