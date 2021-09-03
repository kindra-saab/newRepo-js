
const Easy=[0,9,0,0,5,3,7,0,6,
            6,7,0,1,9,0,0,5,0,
            5,0,4,0,0,2,0,0,1,
            4,0,0,6,0,0,2,3,0,
            3,1,0,0,0,9,0,6,5,
            0,0,0,5,3,0,0,8,7,
            0,0,0,0,2,5,9,0,0,
            0,0,1,9,0,0,5,0,3,
            0,5,3,8,0,0,0,7,0]

const Medium=[9,0,0,0,0,8,5,0,0,
              0,0,5,0,0,4,0,0,0,
              7,2,0,9,1,0,0,0,0,
              6,4,0,8,0,0,0,1,0,
              0,0,0,0,0,0,0,6,0,
              8,0,0,0,0,0,2,0,0,
              0,5,0,0,0,0,0,2,0,
              0,0,0,0,5,0,1,7,4,
              0,0,3,0,9,0,0,0,0]


const Hard=  [4,0,0,8,0,0,0,0,7,
              0,0,0,4,0,0,0,6,0,
              2,0,6,0,0,7,0,9,0,
              0,5,0,0,0,0,0,0,0,
              0,9,0,0,0,0,1,0,0,
              0,0,2,9,0,8,7,0,0,
              0,0,0,0,0,0,3,0,1,
              0,0,9,2,7,0,0,8,0,
              1,0,0,0,0,4,0,0,0]


              let isClicked=false;



              function isNumberKey(evt)
              {

                console.log(evt);

                 var charCode = evt.keyCode;
                 if (charCode != 45  && charCode > 31 && (charCode < 48 || charCode > 57) || charCode===48)
                    return false;
            
                 return true;
              }


            function makeSudokuEasy()
            {


                for(let i=0;i<81;i++)
    {
        document.querySelector(`.td${i+1} input`).classList.remove("red");
        
    }

                isClicked=true;
                for(let i=0;i<81;i++)
                {

                    document.querySelector(`.td${i+1} input`).value = null;
                    document.querySelector(`.td${i+1} input`).classList.remove("selected");
                    document.querySelector(`.td${i+1} input`).disabled = false;



                }

                for(let i=0;i<81;i++)
                {
                    
                    if(Easy[i]!==0)
                    {
                        document.querySelector(`.td${i+1} input`).value = Easy[i];
                        document.querySelector(`.td${i+1} input`).disabled = true;
                        document.querySelector(`.td${i+1} input`).classList.add("selected");


                    }
                }
            }


            function makeSudokuMedium()
            {

                for(let i=0;i<81;i++)
    {
        document.querySelector(`.td${i+1} input`).classList.remove("red");
        
    }

                isClicked=true;

                for(let i=0;i<81;i++)
                {
                    document.querySelector(`.td${i+1} input`).disabled = false;

                    document.querySelector(`.td${i+1} input`).value = null;
                    document.querySelector(`.td${i+1} input`).classList.remove("selected");


                }



                for(let i=0;i<81;i++)
                {
                    if(Medium[i]!==0)
                    {
                        document.querySelector(`.td${i+1} input`).value = Medium[i];
                        document.querySelector(`.td${i+1} input`).disabled = true;
                        document.querySelector(`.td${i+1} input`).classList.add("selected");


                    }
                }
            }


            function makeSudokuHard()
            {

                for(let i=0;i<81;i++)
    {
        document.querySelector(`.td${i+1} input`).classList.remove("red");
        
    }

                isClicked=true;
                
                for(let i=0;i<81;i++)
                {
                    document.querySelector(`.td${i+1} input`).disabled = false;
                    document.querySelector(`.td${i+1} input`).value = null;
                    document.querySelector(`.td${i+1} input`).classList.remove("selected");


                }


                for(let i=0;i<81;i++)
                {
                    if(Hard[i]!==0)
                    {
                        document.querySelector(`.td${i+1} input`).value = Hard[i];
                        document.querySelector(`.td${i+1} input`).disabled = true;
                        document.querySelector(`.td${i+1} input`).classList.add("selected");


                    }
                }
            }

document.querySelector('.easy').addEventListener('click',makeSudokuEasy);
document.querySelector('.medium').addEventListener('click',makeSudokuMedium);
document.querySelector('.hard').addEventListener('click',makeSudokuHard);

