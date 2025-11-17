const taskList=document.querySelector('.taskList')
const btn=document.getElementById("btn");
const inp = document.getElementById("inp");

btn.addEventListener("click",()=>{
    const div=document.createElement("div");
    div.classList.add('task');
    div.innerHTML=` <div class="section-A">
                <input type="checkbox">
                <p>Cricket</p>
            </div>
            <div class="section-B">
                <span>↑</span>
                <span>🗑</span>
                <span>↓</span>
            </div>`
            taskList.append(div);
            inp.value=""

})