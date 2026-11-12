// ملف كلمة السر والتحقق الخاص بالأدمن
const ADMIN_PASSWORD = "123123";

// التحقق من صحة الباسورد
function verifyAdminPassword(password) {
    return password === ADMIN_PASSWORD;
}