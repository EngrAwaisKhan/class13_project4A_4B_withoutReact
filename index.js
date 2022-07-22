var planeElement = document.getElementById('plane-div');

var planeAnimation = planeElement.animate(
    [
        {transform: 'translate(0, 0)', position:'fixed'},
        {transform: 'translate(100, 0)', position:'fixed'},
        {transform: 'translate(350px, -420px)', position:'fixed'},
        {transform: 'translate(430px, -420px)', position:'fixed'},
        {transform: 'translate(900px, 30px)', position:'fixed'},
        {transform: 'translate(1000px, 30px)', position:'fixed'},
    ],{
        duration: 5000,
        iterations:Infinity
    }
);

var cloudsElement1 = document.getElementById('cloud1');

var cloudsAnimation1 = cloudsElement1.animate(
    [
        {transform: 'translate(600px, 0)'},
        {transform: 'translate(0, 0)'},
    ],
    {
        duration:8000,
        iterations:Infinity
    }
);
var cloudsElement2 = document.getElementById('cloud2');

var cloudsAnimation2 = cloudsElement2.animate(
    [
        {transform: 'translate(-500px, 0)'},
        {transform: 'translate(0, 0)'},
    ],
    {
        duration:30000,
        iterations:Infinity
    }
);