window.onload = function() {
        var list = document.getElementById('list');
        var input = document.getElementById('input_text');
        var tab = [];
        document.getElementById('add_button').addEventListener('click', function () {
                var text = input.value;
                if(text !=""){
                        input.style.borderColor = "black";
                        var listItem = document.createElement('li');
                        listItem.innerHTML = text  + ' <span class="delete">Delete</span>';
                        list.appendChild(listItem);
                        tab.push(listItem);
                        input.value = "";
                }
                else{
                        input.style.borderColor = "red";
                }
        });

        list.addEventListener('click', function (elem) {
                 var target = elem.target;document.getElementById("listview")
                 if (target.className == "delete"){
                        target.parentElement.remove();
                        tab.splice(tab.indexOf(target.parentElement),1);
                 }
                        
        });
}
