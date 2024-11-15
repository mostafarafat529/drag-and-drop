

let input = document.getElementById("inp")
let button = document.getElementById("btn")
let boxes = document.querySelectorAll(".box")

let drag = null ;

button.onclick = function(){

    if(input.value != ""){
        boxes[0].innerHTML += `          
        <p class="item" draggable = true> ${input.value} </p>   
        `
        input.value = " "
    }

    dragitem() 
}

   function dragitem(){
        let items = document.querySelectorAll(".item");
        items.forEach(function(item){
        item.addEventListener("dragstart" , function(){
                drag = item ;
            this.style.opacity = ".5"
        })
        item.addEventListener("dragend" , function(){
                drag = null
            this.style.opacity = "1"
        })
        boxes.forEach(function(box){
            box.addEventListener("dragover" ,function(e){
                    e.preventDefault() ;
                    this.style.backgroundColor = "#090"
                    this.style.color = "#fff"
                })
                box.addEventListener("dragleave" ,function(){
                        this.style.backgroundColor = "#fff"
                        this.style.color = "#000"
                    })
                    box.addEventListener("drop" ,function(){
                this.append(drag)
                this.style.backgroundColor = "#fff"
                this.style.color = "#000"
            })
        })
    })
   } 

