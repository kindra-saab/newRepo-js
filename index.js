<!-- Jai Mata Di. -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
     
    <title>Document</title>
</head>
<body>

    <h1 class="heading">Sudoku Solver 👩‍💻</h1>

    <div class="buttons">
        <button class="pushable easy">
            <span class="front">Easy</span>
        </button>

        <button class="pushable medium">
            <span class="front">Medium</span>
        </button>

        <button class="pushable hard">
            <span class="front">Hard</span>
        </button>
    </div>


    <table>
        <tbody>
        <tr>
            
            <td class="td1"><input type="text"    onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td2"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td3 right-dark"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td4"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td5"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td6 right-dark"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td7"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td8"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td9"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
        </tr>

        <tr>
            <td class="td10"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td11"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td12 right-dark"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td13"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td14"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td15 right-dark"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td16"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td17"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td18"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
        </tr>

        <tr class="bottom-dark">
            <td class="td19"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td20"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td21 right-dark"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td22"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td23"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td24 right-dark"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td25"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td26"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td27"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
        </tr>

        <tr>
            <td class="td28"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td29"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td30 right-dark"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td31"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td32"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td33 right-dark"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td34"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td35"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td36"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
        </tr>

        <tr>
            <td class="td37"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td38"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td39 right-dark"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td40"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td41"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td42 right-dark"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td43"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td44"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td45"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
        </tr>

        <tr class="bottom-dark">
            <td class="td46"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td47"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td48 right-dark"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td49"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td50"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td51 right-dark"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td52"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td53"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td54"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
        </tr>

        <tr>
            <td class="td55"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td56"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td57 right-dark"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td58"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td59"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td60 right-dark"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td61"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td62"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td63"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
        </tr>

        <tr>
            <td class="td64"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td65"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td66 right-dark"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td67"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td68"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td69 right-dark"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td70"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td71"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td72"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
        </tr>

        <tr>
            <td class="td73"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td74"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td75 right-dark"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td76"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td77"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td78 right-dark"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td79"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td80"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
            <td class="td81"><input type="text"  onkeypress="return isNumberKey(event)" maxlength="1" class="inputcls" onchange="validateSudoku()"></td>
        </tr>
    </tbody>
    </table>

    <div style="text-align: center; margin-top: 25px;">
        <button class="pushable" id="validate">
            <span class="front">
                Validate
            </span>
        </button>
    </div>


    <script src="sudoku.js"></script>

    
</body>
</html>
