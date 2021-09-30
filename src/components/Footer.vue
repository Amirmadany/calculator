<template>

    <footer class="footer">

        <a href="https://github.com/Amirmadany/calculator" class="footer-link">
    
            <span class="footer-link-content">GitHub</span>

            <div class="footer-link-logo">
                <img src="@/assets/github.svg" alt="">
            </div>

        </a>

    </footer>

</template>

<script>
export default {

}
</script>

<style scoped>

    .footer{
        position: fixed;
        bottom: 0;
        left: 0;
        background: white;
        box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.13);
        width: 100%;
        text-align: center;
        padding: 0.5rem 0;
        font-size: 1rem;
    }

    .footer-link{
        text-decoration: none;
        color: #000;
        display: flex;
        align-content: center;
        justify-content: center;
        font-weight: bold;
    }

    .footer-link-content{
        transform: translateY(0.34rem);
    }

</style>