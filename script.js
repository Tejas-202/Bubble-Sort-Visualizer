var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var main = document.querySelector('.container');
var done_btn = document.querySelector('.done_btn');
let timeout=1000;

modalBtn.addEventListener('click', function() {
    modalBg.classList.add('bg-active');
    const numberOfValues = document.getElementById('input_number').value;
    const values = document.getElementById("input_value").value;
    const arr = values.split(",").map(e => parseInt(e,10))
    for(let i=0; i<numberOfValues; i++) {
        var square = document.createElement('div');
        square.setAttribute('id', i);
        main.append(square);
        square.innerHTML = arr[i];
    }
    bubble_sort(numberOfValues);
});

function bubble_sort(numberOfValues) {
    for(let i=0; i<numberOfValues-1; i++) {
        for(let j=0; j<numberOfValues-i-1; j++) {
            setTimeout(() => {
                if(document.getElementById(j).innerHTML > document.getElementById(j+1).innerHTML) {
                    if(j>0) {
                        document.getElementById(j-1).style.backgroundColor = "yellow";
                        document.getElementById(j).style.backgroundColor = "yellow";
                    }
                    document.getElementById(j).style.backgroundColor = "red";
                    document.getElementById(j+1).style.backgroundColor = "red";
                    setTimeout(() => {
                        let temp = document.getElementById(j).innerHTML;
                        document.getElementById(j).innerHTML = document.getElementById(j+1).innerHTML;
                        document.getElementById(j+1).innerHTML = temp;
                    },1000)
                    if(j === numberOfValues-i-2) {
                        setTimeout(() => {
                            document.getElementById(j).style.backgroundColor = "yellow";
                            document.getElementById(j+1).style.backgroundColor = "yellow";
                        },2000);
                    }
                }
            },timeout);
            timeout += 2000;
        }
    }
}
