var cookie = document.cookie;
var qq = "times";


function getCookieByName(name) {
    return cookie.substring(name.length + 1, cookie.length);
}


var cookieAS = getCookieByName("times");
document.write(cookieAS);