

Draw Design of layout
Tool: VS code, Git, GitHub
Softwae: HTML, CSS, Bootstrap and Javascript
Internet resource: Bootstrap, W3school

1. Create a class that including of:
    - A empty array for store recipe object 
    - The array of object be converted to JSON string that will be stored in local storage
    - A CurrentId for tracking and control each recipe object
    -  Add and delete recipe object 

2. For dispay in difference side of  device, i am going to use bootstrap contaniner and Boostrap flex.

3. Add a function Edit for each recipe

4. Problem display edit modal on the top of meal modal so i search on the internet
                .modal:nth-of-type(even) {
                z-index: 1052 !important;
                }
                .modal-backdrop.show:nth-of-type(even) {
                z-index: 1051 !important;
                }
                <button class="btn btn-outline-success editBtn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalAA" data-bs-dismiss="modal">Edit</button>

