<template>
    <div>
        <repo-list-element-component v-for="repo in repos" :key="repo.id" :repo="repo"></repo-list-element-component>
    </div>
</template>

<script>
    export default {
        name: "RepoListComponent",
        data(){
          return{

          }
        },
        props:[
            "repos"
        ],
        mounted(){
            console.log("RepoListComponent");
        }
    }
</script>

<style scoped>

</style>
