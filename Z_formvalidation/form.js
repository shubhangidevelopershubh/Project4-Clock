/*'use strict'

function chkAllLetter(result) {
    var pattern = /^[a-zA-Z]+$/;
    if (result.value.match(pattern)) {
        window.alert("ok");
        return true;
    } else {
        window.alert("not ok");
        return false;
    }
}*/

'use strict'


function chkAllLetter(inputtedTxt) {

    var pattern = /^[a-zA-z]+$/;
    if (inputtedTxt.value.match(pattern)) {
        window.alert("Your Name Have Accepted.... Proceed to next.!!");
        return true;
    } else {
        window.alert("Plase Enter Aphabet Only..!");
        return false;
    }


}