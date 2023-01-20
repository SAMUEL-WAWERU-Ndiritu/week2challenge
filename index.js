// Calculator function


function myFunction(){
let num = parseInt(prompt("Enter the first number?"));
let num2 = parseInt(prompt("Enter the second number"));
let  total = parseInt(num + num2);
const  p = document.createElement("p");
p.innerText= total;
document.body.appendChild(p);
}

// amstrong number

function Question3(){
   let number = parseInt(prompt("Enter the first number?"));
   const p = document.createElement("p");
   const div = document.getElementById("strong");
   const sty = document.getElementById("sty");

   let num = number;
   const len = String(num).split("").length;
   let res = 0;
   while(num){
      const last = num % 10;
      res += Math.pow(last, len);
      num = Math.floor(num / 10);
   };
   if(res === number){
        p.innerText = "The number IS an amstrong number";
        div.appendChild(p);
        sty.appendChild(div);

        return document.body.appendChild(sty);

   }else{
         p.innerText = "The number is NOT an amstrong number";
       div.appendChild(p);
       sty.appendChild(div)
        return document.body.appendChild(sty);

   }
 };



//PALINDROME

function question2() {
   const str = prompt("Write any text pls");
  const w  = document.createElement("p");
  const Div3 = document.getElementById("PALINDROME");

   var re = /[^A-Za-z0-9]/g; 
   var lowRegStr = str.toLowerCase().replace(re, '');
   var reverseStr = lowRegStr.split('').reverse().join(''); 
   if(reverseStr === lowRegStr){
        w.innerText ="The input is a Palindrome";
        Div3.appendChild(w);
        return document.body.appendChild(Div3);
   }else{
      w.innerText ="The input is NOT Palindrome";
      Div3.appendChild(w);
      return document.body.appendChild(Div3)
   }
 }



 // To do app

 function toDoApp(){
   if(document.querySelector('#newtask input').value.length == 0){
       alert("Kindly Enter Task Name!!!!")
   }

   else{
       document.querySelector('#tasks').innerHTML += `
           <div class="task">
               <span id="taskname">
                   ${document.querySelector('#newtask input').value}
               </span>
               <button class="delete">
                   delete
               </button>
           </div>
       `;

       var current_tasks = document.querySelectorAll(".delete");
       for(var i=0; i<current_tasks.length; i++){
           current_tasks[i].onclick = function(){
               this.parentNode.remove();
           }
       }
   }
}