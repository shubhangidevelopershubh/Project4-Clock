'use strict';

function f1() {
    var result = document.getElementById("fName").value;
    var pattern = /[a-zA-Z]{1}/;
    if (pattern.test(result)) {
        window.alert("first name validated")
    } else {
        window.alert("first name not validated")

    }
}

function f2() {
    var result = document.getElementById("sName").value;
    var pattern = /[a-zA-Z]{1}/;
    if (pattern.test(result)) {
        window.alert("second name validated")
    } else {
        window.alert("second name not validated")

    }
}

function f3() {
    var result = document.getElementById("mNumber").value;
    var pattern = /^[0-9]{10}$/;
    //var pattern = /[0-9]{1}/;
    if (pattern.test(result)) {
        window.alert("mobile number validated")
    } else {
        window.alert("mobile number not validated")

    }
}

function f4() {
    var result = document.getElementById("eId").value;
    var pattern = /^[a-z0-9]{1}[a-z0-9._]{0,}\@[a-z0-9]{1}[a-z0-9]{1,}\.[a-z]{2}[a-zA-Z.]{0,}$/i;
    if (pattern.test(result)) {
        window.alert("email id validated")
    } else {
        window.alert("email id not validated")

    }
}