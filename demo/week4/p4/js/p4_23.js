let cnt=0;

const val=document.querySelector("#value");
const btns=document.querySelectorAll(".btn");

console.log(val);
console.log(btns);

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
    //  
    console.log(  e.currentTarget.classList);
        const styl=e.currentTarget.classList;
        if (styl.contains('decrease')){
            cnt--;
        }else if(styl.contains('increase')){
            cnt++;

        }
        else{
            cnt=0;
        }
        if(cnt>0){
            val.style.color='green';
        }
        else if(cnt<0)
            val.style.color='red';
        else  val.style.color='black';
        console.log(cnt);
        val.textContent=cnt;
    });

});