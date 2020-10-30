((d) => {

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let spansArray = [...d.getElementsByClassName("color-circle")];

    spansArray.forEach(element => {
        let color = getRandomColor();
        element.style.backgroundColor = color;
    })


})(document);



