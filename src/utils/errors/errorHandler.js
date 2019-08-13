export const findError = err => {
    let newError = {};
    err.forEach(obj => {
        if (newError[obj.path]) {
            newError[obj.path].push(obj.message);
        } else {
            newError[obj.path] = [];
            newError[obj.path].push(obj.message);
        }
    });

    return newError;
};

const errorPath = {
    login: { horizontal: "center", verical: "top" },
    network: { horizontal: "center", verical: "top" },
    email: { horizontal: "right", verical: "top" },
    mobile: { horizontal: "right", verical: "top" },
    register: { horizontal: "bottom", verical: "left" },
    logout: { horizontal: "right", verical: "bottom" },
    forgotPassword: { horizontal: "center", verical: "top" }
};

// errors with path + message
export const snackBarGen = errorState => {
    const snackBarData = [];
    const variant = "error";
    errorState.forEach(({ path, message }) => {
        const anchors = errorPath[path] ? errorPath[path] : null;
        snackBarData.push({
            anchors,
            message,
            variant,
            path
        });
    });
    return snackBarData;
};

export const removeMe = err => {
    function isNotMe(value) {
        if (value.path !== "me") return;
    }

    return err.filter(isNotMe);
};
