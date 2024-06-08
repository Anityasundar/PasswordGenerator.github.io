const emojiEl = document.querySelectorAll(".chinu");
const starEl = document.querySelectorAll(".fa-star");


starEl.forEach((starEl,index)=>{
    starEl.addEventListener("click",()=>{
        updatingEmoji(index);
    });
});


function updatingEmoji(index){
    starEl.forEach((starEl,idx)=>{
        if(idx<index+1){
            starEl.classList.add("active");
        } else{
            starEl.classList.remove("active");
        }
    });


    emojiEl.forEach((emojiEl)=>{
        emojiEl.style.transform = `translateX(-${index*50}px)`
    });
}