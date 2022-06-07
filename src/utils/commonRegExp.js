const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const usernameRegex = /^[a-zA-Z-]+$/;
const nameRegex = /^[a-zA-Z0-9_ ]*$/;
const strongPasswordRegex = "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
const numberRegExp = /^-?[0-9]\d*(\.\d+)?$/;


export {phoneRegExp, usernameRegex, nameRegex, strongPasswordRegex, numberRegExp}