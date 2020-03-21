$ = selector => document.querySelector(selector);
$("#radius").addEventListener("input", function () {
    $("#corner").setAttribute("d", generateSvgSquircle(80,80, $("#radius").value))
});
