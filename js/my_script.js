var current_temp = "k_btn";
var current_x = "";
var count = 0;
var re_calc = true;
var del_count = 0;

function change_temp() {
    let btn_id = event.target.id;
    document.querySelectorAll("button").forEach((btn) => {
        if (btn.id === btn_id) {
            btn.classList.remove("btn");
            btn.classList.add("btn-selected");
            current_temp = btn.id;
        } else {
            btn.classList.remove("btn-selected");
            btn.classList.add("btn");
        }
    });

    if (btn_id === "k_btn") {
        document.getElementById("t1").placeholder = "°K";
        document.getElementById("t2").placeholder = "°K";
    } else if (btn_id === "c_btn") {
        document.getElementById("t1").placeholder = "°C";
        document.getElementById("t2").placeholder = "°C";
    } else if (btn_id === "f_btn") {
        document.getElementById("t1").placeholder = "°F";
        document.getElementById("t2").placeholder = "°F"; 
    }
}

function calculate(a, b, c, x, y) {
    return ((a * b * c) / (x * y));
}

function c_t_k(c) {
    return 273.15 + parseFloat(c);
}

function f_t_k(f) {
    return ((f - 32) * (5 / 9)) + 273.15;
}

function k_to_c(k) {
    return k - 273.15;
}

function k_to_f(k) {
    return ((k - 273.15) * (9 / 5)) + 32;
}

function check() {
    count = 0;
    del_count = 0;
    if (current_x !== "") {
        document.getElementById(current_x).classList.remove("calculated");
    }

    document.querySelectorAll("input").forEach((fl) => {
        if (fl.value.length > 0) {
            count += 1;
        }
    })

    if (!re_calc) {
        document.querySelectorAll("input").forEach((fl) => {
            if (fl.value.length === 0) {
                del_count += 1;
            }
        })
        if (del_count >= 2) {
            re_calc = true;
        }
    }

    if (count === 5 && re_calc) {
        var b1 = document.getElementById("b1");
        var b2 = document.getElementById("b2");
        var p1 = document.getElementById("p1");
        var p2 = document.getElementById("p2");
        var t1 = document.getElementById("t1");
        var t2 = document.getElementById("t2");

        if (b1.value.length === 0) {
            if (current_temp === "k_btn") {
                b1.value = calculate(t1.value, b2.value, p2.value, t2.value, p1.value).toFixed(2);
            } else if (current_temp === "c_btn") {
                b1.value = calculate(c_t_k(t1.value), b2.value, p2.value, c_t_k(t2.value), p1.value).toFixed(2);
            } else if (current_temp === "f_btn") {
                b1.value = calculate(f_t_k(t1.value), b2.value, p2.value, f_t_k(t2.value), p1.value).toFixed(2);
            }
            current_x = b1.id;
        } else if (b2.value.length === 0) {
            if (current_temp === "k_btn") {
                b2.value = calculate(t2.value, b1.value, p1.value, t1.value, p2.value).toFixed(2);
            } else if (current_temp === "c_btn") {
                b2.value = calculate(c_t_k(t2.value), b1.value, p1.value, c_t_k(t1.value), p2.value).toFixed(2);
            } else if (current_temp === "f_btn") {
                b2.value = calculate(f_t_k(t2.value), b1.value, p1.value, f_t_k(t1.value), p2.value).toFixed(2);
            }
            current_x = b2.id;
        } else if (p1.value.length === 0) {
            if (current_temp === "k_btn") {
                p1.value = calculate(t1.value, b2.value, p2.value, t2.value, b1.value).toFixed(2);
            } else if (current_temp === "c_btn") {
                p1.value = calculate(c_t_k(t1.value), b2.value, p2.value, c_t_k(t2.value), b1.value).toFixed(2);
            } else if (current_temp === "f_btn") {
                p1.value = calculate(f_t_k(t1.value), b2.value, p2.value, f_t_k(t2.value), b1.value).toFixed(2);
            }
            current_x = p1.id;
        } else if (p2.value.length === 0) {
            if (current_temp === "k_btn") {
                p2.value = calculate(t2.value, b1.value, p1.value, t1.value, b2.value).toFixed(2);
            } else if (current_temp === "c_btn") {
                p2.value = calculate(c_t_k(t2.value), b1.value, p1.value, c_t_k(t1.value), b2.value).toFixed(2);
            } else if (current_temp === "f_btn") {
                p2.value = calculate(f_t_k(t2.value), b1.value, p1.value, f_t_k(t1.value), b2.value).toFixed(2);
            }
            current_x = p2.id;
        } else if (t1.value.length === 0) {
            if (current_temp === "k_btn") {
                t1.value = calculate(t2.value, b1.value, p1.value, b2.value, p2.value).toFixed(2);
            } else if (current_temp === "c_btn") {
                t1.value = calculate(c_t_k(t2.value), b1.value, p1.value, b2.value, p2.value).toFixed(2) + " °K";
            } else if (current_temp === "f_btn") {
                t1.value = calculate(f_t_k(t2.value), b1.value, p1.value, b2.value, p2.value).toFixed(2) + " °K";
            }
            current_x = t1.id;
        } else if (t2.value.length === 0) {
            if (current_temp === "k_btn") {
                t2.value = calculate(t1.value, b2.value, p2.value, b1.value, p1.value).toFixed(2);
            } else if (current_temp === "c_btn") {
                t2.value = calculate(c_t_k(t1.value), b2.value, p2.value, b1.value, p1.value).toFixed(2) + " °K";
            } else if (current_temp === "f_btn") {
                t2.value = calculate(f_t_k(t1.value), b2.value, p2.value, b1.value, p1.value).toFixed(2) + " °K";
            }
            current_x = t2.id;
        }
        document.getElementById(current_x).classList.add("calculated");
        count = 0;
        re_calc = false;
    }
}

function clr_all() {
    count = 0;
    document.querySelectorAll("input").forEach((fl) => {
        fl.value = "";
    })
}

// b1 = t1 * b2 * p2 / (t2 * p1)
// b2 = t2 * b1 * p1 / (t1 * p2)
// p1 = t1 * b2 * p2 / (t2 * b1)
// p2 = t2 * b1 * p1 / (t1 * b2)
// t1 = calculate(t2, b1, p1, b2, p2);
// t2 = calculate(t1, b2, p2, b1, p1);