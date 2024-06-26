'use strict';

function formValidation() {
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex;

    if (userid_validation(uid, 5, 12)) {
        if (passid_validation(passid, 7, 12)) {
            if (allLetter(uname)) {
                if (alphanumeric(uadd)) {
                    if (countryselect(ucountry)) {
                        if (allnumeric(uzip)) {
                            if (validateEmail(uemail)) {
                                if (validsex(unsex, ufsex)) {}
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}

function userid_validation(uid, nx, ny) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= ny || uid_len < nx) {
        alert("User Id Should not be empty / length be between " + nx + " to " + ny);
        uid.focus();
        return false;
    }
    return true;
}

function passid_validation(passid, nx, ny) {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= ny || passid_len < nx) {
        alert("Password Should not be empty / length be between " + nx + " to " + ny);
        passid.focus();
        return false;
    }
    return true;
}

function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    } else {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}

function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letters)) {
        return true;
    } else {
        alert('User address must have alphabet characters only');
        uname.focus();
        return false;
    }
}

function countryselect(ucountry) {
    if (ucountry.value == "Default") {
        alert('select your country from the list');
        ucountry.focus();
        return false;
    } else {
        return true;
    }
}

function allnumeric(uzip) {
    var numbers = /^[0-9]+$/;
    if (uzip.value.match(numbers)) {
        return true;
    } else {
        alert('User must have alphabet characters only');
        uname.focus();
        return false;
    }
}

function validateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (uemail.value.match(mailf = format)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        return false;
    }
}

function validsex(unsex, ufsex) {
    x = 0;

    if (unsex.checked) {
        x++;
    }
    if (ufsex.checked) {
        x++;
    }


    if (x == 2) {
        alert('Both Male/Female are checked');
        ufsex.checked = false
        unsex.checked = false
        unsex.focus();
        return false;
    }

    if (x == 0) {
        alert('Select Male/Female');
        umsex.focus();
        return false;
    } else {
        alert('Form Successfully Submitted');
        window.location.reload()
        return true;
    }
}