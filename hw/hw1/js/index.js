const g = document.querySelector('g');
const circle = document.querySelector('circle');

document.getElementById("mood").checked = true;

function changeMood(thecheckbox, Moodlabel, svgPath) {

    var checkboxvar = document.getElementById(thecheckbox);
    var valueLabel = document.getElementById(Moodlabel);
    if (!checkboxvar.checked) {
        valueLabel.innerHTML = "Sad";
        document.getElementById('svg').setAttribute('d','M150 200 Q 225 120 300 200');
    }
    else {
        valueLabel.innerHTML = "Happy";
        document.getElementById('svg').setAttribute('d','M150 200 Q 225 300 300 200');
    }
}
