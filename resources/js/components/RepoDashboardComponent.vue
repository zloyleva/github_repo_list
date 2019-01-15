<template>
    <div>
        <search-repo-component></search-repo-component>
        <repo-list-component
            :repos="repos"
        ></repo-list-component>
    </div>
</template>

<script>
    export default {
        name: "RepoDashboardComponent",
        data(){
          return{
              repos: []
          }
        },
        mounted() {
            axios.get('/api/repo')
                .then(response => {
                    console.log(response)
                    if('data' in response && response.data.data instanceof Array){
                        this.repos = response.data.data;
                    }

            })
                .catch(error => {
                    console.log(error);//Todo add show error
                });
        }
    }
</script>

<style scoped>

</style>
