const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const heading4 = document.querySelector('.four');

const btn = document.querySelector('.btn');

const flashColor = (element, color, time) => {
    btn.attributes.disabled = true;
    return new Promise((resolve,reject)=>{
        if(element){
            setTimeout(()=>{
                element.style.color = color;
                resolve();
            }, time);
        }
        else{
            reject('Element not found');
        }
    })
}

btn.addEventListener('click', () => {
    if( btn.attributes.disabled==true){
        alert("wait for the previous action to complete");
    }
   flashColor(heading1, 'red', 1000).then(()=>{
    return flashColor(heading2, 'blue', 500) .then(()=>{
        return flashColor(heading3, 'yellow', 100)&&flashColor(heading4, 'purple', 100).then(()=>{
            btn.attributes.disabled = false;
        })
    })   
   }).catch((error)=>{
       console.log(error);
   });
});