export default function setCookie(name: string, value: JSON, days?: number) {

    var expires = ""

    if (days) {
        var date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        expires = " Expires=" + date.toUTCString() + ';'
    }

    document.cookie = name + "=" + (JSON.stringify(value) || "") + ';' + expires + " Path=/;" + " SameSite=None; Secure"
    
}