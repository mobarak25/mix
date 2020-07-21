<template>
    <footer class="footer">
        <div class="container">
            <p>Copyright &copy; {{fullYear}} X Index Companies | Developed by X Index IT</p>
        </div>
    </footer>
</template>
<script>
export default {
    data(){
        return{
            fullYear: new Date().getFullYear(),
        }
    }
}
</script>