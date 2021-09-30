<template>

    <div class="calculator">
        
        <input v-model.trim="currentNumber" type="text" class="calculator-input" disabled>

        <div class="calculator-buttons">
            
            <button @click="clear" class="calculator-btn operator">C</button>
            <button @click="subtract" class="calculator-btn operator">←</button>
            <button @click="setPossitiveNegative" class="calculator-btn operator">+/-</button>
            <button @click="getSin" class="calculator-btn operator">Sin</button>
            <button @click="getCos" class="calculator-btn operator">Cos</button>

            <button @click="addNumber(7)" class="calculator-btn">7</button>
            <button @click="addNumber(8)" class="calculator-btn">8</button>
            <button @click="addNumber(9)" class="calculator-btn">9</button>
            <button @click="calculateSqrt" class="calculator-btn operator">√</button>
            <button @click="getTan" class="calculator-btn operator">Tan</button>
            
            <button @click="addNumber(4)" class="calculator-btn">4</button>
            <button @click="addNumber(5)" class="calculator-btn">5</button>
            <button @click="addNumber(6)" class="calculator-btn">6</button>
            <button @click="calculatePow" class="calculator-btn operator">xⁿ</button>
            <button @click="calculatePercentage" class="calculator-btn operator">%</button>
           
            <button @click="addNumber(1)" class="calculator-btn">1</button>
            <button @click="addNumber(2)" class="calculator-btn">2</button>
            <button @click="addNumber(3)" class="calculator-btn">3</button>
            <button @click="getOperator('/')" class="calculator-btn operator">÷</button>
            <button @click="getOperator('*')" class="calculator-btn operator">x</button>
            
            <button @click="addNumber(0)" class="calculator-btn">0</button>
            <button @click="addDot" class="calculator-btn">•</button>
            <button @click="getOperator('-')" class="calculator-btn operator">-</button>
            <button @click="getOperator('+')" class="calculator-btn operator">+</button>
            <button @click="showAnswer" class="calculator-btn operator">=</button>

        </div>

    </div>

</template>

<script>
import { watch } from 'vue'

// composables => mixin
import useCalculator from '@/composables/useCalculator'

export default {
    setup(){
        // load calculator - load calculator logic
        const {
            currentNumber,
            clear, subtract, addNumber, setPossitiveNegative,
            addDot, getOperator, showAnswer, calculatePercentage,
            getSin, getCos, getTan, calculateSqrt, calculatePow,
            normalaizeNumber
        } = useCalculator()

        // watch
        watch(currentNumber, (value) => {
            // if number be empty come add 0
            if(value == '' || value == '-'){
                currentNumber.value = '0'
                return
            }

            // explode or remove (,) and then give (,) because when number have (,) is not a number so cant add another (,)
            value = normalaizeNumber(value)

            // if exist (.) dont come add (,) because dont need and also not be ∞ infinity 
            if(!value.includes('.') && value != '∞')
                // come add (,) to the number
                currentNumber.value = Number(value).toLocaleString()
        })

        return { 
            currentNumber,
            clear, subtract, addNumber, setPossitiveNegative,
            addDot, getOperator, showAnswer, calculatePercentage,
            getSin, getCos, getTan, calculateSqrt, calculatePow
        }
    }
}
</script>

<style src="@/assets/calculator.css"></style>