$(function() {
    let btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12,
    btn13, btn14, btn15, btn16, btn17, btn18, btn19, btn20;
    let string, result;
    btn1 = $('#button1');
    btn2 = $('#button2');
    btn3 = $('#button3');
    btn4 = $('#button4');
    btn5 = $('#button5');
    btn6 = $('#button6');
    btn7 = $('#button7');
    btn8 = $('#button8');
    btn9 = $('#button9');
    btn10 = $('#button10');
    btn11 = $('#button11');
    btn12 = $('#button12');
    btn13 = $('#button13');
    btn14 = $('#button14');
    btn15 = $('#button15');
    btn16 = $('#button16');
    btn17 = $('#button17');
    btn18 = $('#button18');
    btn19 = $('#button19');
    btn20 = $('#button20');
    let thisarr = [];
    let lookarr = [];
    string = $('.string-p');
    result = $(".result-p");

    var numOfBrackets = 0;
    var isFirst = false;

    function updateStr() {
        string.text(lookarr.join(''));
    }
    updateStr();

    function updateRes() {
        let rev = [...thisarr].reverse();
        var num = parseInt(rev[0]);
        if (num) {
            if (thisarr.length > 0) {
                result.text(eval(thisarr.join('')));
            } else {
                result.text('');
            }
        } else if (rev[0] == '0') {
            if (thisarr.length > 0) {
                result.text(eval(thisarr.join('')));
            } else {
                result.text('');
            }
        } else if (!rev[0]) {
            if (thisarr.length > 0) {
                result.text(eval(thisarr.join('')));
            } else {
                result.text('');
            }
        } else if (rev[0] == ')') {
            if (thisarr.length > 0) {
                result.text(eval(thisarr.join('')));
            } else {
                result.text('');
            }
        }  else if (/[0-9]/.test(rev[0])) {
            if (thisarr.length > 0) {
                var multipler = 100;
                result.text(Math.ceil(eval(thisarr.join('')) * multipler) / multipler);
            } else {
                result.text('');
            }
        } else {
            let unrev = [...rev].reverse();
            unrev.pop();
            result.text(eval(unrev.join('')));
        }
    }
    updateRes();
    btn1.on('click', function() {
        let arrReverse = [...lookarr].reverse();
        if (arrReverse[0] == '%') {
            thisarr.pop();
            thisarr.pop();
            lookarr.pop();
            updateStr();
            updateRes();
        } else if (arrReverse[0] == ')') {
            thisarr.pop();
            lookarr.pop();
            numOfBrackets += 1;
            updateStr();
            updateRes();
        } else if (arrReverse[0] == '(' ) {
            thisarr.pop();
            lookarr.pop();
            numOfBrackets -= 1;
            updateStr();
            updateRes();
        } else if (arrReverse[0] == '×(') {
            thisarr.pop();
            lookarr.pop();
            isFirst = false;
            numOfBrackets -= 1;
            updateStr();
            updateRes();
        } else {
            thisarr.pop();
            lookarr.pop();
            updateStr();
            updateRes();
        }
    });
    btn2.on('click', function() {
        let rev = [...thisarr].reverse();
        var num = parseInt(rev[0]);
        if (num) {
            if (isFirst == false) {
                isFirst = true;
                thisarr.push('*(');
                lookarr.push('×(');
                numOfBrackets += 1;
                updateStr();
                updateRes();
            } else if (isFirst == true) {
                if (numOfBrackets == 1) {
                    isFirst = false;
                    thisarr.push(')');
                    lookarr.push(')');
                    numOfBrackets -= 1;
                    updateStr();
                    updateRes();
                } else if (numOfBrackets > 0) {
                    thisarr.push(')');
                    lookarr.push(')');
                    numOfBrackets -= 1;
                    updateStr();
                    updateRes();
                }
            }
        }  else if (rev[0] == '.') {
        } else if (rev[0] == ')') {
            if (numOfBrackets > 1) {
                thisarr.push(')');
                lookarr.push(')');
                numOfBrackets -= 1;
                updateStr();
                updateRes();
            } else if (numOfBrackets > 0 && isFirst == true) {
                isFirst = false;
                thisarr.push(')');
                lookarr.push(')');
                numOfBrackets -= 1;
                updateStr();
                updateRes();
            } else if (numOfBrackets == 0 && isFirst == false) {
                isFirst = true;
                thisarr.push('*(');
                lookarr.push('×(');
                numOfBrackets += 1;
                updateStr();
                updateRes();
            }
        } else if (rev[0] == '*') {
            isFirst = true;
            thisarr.push('(');
            lookarr.push('(');
            numOfBrackets += 1;
            updateStr();
            updateRes();
        } else if(rev[0] == '0' && isFirst == false) {
            isFirst = true;
            thisarr.push('*(');
            lookarr.push('×(');
            numOfBrackets += 1;
            updateStr();
            updateRes();
        } else if(rev[0] == '0' && isFirst == true) {
            isFirst = false;
            thisarr.push(')');
            lookarr.push(')');
            numOfBrackets -= 1;
            updateStr();
            updateRes();
        } else if (!num && isFirst == false) {
            isFirst = true;
            thisarr.push('(');
            lookarr.push('(');
            numOfBrackets += 1;
            updateStr();
            updateRes();
        } else if (isFirst == true) {
            thisarr.push('(');
            lookarr.push('(');
            numOfBrackets += 1;
            updateStr();
            updateRes();
        }
    });
    btn3.on('click', function() {
        let rev = [...thisarr].reverse();
        let revlook = [...lookarr].reverse();
        var num = parseInt(rev[0]);
        if (num && revlook[0] != '%') {
            thisarr.push('/');
            thisarr.push('100');
            lookarr.push('%');
            updateStr();
            updateRes();
        } else if (rev[0] == '0' && revlook[0] != '%') {
            thisarr.push('/');
            thisarr.push('100');
            lookarr.push('%');
            updateStr();
            updateRes();
        }
    });
    btn4.on('click', function() {
        let rev = [...thisarr].reverse();
        var num = parseInt(rev[0]);
        if (num) {
            thisarr.push('/');
            lookarr.push('÷');
            updateStr();
            updateRes();
        }  else if (rev[0] === ')') {
            thisarr.push('/');
            lookarr.push('÷');
            updateStr();
            updateRes();
        } else if (rev[0] == '0') {
            thisarr.push('/');
            lookarr.push('÷');
            updateStr();
            updateRes();
        }
    });
    btn5.on('click', function() {
        let rev = [...lookarr].reverse();
        if (/[0-9]/.test(rev[0])) {
            thisarr.push('7');
            lookarr.push('7');
            updateStr();
            updateRes();
        } else if (!rev[0]) {
            thisarr.push('7');
            lookarr.push('7');
            updateStr();
            updateRes();
        } else if (rev[0] == '%') {
            thisarr.push('*7');
            lookarr.push('×7');
            updateStr();
            updateRes();
        } else if (rev[0] == ')') {
            thisarr.push('*7');
            lookarr.push('×7');
            updateStr();
            updateRes();
        } else {
            thisarr.push('7');
            lookarr.push('7');
            updateStr();
            updateRes();
        }
    });
    btn6.on('click', function() {
        let rev = [...lookarr].reverse();
        if (/[0-9]/.test(rev[0])) {
            thisarr.push('8');
            lookarr.push('8');
            updateStr();
            updateRes();
        } else if (!rev[0]) {
            thisarr.push('8');
            lookarr.push('8');
            updateStr();
            updateRes();
        } else if (rev[0] == '%') {
            thisarr.push('*8');
            lookarr.push('×8');
            updateStr();
            updateRes();
        } else if (rev[0] == ')') {
            thisarr.push('*8');
            lookarr.push('×8');
            updateStr();
            updateRes();
        } else {
            thisarr.push('8');
            lookarr.push('8');
            updateStr();
            updateRes();
        }
    });
    btn7.on('click', function() {
        let rev = [...lookarr].reverse();
        if (/[0-9]/.test(rev[0])) {
            thisarr.push('9');
            lookarr.push('9');
            updateStr();
            updateRes();
        } else if (!rev[0]) {
            thisarr.push('9');
            lookarr.push('9');
            updateStr();
            updateRes();
        } else if (rev[0] == '%') {
            thisarr.push('*9');
            lookarr.push('×9');
            updateStr();
            updateRes();
        } else if (rev[0] == ')') {
            thisarr.push('*9');
            lookarr.push('×9');
            updateStr();
            updateRes();
        } else {
            thisarr.push('9');
            lookarr.push('9');
            updateStr();
            updateRes();
        }
    });
    btn8.on('click', function() {
        let rev = [...thisarr].reverse();
        var num = parseInt(rev[0]);
        if (/[0-9]/.test(rev[0])) {
            thisarr.push('*');
            lookarr.push('×');
            updateStr();
            updateRes();
        } else if (num) {
            thisarr.push('*');
            lookarr.push('×');
            updateStr();
            updateRes();
        } else if (rev[0] === ')') {
            thisarr.push('*');
            lookarr.push('×');
            updateStr();
            updateRes();
        } else if (rev[0] == '0') {
            thisarr.push('*');
            lookarr.push('×');
            updateStr();
            updateRes();
        } else {}
    });
    btn9.on('click', function() {
        let rev = [...lookarr].reverse();
        if (/[0-9]/.test(rev[0])) {
            thisarr.push('4');
            lookarr.push('4');
            updateStr();
            updateRes();
        } else if (!rev[0]) {
            thisarr.push('4');
            lookarr.push('4');
            updateStr();
            updateRes();
        } else if (rev[0] == '%') {
            thisarr.push('*4');
            lookarr.push('×4');
            updateStr();
            updateRes();
        } else if (rev[0] == ')') {
            thisarr.push('*4');
            lookarr.push('×4');
            updateStr();
            updateRes();
        } else {
            thisarr.push('4');
            lookarr.push('4');
            updateStr();
            updateRes();
        }
    });
    btn10.on('click', function() {
        let rev = [...lookarr].reverse();
        if (/[0-9]/.test(rev[0])) {
            thisarr.push('5');
            lookarr.push('5');
            updateStr();
            updateRes();
        } else if (!rev[0]) {
            thisarr.push('5');
            lookarr.push('5');
            updateStr();
            updateRes();
        } else if (rev[0] == '%') {
            thisarr.push('*5');
            lookarr.push('×5');
            updateStr();
            updateRes();
        } else if (rev[0] == ')') {
            thisarr.push('*5');
            lookarr.push('×5');
            updateStr();
            updateRes();
        } else {
            thisarr.push('5');
            lookarr.push('5');
            updateStr();
            updateRes();
        }
    });
    btn11.on('click', function() {
        let rev = [...lookarr].reverse();
        if (/[0-9]/.test(rev[0])) {
            thisarr.push('6');
            lookarr.push('6');
            updateStr();
            updateRes();
        } else if (!rev[0]) {
            thisarr.push('6');
            lookarr.push('6');
            updateStr();
            updateRes();
        } else if (rev[0] == '%') {
            thisarr.push('*6');
            lookarr.push('×6');
            updateStr();
            updateRes();
        } else if (rev[0] == ')') {
            thisarr.push('*6');
            lookarr.push('×6');
            updateStr();
            updateRes();
        } else {
            thisarr.push('6');
            lookarr.push('6');
            updateStr();
            updateRes();
        }
    });
    btn12.on('click', function() {
        let rev = [...thisarr].reverse();
        var num = parseInt(rev[0]);
        if (num) {
            thisarr.push('-');
            lookarr.push('-');
            updateStr();
            updateRes();
        } else if (rev[0] === ')') {
            thisarr.push('-');
            lookarr.push('-');
            updateStr();
            updateRes();
        } else if (rev[0] === '(') {
            thisarr.push('-');
            lookarr.push('-');
            updateStr();
            updateRes();
        } else if (rev[0] === '*(') {
            thisarr.push('-');
            lookarr.push('-');
            updateStr();
            updateRes();
        } else if (rev[0] == '0') {
            thisarr.push('-');
            lookarr.push('-');
            updateStr();
            updateRes();
        } else if (!rev[0]) {
            thisarr.push('-');
            lookarr.push('-');
            updateStr();
            updateRes();
        }
    });
    btn13.on('click', function() {
        let rev = [...lookarr].reverse();
        if (/[0-9]/.test(rev[0])) {
            thisarr.push('1');
            lookarr.push('1');
            updateStr();
            updateRes();
        } else if (!rev[0]) {
            thisarr.push('1');
            lookarr.push('1');
            updateStr();
            updateRes();
        } else if (rev[0] == '%') {
            thisarr.push('*1');
            lookarr.push('×1');
            updateStr();
            updateRes();
        } else if (rev[0] == ')') {
            thisarr.push('*1');
            lookarr.push('×1');
            updateStr();
            updateRes();
        } else {
            thisarr.push('1');
            lookarr.push('1');
            updateStr();
            updateRes();
        }
    });
    btn14.on('click', function() {
        let rev = [...lookarr].reverse();
        if (/[0-9]/.test(rev[0])) {
            thisarr.push('2');
            lookarr.push('2');
            updateStr();
            updateRes();
        } else if (!rev[0]) {
            thisarr.push('2');
            lookarr.push('2');
            updateStr();
            updateRes();
        } else if (rev[0] == '%') {
            thisarr.push('*2');
            lookarr.push('×2');
            updateStr();
            updateRes();
        } else if (rev[0] == ')') {
            thisarr.push('*2');
            lookarr.push('×2');
            updateStr();
            updateRes();
        } else {
            thisarr.push('2');
            lookarr.push('2');
            updateStr();
            updateRes();
        }
    });
    btn15.on('click', function() {
        let rev = [...lookarr].reverse();
        if (/[0-9]/.test(rev[0])) {
            thisarr.push('3');
            lookarr.push('3');
            updateStr();
            updateRes();
        } else if (!rev[0]) {
            thisarr.push('3');
            lookarr.push('3');
            updateStr();
            updateRes();
        } else if (rev[0] == '%') {
            thisarr.push('*3');
            lookarr.push('×3');
            updateStr();
            updateRes();
        } else if (rev[0] == ')') {
            thisarr.push('*3');
            lookarr.push('×3');
            updateStr();
            updateRes();
        } else {
            thisarr.push('3');
            lookarr.push('3');
            updateStr();
            updateRes();
        }
    });
    btn16.on('click', function() {
        let rev = [...thisarr].reverse();
        var num = parseInt(rev[0]);
        if (num) {
            thisarr.push('+');
            lookarr.push('+');
            updateStr();
            updateRes();
        } else if (rev[0] === ')') {
            thisarr.push('+');
            lookarr.push('+');
            updateStr();
            updateRes();
        } else if (rev[0] == '0') {
            thisarr.push('+');
            lookarr.push('+');
            updateStr();
            updateRes();
        }
    });
    btn17.on('click', function() {
        thisarr = [];
        lookarr =[];
        numOfBrackets = 0;
        isFirst = false;
        string.text('');
        result.text('');
        updateStr();
        updateRes();
    });
    btn18.on('click', function() {
        thisarr.push('0');
        lookarr.push('0');
        updateStr();
        updateRes();
    });
    btn19.on('click', function() {
        let rev = [...lookarr].reverse();
        var num = parseInt(rev[0]);
        var isDot = false;
        for (var i in rev) {
            if (rev[i] == ',') {
                isDot = true;
                break;
            } else if (rev[i] == '×(') {
                isDot = false;
                break;
            } else if (rev[i] == '(') {
                isDot = false;
                break;
            } else if (rev[i] == ')') {
                isDot = false;
                break;
            } else if (rev[i] == '%') {
                thisarr.push('.');
                lookarr.push(',');
                updateStr();
                updateRes();
            } else if (rev[i] == '÷') {
                isDot = false;
                break;
            } else if (rev[i] == '×') {
                isDot = false;
                break;
            } else if (rev[i] == '-') {
                isDot = false;
                break;
            } else if (rev[i] == '+') {
                isDot = false;
                break;
            } else if (rev[i] == '') {
                isDot = false;
                break;
            }
        }
        if (rev[0] == '0' && isDot == false) {
            thisarr.push('.');
            lookarr.push(',');
            updateStr();
            updateRes();
        } else if (num && isDot == false) {
            thisarr.push('.');
            lookarr.push(',');
            updateStr();
            updateRes();
        }
    });
    btn20.on('click', function() {
        let rev = [...lookarr].reverse();
        var num = parseInt(rev[0]);
        if(num && isFirst == false) {
            string.text(lookarr.join(''));
            lookarr = [];
            lookarr.push(eval(thisarr.join('')));
            thisarr = [];
            thisarr.push(...lookarr);
            updateStr();
            updateRes();
        } else if (rev[0] == ')' && isFirst == false) {
            string.text(lookarr.join(''));
            lookarr = [];
            lookarr.push(eval(thisarr.join('')));
            thisarr = [];
            thisarr.push(...lookarr);
            updateStr();
            updateRes();
        } else if (rev[0] == '0' && isFirst == false) {
            string.text(lookarr.join(''));
            lookarr = [];
            lookarr.push(eval(thisarr.join('')));
            thisarr = [];
            thisarr.push(...lookarr);
            updateStr();
            updateRes();
        }
    });
})