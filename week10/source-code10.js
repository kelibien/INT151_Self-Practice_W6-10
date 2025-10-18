class CookieUtil {
  static get(name) {
    let cookieName = `${encodeURIComponent(name)}=`,
      cookieStart = document.cookie.indexOf(cookieName),
      cookieValue = null
    if (cookieStart > -1) {
      let cookieEnd = document.cookie.indexOf(';', cookieStart)
      if (cookieEnd === -1) {
        cookieEnd = document.cookie.length
      }
      cookieValue = decodeURIComponent(
        document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
      )
    }
    return cookieValue
  }
  static set(name, value, expires) {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
    if (expires instanceof Date) {
      console.log(expires)
      cookieText += `;expires=${expires}`
    }
    document.cookie = cookieText
    console.log(document.cookie)
  }
  //to remove existing cookies, setting the cookie again—with the same path, domain, and secure options—and set its expiration date to some time in the past.
  static unset(name) {
    //set to a blank string and the expiration date set to January 1, 1970 (the value of a Date object initialized to 0 milliseconds).
    CookieUtil.set(name, '', new Date(0)) //or max-age=0
  }
} //ending class
export { CookieUtil }




document.addEventListener("DOMContentLoaded", () => {
    const saveBg = localStorage.getItem("bgColor");
    const saveFont = localStorage.getItem("fontColor");
    const saveSize = localStorage.getItem("fontSize");

    if(saveBg) document.body.style.backgroundColor = saveBg;
    if(saveFont) document.body.style.color = saveFont;
    if(saveSize) document.body.style.fontSize = saveSize;

    if(saveBg) document.getElementById("bgColor").value = saveBg;
    if(saveFont) document.getElementById("fontColor").value = saveFont;
    if(saveSize) document.getElementById("fontSize").value = saveSize;
});

function applyFontSize(size) {
    if(size === "small") document.body.style.fontSize = "14px";
    else if(size === "medium") document.body.style.fontSize = "18px";
    else if(size === "large") document.body.style.fontSize = "22px";
}

document.getElementById("saveBtn").addEventListener("click", () => {
    const bgColor = document.getElementById("bgColor").value;
    const fontColor = document.getElementById("fontColor").value;
    const fontSize = document.getElementById("fontSize").value;

    localStorage.setItem("bgColor", bgColor);
    localStorage.setItem("fontColor", fontColor);
    localStorage.setItem("fontSize", fontSize);

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = fontColor;
    document.body.style.fontSize = fontSize;

    alert("บันทึกการตั้งค่า")
});

document.getElementById("resetBtn").addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});