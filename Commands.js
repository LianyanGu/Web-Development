var options = {
    year: undefined,
    language: undefined,
    name: undefined
};

function onClick() {
    var movieName=document.getElementById("movieName").value;
    console.log(movieName);
}

function changeYear(y) {
    options.year = y;
}

// function test(selectBox) {
//     var op = selectBox.options[selectBox.selectedIndex];
//     console.log(op);
//     options.language = op.value;
// }
//in html code, write test(this)

function getTrailers() {
    options.name = document.getElementById("movieName").value;
    console.log('I am going to run the research logic function with the following parameters:\n');
    console.log(options);
}



function findMovieName() {
    var movieName = document.getElementById("movieName").value;
    document.writeln(movieName);
    console.log('');
}

function langChg() {
    var sel = document.getElementById("lang")

    function getSelectedOption(sel) {
        var opt;
        for (var i = 0, len = sel.options.length; i < len; i++) {
            opt = sel.options[i];
            if (opt.seleted === true) {
                break;
            }
        }
    }
    console.log(sel.options[sel.selectedIndex].text)

}

// var sel=document.getElementById("scripts")
// var opt=sel.options[se1.selectedIndex]
// consol.log(opt.value)