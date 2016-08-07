<script>
    var options={
        year:undefined,
        language:undefined,
        name:undefined
    };
function myClick(){
    console.log('Coucou Lianyan');
alert('hi');
}

function changeYear(y){
    options.year=y;
}
    function test(selectBox) {
        var op = selectBox.options[selectBox.selectedIndex];
        console.log(op);
        options.language = op.value;
    }
function getTrailers(){
    options.name = document.getElementById("movieName").value;
    console.log('I am going to run the research logic function with the following parameters:\n');
    console.log(options);
}
</script>

<script>
    function findMovieName(){
        var movieName = document.getElementById("movieName").value;
        document.writeln(movieName);
        console.log('Coucou Lianyan');
    }
</script>