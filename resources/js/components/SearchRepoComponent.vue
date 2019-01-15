<template>
    <form >
        <div class="form-row align-items-center">
            <label class="col-auto col-form-label" for="inlineFormInput">Search repo name</label>
            <div class="col-auto">
                <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Enter repo name">
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-2">Search</button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "SearchRepoComponent",
        mounted() {
            console.log('SearchRepoComponent mounted.')
        }
    }
</script>

<style scoped>

</style>
