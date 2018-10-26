window.onload = init;
   
function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {
            let element = document.createElement("li");
            let boton1 = document.createElement("input");
            let boton2 = document.createElement("input");
            let texto = document.createElement("p");
            let flag = 0;
            
            element.style.display = 'flex';
            boton1.style.height = '40px';
            boton1.style.margin = '0 10px'
            boton2.style.height = '40px';
            boton2.style.margin = '0 10px'
            texto.innerText = task;
            boton2.type = 'button';
            boton2.value = 'eliminar';
            boton1.type = 'button';
            boton1.value = 'realizado';
            element.appendChild(texto);
            element.appendChild(boton1);
            element.appendChild(boton2);
            boton1.addEventListener("click",function(){
                if (flag == 0 ){
                    texto.style.textDecoration = 'line-through'
                    flag = 1;
                }else{
                    texto.style.textDecoration = 'none';
                    flag = 0;
                }

            })
            
            //element.innerText = task;
            /*element.addEventListener("click", () => {
               let parent = element.parentNode;
               if(parent){
                   parent.removeChild(element);
               }
            });*/
            boton2.addEventListener("click", function(){
               let parent = this.parentNode.parentNode;
               if(parent){
                   parent.removeChild(this.parentNode);
               }
            });
           // Añadir un boton para marcar de finalizado
           // Elmine de la lista

            if (priority) {
                this.listTask.unshift({
                    element,
                    task
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } else {
                this.listTask.push({
                    element,
                    task
                });
                this.listHTML.appendChild(element);
            }
        }
    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;

        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }

        todoList.add(task, form.important.checked);

    });
}