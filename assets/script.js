
var counter = 1;
if (counter <= 3) {
    setInterval(() => {
        document.getElementById('Slider').style.background = `url('/assets/image/slider${counter}.jpg') top center / cover no-repeat`
        switch (counter) {
            case 1:
                document.getElementsByClassName('Slider__txt-heading')[0].innerHTML = "New York"
                document.getElementsByClassName('Slider__txt-content')[0].innerHTML = "The atmosphere in New York is lorem ipsum."
                break;
            case 2:
                document.getElementsByClassName('Slider__txt-heading')[0].innerHTML = "Chicago"
                document.getElementsByClassName('Slider__txt-content')[0].innerHTML = "Thank you, Chicago - A night we won't forget."

                break;
            case 3:
                document.getElementsByClassName('Slider__txt-heading')[0].innerHTML = "Los Angeles"
                document.getElementsByClassName('Slider__txt-content')[0].innerHTML = "We had the best time playing at Venice Beach!"

                break;
            default:
                document.getElementsByClassName('Slider__txt-heading')[0].innerHTML = "New York"
                document.getElementsByClassName('Slider__txt-content')[0].innerHTML = "The atmosphere in New York is lorem ipsum."
                break;
        }
        counter++;
        if (counter === 4) {
            counter = 1;
        }
    }, 3000)
};
for (var i = 0; i < document.getElementsByClassName('btnBuy').length; i++) {
    document.getElementsByClassName('btnBuy')[i].onclick = () => {
        document.getElementById('buyModal').style.display = "block";
    }
}
for (var i = 0; i < document.getElementsByClassName('btnClose').length; i++) {
    document.getElementsByClassName('btnClose')[i].onclick = () => {
        document.getElementById('buyModal').style.display = "none";
    }
}