// function ShowDifficultyLevel()
// {
//     alert('why are you clicking');
// }

if(isClicked===false)
{
    for(let i=0;i<81;i++)
    {
        document.querySelector(`.td${i+1} input`).disabled = true;
        
    }
}


let values=[[],[],[],[],[],[],[],[],[]];
let colValues=[[],[],[],[],[],[],[],[],[]];
let gridValues=[[],[],[],[],[],[],[],[],[]];

let isRed=false;

let sudokuIsOkay=true;

function validateRow(rowNum)
{
    
    
    
    
    // let j=0;
    let start=(rowNum-1)*9 +1;
    let end=(rowNum*9);
    for(let i=start;i<=end;i++)
    {
        // console.log(document.querySelector(`.td${i-1} input`).value);
        // console.log(document.querySelector(`.td${i} input`).value);
        values[rowNum-1].push(document.querySelector(`.td${i} input`).value);
     // console.log('jmd');
    }

    for(let i=0;i<9;i++)
    {
        for(let j=0;j<9;j++)
        {
            if(i!==j)
            {
                if(values[rowNum-1][i]===values[rowNum-1][j] && values[rowNum-1][i]!=="")
                {
                    document.querySelector(`.td${(rowNum-1)*9 + i+1}  input`).classList.add("red");
                    // document.querySelector(`.td${(rowNum-1)*9 + i+1}`).classList.add("redBorder");


                    document.querySelector(`.td${(rowNum-1)*9 + j+1}  input`).classList.add("red");
                    // document.querySelector(`.td${(rowNum-1)*9 + i+1}`).classList.add("redBorder");
                    isRed=true;

                    sudokuIsOkay=false;

                }
            }
        }
    }

    

    // console.log(values);

}


function validateColumn(colNum)
{
    
    
    
    
    // let j=0;
    let start=(colNum);
    let end=(9*8)+(colNum);
    for(let i=start;i<=end;i+=9)
    {
        // console.log(document.querySelector(`.td${i-1} input`).value);
        // console.log(document.querySelector(`.td${i} input`).value);
        colValues[colNum-1].push(document.querySelector(`.td${i} input`).value);
     // console.log('jmd');
    }

    for(let i=0;i<9;i++)
    {
        for(let j=0;j<9;j++)
        {
            if(i!==j)
            {
                if(colValues[colNum-1][i]===colValues[colNum-1][j] && colValues[colNum-1][i]!=="")
                {
                    document.querySelector(`.td${i*9+colNum}  input`).classList.add("red");
                    // document.querySelector(`.td${(rowNum-1)*9 + i+1}`).classList.add("redBorder");


                    document.querySelector(`.td${j*9+colNum}  input`).classList.add("red");
                    // document.querySelector(`.td${(rowNum-1)*9 + i+1}`).classList.add("redBorder");
                    isRed=true;

                    sudokuIsOkay=false;

                }
            }
        }
    }

    

    // console.log(colValues);

}

