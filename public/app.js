/*======================================================================================
From stackoverflow
https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
=======================================================================================*/
function setCookie(name,value,minutes) {
    var expires = "";
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + (minutes*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
}

/*======================================================================================
End of stackoverflow
=======================================================================================*/

function closeNotification(){
    var item = document.querySelector('.notification');
    item.classList.add("notification-closed");
}

function closeNewsletter(){
    var item = document.querySelector('.newsletter');
    item.classList.remove("newsletter-show");
    item.classList.add("newsletter-closed");
    setCookie('lt_newsletter_z','closed',10);
}

window.addEventListener('DOMContentLoaded', (event) => {
    var x = getCookie('lt_newsletter_z');
    if(x){

    }
    else{
        var item = document.querySelector('.newsletter');
        item.classList.add("newsletter-show")
    }
});
