$ = selector => document.querySelector(selector);

function setSquircle(e) {
    const height = $("#height").value,
        width = $("#width").value;
    let radius = $("#radius").value;
    //cap radius to prevent artifacts
    const max = Math.min(height, width);
    radius = Math.min(radius, max * .4);
    $("#radius").value = radius;
    $("label[for=radius]").innerText = Math.round(radius);
    //set values
    $("#corner").setAttribute("d", generateSvgSquircle(height, width, radius));
    $("svg").style.height = height + "px";
    $("svg").style.width = width.value + "px";
}

$("#radius").addEventListener("input", setSquircle);
$("#height").addEventListener("input", setSquircle);
$("#width").addEventListener("input", setSquircle);

$("#panel").addEventListener("input", function (e) {
    $("label[for=" + e.target.id + "]").innerText = e.target.value;
});
