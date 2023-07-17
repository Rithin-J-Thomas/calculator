var result = document.getElementById("display")

function displayData(num){
    result.value += num
}


function back(){
    result.value = result.value.slice(0,-1)
}


function equalss() {
    result.value =eval(result.value)
}