$ = selector => document.querySelector(selector);

function setSquircle() {
    $("#corner").setAttribute("d", generateSvgSquircle($("#height").value / 3, $("#width").value / 3, $("#radius").value));
    $("svg").style.height = $("#height").value / 3 + "px";
    $("svg").style.width = $("#width").value / 3 + "px";
}

$("#radius").addEventListener("input", setSquircle);
$("#height").addEventListener("input", setSquircle);
$("#width").addEventListener("input", setSquircle);

$("#panel").addEventListener("input", function (e) {
    $("label[for=" + e.target.id + "]").innerText = e.target.value;
});
