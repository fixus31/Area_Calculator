const triangleCalc = (b, h) => {

    result = (b * h) / 2
    
    return {
        result: result,
        b: b,
        h: h
    }
}

const rectCalc = (l, w) => {

    result = l * w
    return {
        result: result

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

document.querySelector('.press').onclick = function (e) {
    e.preventDefault()

    let width = document.querySelector('.w').value,
        length = document.querySelector('.l').value

    let rec_res = rectCalc(width, length)

    document.querySelector('.resrect').innerText = rec_res.result
}
