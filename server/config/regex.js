module.exports.NAME_REGEX = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/;
module.exports.EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
module.exports.MOBILE_REGEX = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
module.exports.PASSWORD_REGEX = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/;