const triangleCalc = (b, h) => {

    result = (b * h) / 2
    
    return {
        result: result,
        b: b,
        h: h
    }
}


document.querySelector('.push').onclick = function (el) {
    el.preventDefault()

    let base = document.querySelector('.b').value,
        height = document.querySelector('.h').value

    let answer = triangleCalc(base, height)

    console.log(answer.result)
   
    document.querySelector('.result').innerText = answer.result

}