function validateGrid(gridNum)
{
    let gridArray=[[],[],[],[],[],[],[],[],[]];
    let num=0;
    let times=3;
    if(gridNum===1)
    {
        let start=1;
        let starting =1;
        for(let i=0;i<3;i++)
        {
            
            for(let j=0;j<3;j++)
            {
                gridArray[num].push(document.querySelector(`.td${start+j} input`).value);
                gridArray[num].push(starting);
                starting++;
                num++;
            }
            start=start+9;
            starting=start
        }

        for(let i=0;i<0;i++)
        {
            for(let j=0;j<9;j++)
            {
                if(i!==j)
                {
                    if(gridArray[i][0]===gridArray[j][0] && gridArray[i][0]!="")
                    {
                    document.querySelector(`.td${gridArray[i][1]}  input`).classList.add("red");
                    document.querySelector(`.td${gridArray[j][1]}  input`).classList.add("red");

                    }
                    sudokuIsOkay=false;

                }
            }
        }
    }



    if(gridNum===2)
    {
        let start=4;
        let starting =4;
        for(let i=0;i<3;i++)
        {
            
            for(let j=0;j<3;j++)
            {
                gridArray[num].push(document.querySelector(`.td${start+j} input`).value);
                gridArray[num].push(starting);
                starting++;
                num++;
            }
            start=start+9;
            starting=start
        }

        for(let i=0;i<0;i++)
        {
            for(let j=0;j<9;j++)
            {
                if(i!==j)
                {
                    if(gridArray[i][0]===gridArray[j][0] && gridArray[i][0]!="")
                    {
                    document.querySelector(`.td${gridArray[i][1]}  input`).classList.add("red");
                    document.querySelector(`.td${gridArray[j][1]}  input`).classList.add("red");

                    }
                    sudokuIsOkay=false;

                }
            }
        }
    }


    if(gridNum===3)
    {
        let start=7;
        let starting =7;
        for(let i=0;i<3;i++)
        {
            
            for(let j=0;j<3;j++)
            {
                gridArray[num].push(document.querySelector(`.td${start+j} input`).value);
                gridArray[num].push(starting);
                starting++;
                num++;
            }
            start=start+9;
            starting=start
        }

        for(let i=0;i<0;i++)
        {
            for(let j=0;j<9;j++)
            {
                if(i!==j)
                {
                    if(gridArray[i][0]===gridArray[j][0] && gridArray[i][0]!="")
                    {
                    document.querySelector(`.td${gridArray[i][1]}  input`).classList.add("red");
                    document.querySelector(`.td${gridArray[j][1]}  input`).classList.add("red");

                    }
                    sudokuIsOkay=false;

                }
            }
        }
    }

    if(gridNum===4)
    {
        let start=28;
        let starting =28;
        for(let i=0;i<3;i++)
        {
            
            for(let j=0;j<3;j++)
            {
                gridArray[num].push(document.querySelector(`.td${start+j} input`).value);
                gridArray[num].push(starting);
                starting++;
                num++;
            }
            start=start+9;
            starting=start
        }

        for(let i=0;i<0;i++)
        {
            for(let j=0;j<9;j++)
            {
                if(i!==j)
                {
                    if(gridArray[i][0]===gridArray[j][0] && gridArray[i][0]!="")
                    {
                    document.querySelector(`.td${gridArray[i][1]}  input`).classList.add("red");
                    document.querySelector(`.td${gridArray[j][1]}  input`).classList.add("red");

                    }
                    sudokuIsOkay=false;

                }
            }
        }
    }


    if(gridNum===5)
    {
        let start=31;
        let starting =31;
        for(let i=0;i<3;i++)
        {
            
            for(let j=0;j<3;j++)
            {
                gridArray[num].push(document.querySelector(`.td${start+j} input`).value);
                gridArray[num].push(starting);
                starting++;
                num++;
            }
            start=start+9;
            starting=start
        }

        for(let i=0;i<0;i++)
        {
            for(let j=0;j<9;j++)
            {
                if(i!==j)
                {
                    if(gridArray[i][0]===gridArray[j][0] && gridArray[i][0]!="")
                    {
                    document.querySelector(`.td${gridArray[i][1]}  input`).classList.add("red");
                    document.querySelector(`.td${gridArray[j][1]}  input`).classList.add("red");

                    }
                    sudokuIsOkay=false;

                }
            }
        }
    }



    if(gridNum===6)
    {
        let start=34;
        let starting =34;
        for(let i=0;i<3;i++)
        {
            
            for(let j=0;j<3;j++)
            {
                gridArray[num].push(document.querySelector(`.td${start+j} input`).value);
                gridArray[num].push(starting);
                starting++;
                num++;
            }
            start=start+9;
            starting=start
        }

        for(let i=0;i<0;i++)
        {
            for(let j=0;j<9;j++)
            {
                if(i!==j)
                {
                    if(gridArray[i][0]===gridArray[j][0] && gridArray[i][0]!="")
                    {
                    document.querySelector(`.td${gridArray[i][1]}  input`).classList.add("red");
                    document.querySelector(`.td${gridArray[j][1]}  input`).classList.add("red");

                    }
                    sudokuIsOkay=false;

                }
            }
        }
    }


    if(gridNum===7)
    {
        let start=55;
        let starting =55;
        for(let i=0;i<3;i++)
        {
            
            for(let j=0;j<3;j++)
            {
                gridArray[num].push(document.querySelector(`.td${start+j} input`).value);
                gridArray[num].push(starting);
                starting++;
                num++;
            }
            start=start+9;
            starting=start
        }

        for(let i=0;i<0;i++)
        {
            for(let j=0;j<9;j++)
            {
                if(i!==j)
                {
                    if(gridArray[i][0]===gridArray[j][0] && gridArray[i][0]!="")
                    {
                    document.querySelector(`.td${gridArray[i][1]}  input`).classList.add("red");
                    document.querySelector(`.td${gridArray[j][1]}  input`).classList.add("red");

                    }
                    sudokuIsOkay=false;

                }
            }
        }
    }


    if(gridNum===8)
    {
        let start=58;
        let starting =58;
        for(let i=0;i<3;i++)
        {
            
            for(let j=0;j<3;j++)
            {
                gridArray[num].push(document.querySelector(`.td${start+j} input`).value);
                gridArray[num].push(starting);
                starting++;
                num++;
            }
            start=start+9;
            starting=start
        }

        for(let i=0;i<0;i++)
        {
            for(let j=0;j<9;j++)
            {
                if(i!==j)
                {
                    if(gridArray[i][0]===gridArray[j][0] && gridArray[i][0]!="")
                    {
                    document.querySelector(`.td${gridArray[i][1]}  input`).classList.add("red");
                    document.querySelector(`.td${gridArray[j][1]}  input`).classList.add("red");

                    }
                    sudokuIsOkay=false;

                }
            }
        }
    }


    if(gridNum===9)
    {
        let start=61;
        let starting =61;
        for(let i=0;i<3;i++)
        {
            
            for(let j=0;j<3;j++)
            {
                gridArray[num].push(document.querySelector(`.td${start+j} input`).value);
                gridArray[num].push(starting);
                starting++;
                num++;
            }
            start=start+9;
            starting=start
        }

        for(let i=0;i<0;i++)
        {
            for(let j=0;j<9;j++)
            {
                if(i!==j)
                {
                    if(gridArray[i][0]===gridArray[j][0] && gridArray[i][0]!="")
                    {
                    document.querySelector(`.td${gridArray[i][1]}  input`).classList.add("red");
                    document.querySelector(`.td${gridArray[j][1]}  input`).classList.add("red");

                    }
                    sudokuIsOkay=false;

                }
            }
        }
    }


    console.log(gridArray);
}



