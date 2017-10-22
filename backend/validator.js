export default function validate(obj){
    const regexp_login = /^[a-zA-Z0-9_-]{3,16}$/;
    const regexp_password = /^[a-zA-Z0-9_-]{4,18}$/;
    const regexp_email = /^([a-zA-Z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;

    let errors = {};

    if ( obj.login === '' ){
        errors.login = 'This field is required';
    } else
        if( obj.login.length < 3 || obj.login.length > 16){
            errors.login = 'Length must be between 3 and 16 characters';
        } else
            if ( !regexp_login.test(obj.login) ){
                errors.login = 'Invalid character in the field';
            }

    if ( obj.password === '' ){
        errors.password = 'This field is required';
    } else
        if( obj.password.length < 4 || obj.password.length > 18){
        errors.password = 'Length must be between 3 and 16 characters';
    } else
            if ( !regexp_password.test(obj.password) ){
        errors.password = 'Invalid character in the field';
    }

    if ( obj.email === '' ){
        errors.email = 'This field is required';
    } else if( !regexp_email.test(obj.email) ){
            errors.email = 'Invalid email format or character';
        }




    if (obj.email === undefined){
        delete errors.email
        }




    return {errors, isValid: isEmpty(errors)};
}


function isEmpty(obj) {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}
