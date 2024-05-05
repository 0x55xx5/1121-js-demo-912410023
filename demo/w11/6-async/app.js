const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const heading4 = document.querySelector('.four');

const btn = document.querySelector('.btn');

const flashColorAsync = async () => {
 await flashColor(heading1, 'red', 6000);
 await flashColor(heading2, 'blue', 500);
 await flashColor(heading3, 'yellow', 100);
 await flashColor(heading4, 'purple', 100);
};
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

btn.addEventListener('click',async ()=>{

    console.log( new Date());
    await flashColorAsync();
    console.log(new Date());
});