import { ref } from 'vue'

// use audio - load audio - composables => mixin
import useAudio from '@/composables/useAudio'

export default () => {
    // data
    const currentNumber = ref('0')
    const operator = ref('')
    const prevNumber = ref('0')

    // load audio
    const { sound } = useAudio()

    // methods
    const clear = () => {
        // reset the calculator
        currentNumber.value = '0'
        prevNumber.value = '0'

        // play click's sound
        sound.play()
    }   

    const subtract = () => {
        // subtract or low-off of number
        const lenght = currentNumber.value.length
        currentNumber.value = currentNumber.value.substring(0, lenght - 1)
        
        // play click's sound
        sound.play()
    }

    const addNumber = (number) => {
        // play click's sound
        sound.play()

        // if currentNumber only be 0 come remove 0 for adding another number
        if(currentNumber.value == '0')
            currentNumber.value = '' 

        // if number lenght be grand than 15 come back
        if(currentNumber.value.length > 15) return 

        // add number
        currentNumber.value += number
    }

    const setPossitiveNegative = () => {
        // if number be possitive come chane to negative
        if(Number(normalaizeNumber(currentNumber.value)) > 0)
            currentNumber.value = '-' + currentNumber.value

        // else number be negative come change to possitive
        else
            currentNumber.value = currentNumber.value.substr(1)
        
        // play click's sound
        sound.play()
    }

    const addDot = () => {
        // play click's sound
        sound.play()

        // if exist (.) in the number come back
        if(currentNumber.value.includes('.')) return

        // add (.) to the number
        currentNumber.value += '.'
    }

    const getOperator = (value) => {
        // play click's sound
        sound.play()

        // get operator
        operator.value = value

        // if not be any thing to current number come not add into the prev and come back
        if(currentNumber.value == '0') return

        // pour current number to prev number
        prevNumber.value = normalaizeNumber(currentNumber.value)

        // get ready for getting new numbers
        currentNumber.value = '0'
    }

    const showAnswer = () => {
        // play click's sound
        sound.play()

        // if everything not be ok and we have not operator and prev come back and dont calculate 
        if(prevNumber.value == '0' && operator.value == '') return

        let answer;

        // if operator be Pow come calculate by base POW
        if(operator.value == '^'){
            answer = Math.pow(Number(prevNumber.value), Number(normalaizeNumber(currentNumber.value)))
        }
        else {
            // if calculate by base normal come calculate 
            answer = eval(prevNumber.value + operator.value + normalaizeNumber(currentNumber.value))
        }

        // show answer to the app
        currentNumber.value = String(answer)

        resetCalculator()
    }

    const calculatePercentage = () => {
        // play click's sound
        sound.play()

        // if not be prev and operator dont come continew because you cant calculate
        if(prevNumber.value == '0' && operator.value == '') return

        // calculate percentage => %
        const step1 = {
            num1: Number(prevNumber.value) / 100,
            num2: Number(normalaizeNumber(currentNumber.value)) / 100
        }

        // step 2 => get left or what should subtract or increase
        const step2 = {
            left: step1.num1 * step1.num2 * 100
        }

        // final step => answer
        let answer;

        // come show answer by base operator - for increasing or subtracting value
        switch(operator.value){
            case '+':
                answer = Number(prevNumber.value) + step2.left
                break;

            case '-':
                answer = Number(prevNumber.value) - step2.left
                break;
        }

        // show answer to the app
        currentNumber.value = answer.toString()

        resetCalculator()
    }   

    const resetCalculator = () => {
        // reset prev and operator
        prevNumber.value = '0'
        operator.value = ''            
    }

    const normalaizeNumber = (value) => {
        // explode or remove (,) and then give (,) because when number have (,) is not a number so cant add another (,)
        value = value.split(',')

        return value.reduce((string, item) => string += item, '')
    }

    const getSin = () => {
        // get answer
        const answer = Math.sin(Number(normalaizeNumber(currentNumber.value)))

        // show answer in the app
        currentNumber.value = answer.toString()

        // reset calculator
        resetCalculator()

        // play click's sound
        sound.play()
    }

    const getCos = () => {
        // get answer
        const answer = Math.cos(Number(normalaizeNumber(currentNumber.value)))

        // show answer in the app
        currentNumber.value = answer.toString()

        // reset calculator
        resetCalculator()
        
        // play click's sound
        sound.play()
    }

    const getTan = () => {
        // get answer
        const answer = Math.tan(Number(normalaizeNumber(currentNumber.value)))

        // show answer in the app
        currentNumber.value = answer.toString()

        // reset calculator
        resetCalculator()
        
        // play click's sound
        sound.play()
    }

    const calculateSqrt = () => {
        // play click's sound
        sound.play()

        // if number less than 0 it meaning of negative and cant calculate
        if(Number(normalaizeNumber(currentNumber.value)) < 0) {
            alert('should be a possitive number')
            return
        }

        // get answer
        const answer = Math.sqrt(Number(normalaizeNumber(currentNumber.value)))

        // show answer in the app
        currentNumber.value = answer.toString()

        // reset calculator
        resetCalculator()
    }

    const calculatePow = () => {
        // come put current number to prev and if clicked (=) come show answer 
        prevNumber.value = normalaizeNumber(currentNumber.value)
        currentNumber.value = '0'
        operator.value = '^'

        // play click's sound
        sound.play()
    }

    return { 
        currentNumber,
        clear, subtract, addNumber, setPossitiveNegative,
        addDot, getOperator, showAnswer, calculatePercentage,
        getSin, getCos, getTan, calculateSqrt, calculatePow,

        // helps
        normalaizeNumber
    }
}