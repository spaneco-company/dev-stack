window._flashToast = (type, title, settings = {}) => {
    type = type || 'success';

    let options = {
        title: title,
        icon: type,
    }

    options = Object.assign({}, options, settings);

    Toast.fire(options);
}

window._flashMsg = (type, title, msg, settings = {}, fc) => {
    type = type || 'success';

    let options = {
        title: title,
        html: msg,
        icon: type,
        showCloseButton: true,
        // showConfirmButton: response.data.popup.showConfirmButton,
        // confirmButtonText: response.data.popup.confirmButtonText,
        // cancelButtonText: response.data.popup.cancelButtonText
    }

    options = Object.assign({}, options, settings);

    if (fc) {
        if (typeof window[fc] === 'function') {
            fc = window[fc];
        }
    }

    if (!fc) {
        fc = function () {};
    }

    Swal.fire(options).then(fc);
}

window._formatNumber = (price,  digits = 2, locale = 'cs-CZ') => new Intl.NumberFormat(locale, { minimumFractionDigits: digits }).format(price);

window._addTax = (price) => price + ((price*TAX)/100);

window._roundPrice = (price, decimalPlaces = 2) =>  Number(Math.round(price + "e" + decimalPlaces) + "e-" + decimalPlaces);

window._getParsedDate = (date) => date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);