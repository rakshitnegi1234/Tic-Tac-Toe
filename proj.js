let boxes = document.querySelectorAll('.box');
let p = document.querySelector('p');
let player1 = true;
let i=1,check=0;
let game = document.querySelector('.game');
let gamedone =false,flag = false;


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

    boxes.forEach(ele => {
  
    
        ele.addEventListener("click",()=>
 {
    check++;
     if(player1 == true && gamedone == false)
     {
         i++;

         if(ele.innerText == "")
         {
             ele.innerText= 'X';
             player1=false;   
         }
         p.innerText = `Player ${i} Move`;
         
     }
     else if(gamedone == false)
     {
         i--;
         p.innerText = `Player ${i} Move`;
         if(ele.innerText == "")
         {
             ele.innerText= 'O';
             player1=true;
         }
     }  
     checkWinner()
 });
});




function checkWinner()
{
   
   for(patterns of winPatterns)
   {
     let pos1 = boxes[patterns[0]].innerText;
     let pos2 = boxes[patterns[1]].innerText;
     let pos3 = boxes[patterns[2]].innerText;

     if(pos1 == 'X' && pos2 == 'X' && pos3 == 'X' && gamedone == false)
     {
        flag =true;
        let p2 = document.createElement('p');
        p2.innerText = 'Player 1 Wins!!!';
        game.appendChild(p2);
        gameover();

     } 
     else if(pos1 == 'O' && pos2 == 'O' && pos3 == 'O' && gamedone == false)
     {
        flag = true;
        let p2 = document.createElement('p');
        p2.innerText = 'Player 2 Wins!!!';
        game.appendChild(p2);
        gameover();
     }
   
   }
   if(check == 9 && flag == false)
   {
      
         let p2 = document.createElement('p');
         p2.innerText = 'Tie';
         game.appendChild(p2);
         gameover();
       
   }

  
}
function gameover()
{
    gamedone=true;
    let btn = document.createElement('button');
    btn.classList.add('reset');
    btn.innerText= 'Reset';
    game.appendChild(btn);

    btn.addEventListener("click",()=>
    {
        location.reload();
    });
}


