export const removeCountryCode = ( n ) => {
    let number;
    if ( n.startsWith( "+355" ) ) {
        number = n.replace( '+355', '' )
    } else if ( n.startsWith( "+30" ) ) {
        number = n.replace( '+30', '' )
    } else if ( n.startsWith( "+47" ) ) {
        number = n.replace( '+47', '' )
    } else if ( n.startsWith( "+44" ) ) {
        number = n.replace( '+44', '' )
    } else {
        number = n;
    }
    return number;
}

export const setCountryCode = ( n ) => {
    let cc;
    if ( n.startsWith( "+355" ) ) {
        cc = '+355'
    } else if ( n.startsWith( "+30" ) ) {
        cc = '+30'
    } else if ( n.startsWith( "+47" ) ) {
        cc = '+47'
    } else if ( n.startsWith( "+44" ) ) {
        cc = '+44'
    } else {
        cc = null
    }
    return cc;
}

export const isValidNumber = ( x ) => {
    return /(^$|^\d*$)/.test( x )
}

export const isValidName = ( x ) => {
    return /^[A-Za-z]*$/.test( x )
}


const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const isValidEmail = ( x ) => {
    return emailPattern.test( x.trim() );
}