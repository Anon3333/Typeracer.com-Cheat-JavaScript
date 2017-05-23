(function() {
    //Get the first word and the rest of the text using forloops to find the correct ID
    var firstWord = null;
    var restOfText = null;
    for(var i = 0; i < 100; i++) {
        if(document.getElementById('nhwRightgwt-uid-'+i.toString())!= null) {
           restOfText = document.getElementById('nhwRightgwt-uid-'+(i.toString())).innerHTML.trim();
            break;
        }
    }
    for(var i = 0; i < 100; i++) {
        if(document.getElementById('nhwMiddlegwt-uid-'+i.toString())!= null) {
           firstWord = document.getElementById('nhwMiddlegwt-uid-'+(i.toString())).innerHTML.trim();
            break;
        }
    }
    firstWord += ' ';
    //merg the strings
    fullText = firstWord + restOfText;
    var inputBox = document.getElementsByClassName('txtInput');
    fullText = fullText.split(' ');
    var currentWord = 1;
    //set first word so when you hit space it goes to the second word, wouldn't work otherwise
    inputBox[0].value = fullText[0];
    //each time you press enter it gets the next word
    document.onkeypress = function() {
        inputBox[0].value = fullText[currentWord];
        currentWord++;
    }
})();