function validateRows()
{
    for(let i=1;i<=9;i++)
    {
        validateRow(i);
    }
}

function validateColumns()
{
    for(let i=1;i<=9;i++)
    {
        validateColumn(i);
    }
}


function validateGrids()
{
//    validateGrid(1);
//    validateGrid(4);
//    validateGrid(7);
//    validateGrid(28);
//    validateGrid(31);
//    validateGrid(34);
//    validateGrid(55);
//    validateGrid(58);
//    validateGrid(61);

for(let i=1;i<=9;i++)
{
    validateGrid(i);
}



}

// let finalAns=true;

function validateSudoku()
{
    // alert('jai mata di');

    // console.log(count);
   
    //    else
    //    {
    //        finalAns=false;
    //    }
        
    // }


   

    console.log("validating");
    console.log(sudokuIsOkay);
    // console.log(finalAns);
    for(let i=0;i<81;i++)
    {
        document.querySelector(`.td${i+1} input`).classList.remove("red");
        
    }
    values=[[],[],[],[],[],[],[],[],[]];
    colValues=[[],[],[],[],[],[],[],[],[]];
    gridValues=[[],[],[],[],[],[],[],[],[]];
    
    validateRows();
    validateColumns();
    validateGrids();


    let count=0;
    for(let i=0;i<81;i++)
    {
       if(document.querySelector(`.td${i+1} input`).value !== "" || document.querySelector(`.td${i+1} input`).value !== " " || document.querySelector(`.td${i+1} input`).value !== null)
       {
            // finalAns=true;
            count++;
            
       }
    }

    
    if(sudokuIsOkay===true && count===81)
    {
        alert("Yes, You Nailed It 👏😎");
    }

    
}

// function changeClass()
// {
//     if(isRed===true)  
//     {
//         document.querySelector(".inputcls").classList.remove("red");

//     }
// }


// document.querySelector('.inputcls').addEventListener('click', changeClass);

document.getElementById('validate').addEventListener('click', validateSudoku);




