let playermove = 'X';
let cnt = 0;
let GameOver = 'false';

const win = [['1','2','3'],['1','4','7'],['1','5','9'],['2','5','8'],['3','6','9'],['4','5','6'],['7','8','9'],['3','5','7']]

document.getElementById('btn').addEventListener('click',function(){
    for(let i = 1;i<=9;i++)
    {
        document.getElementById(`${i}`).innerHTML = "";
        document.getElementById(`${i}`).style.backgroundColor = 'white';
    }
    GameOver = 'false';
    document.getElementById('status').innerText = "";
    playermove = 'X';
    cnt = 0;
})

for(let i = 1;i<=9;i++)
{
    document.getElementById(`${i}`).addEventListener('click',function(e){
            if(GameOver === 'false')
            {
                if(e.target.innerText=="")
                {
                    e.target.innerHTML = `<h1>${playermove}</h1>`;
                    e.target.style.backgroundColor = 'grey' 
                    cnt+=1;
                    checkGame();
                    if(playermove ==='X')
                    {
                        playermove = 'O';
                    }
                    else{
                        playermove = 'X';
                    }
                    if(cnt===9)
                    {
                        document.getElementById('status').innerText = `Game Over,Draw`
                    }
                }
                else{
                    alert(`invalid move`)
                }
            }
    });
}


function checkGame(){
    for(let i = 0;i<win.length;i++)
    {
        if(document.getElementById(`${win[i][0]}`).innerText === playermove && document.getElementById(`${win[i][1]}`).innerText === playermove && document.getElementById(`${win[i][2]}`).innerText === playermove )
        {
            GameOver = true;
            document.getElementById('status').innerText = `Game Over,${playermove} won`
        }
    }
}