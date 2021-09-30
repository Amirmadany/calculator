<template>

    <main>

        <Calculator />

    </main>

    <Footer />

</template>

<script>
// components
import Calculator from '@/components/Calculator'
import Footer from '@/components/Footer'

export default {
    components: {
        Calculator,
        Footer
    }
}
</script>

<style>

    *{
        box-sizing: border-box;
        margin: 0;
    }

</style>