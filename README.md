
1. I draw the design of layout by Figma

Question: 
    What is The Recipe App used for?
    what will color be applied?
    Do you happy with my drawing of the layout?

    Tool: VS code, Git, GitHub
    Softwae: HTML, CSS, Bootstrap and Javascript
    Internet resource: Google, Bootstrap, W3school..

2. Create a class that including of:
    - A empty array for store recipe object 
    - The array of object be converted to JSON string that will be stored in local storage
    - A CurrentId for tracking and control each recipe object
    - Add method and delete method for adding and deleting recipe object 

3. For dispay in difference side of devices, i am going to use Bootstrap contanine,r Bootstrap Grid,
    and Boostrap Flex.

4. Add a Edit function for each recipe

5. Problems:

        -How display edit Bootstrap Modal on the top of meal Bootstrap Modal so i search on the internet for       W3school.com
            solution:  .modal:nth-of-type(even) {
                        z-index: 1052 !important;
                        }
                        .modal-backdrop.show:nth-of-type(even) {
                        z-index: 1051 !important;
                        }
                        or
                        <button class="btn btn-outline-success editBtn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalAA" data-bs-dismiss="modal">Edit</button>

        - How to make a variable that is declare inside of a function to be a globe variable
            Solution:   go through again w3school.com about variable

        - How to make recipe card always display the side 
            solution: wait for next Recipe Maker version