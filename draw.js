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
    $("svg").style.height = height + "px";
    $("svg").style.width = width + "px";
    $("#corner").setAttribute("d", generateSvgSquircle(height, width, radius));
    $("#div").style.borderRadius = radius + "px";
    $("#div").style.height = height - 1 + "px";
    $("#div").style.width = width - 1 + "px";
}

$("#radius").addEventListener("input", setSquircle);
$("#height").addEventListener("input", setSquircle);
$("#width").addEventListener("input", setSquircle);

$("#panel").addEventListener("input", function (e) {
    if (e.target.type !== "range") return;
    $("label[for=" + e.target.id + "]").innerText = e.target.value;
});

$("#toggle input").addEventListener("input", function (e) {
    if (e.target.checked) {
        $("#canvas svg").style.opacity = "1";
        $("#div").style.opacity = "0";
    } else {
        $("#canvas svg").style.opacity = "0";
        $("#div").style.opacity = "1";
    }
});

