let enterType = document.querySelector("#gettype");
let getPath = document.querySelector("#choose");
let getOrder = document.querySelector("#mfolders");
let pathHolder = document.querySelector(".pathHolder")
let exHolder = document.querySelector(".exHolder")
let Order = document.querySelector(".orderHolder")
enterType.addEventListener('click',()=>{
    exHolder.innerHTML= ''
    pathHolder.innerHTML = '<p>2-choose folder path:</p> <button class="btn btn-outline-primary mb-3" id="choose">select</button>'
})
getPath.addEventListener('click',()=>{
    pathHolder.innerHTML= ''
    Order.innerHTML = '<p>3-select what to do:</p> <button type="button" class="btn btn-warning" id="mfolders">Make Folders</button>    <button type="button" class="btn btn-danger">Danger</button>'
})
getOrder.addEventListener('click',()=>{
    Order.innerHTML =''
    exHolder.innerHTML= `<div class="input-group mb-3">
    <input type="text" class="form-control" id="filetype" placeholder="for example .mp4,.mkv">
    <div class="input-group-append">
        <button class="btn btn-success" id="gettype" type="button">apply</button>
    </div>
</div>`
})