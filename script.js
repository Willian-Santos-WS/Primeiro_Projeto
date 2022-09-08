let tela = document.querySelector('section#tela')
let re = document.getElementById('re')
let guard = document.getElementById('guard')
let op = document.querySelector('div#op')
let on = 0
let t = 0

function off() {
    if (on == 1) {
        tela.style.backgroundColor =  'rgb(11, 11, 90)' 
        on = 0
    } else {
        clean()
        tela.style.backgroundColor = 'white'
        on = 1
    }
} 

function clean() {
    re.innerText = '0'
    guard.innerText = '0'
    op.innerText = ''
}

function centry() {
    re.innerText = '0'
    if (op.innerText == '=') {
        clean()
    }
}

function adicionar(n) {
    if (re.innerText == 0) {
        re.innerText = ''
    } 
    if(re.innerText.length < 13 && op.innerText != '=' && n != '+') {
        re.innerText += n
    }
}

function qualoper() {
    switch (op.innerText) {
        case '': 
            guard.innerText = re.innerText
            break
        case '+':
            guard.innerText = Number(guard.innerText) + Number(re.innerText)
            break
        case '-':
            guard.innerText = Number(guard.innerText) - Number(re.innerText)
            break
        case 'x':
            guard.innerText = Number(guard.innerText) * Number(re.innerText)
            break
        case '/':
            guard.innerText = Number(guard.innerText) / Number(re.innerText)
            break
    }
}

function adicao() {
    if (re.innerText == 0 || re.innerText == '-') {
        re.innerText = 0
    } else {
        qualoper()
        re.innerText = 0
        op.innerText = '+'
        }
    t = 'adicao'
}

function subtracao() {
    if (re.innerText == 0) {
        re.innerText = '-'
    } else {
        qualoper()
        op.innerText = '-'
        re.innerText = '0'
        t = 'subtracao'
    } 
}

function multiplicacao() {
    if(guard.innerText == 0) {
        guard.innerText = re.innerText
        op.innerText = 'x'
        re.innerText = '0'
    } else {
        qualoper()
        op.innerText = 'x'
        re.innerText = '0'
    }
    t = 'multiplicacao'
}

function divisao() {
    if(guard.innerText == 0) {
        guard.innerText = re.innerText
        op.innerText = '/'
        re.innerText = '0'
    } else {
        qualoper()
        op.innerText = '/'
        re.innerText = '0'
    }
    t = 'divisao'
}

function igual() {
    switch (t) {
        case 'adicao':
            re.innerText = (Number(guard.innerText) + Number(re.innerText))
            guard.innerText = ''
            break
        case 'subtracao':
            re.innerText = Number(guard.innerText) - Number(re.innerText)
            guard.innerText = ''
            break
        case 'multiplicacao':
            re.innerText = Number(guard.innerText) * Number(re.innerText)
            guard.innerText = ''
            break
        case 'divisao':
            re.innerText = (Number(guard.innerText) / Number(re.innerText))
            guard.innerText = ''
            break
    }
    if (re.innerText.length > 11) {
        guard.innerText = '...' + re.innerText.substring(11, re.innerText.length)
        re.innerText = re.innerText.substring(0, 11) + '...'
    }
    op.innerText = '='
}

