<template>
    <div v-if="this.showData" class="d-flex">
        <div class="col-4">
            <img :src="repoData.owner.avatar_url" class="mr-3 w-100" alt="">
        </div>
        <div class="media-body col-8">
            <h5 class="mt-0 Repo__Name">Repository: {{repoData.name}}</h5>
            <div class="Repo__Author">Author: {{repoData.owner.login}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SingleRepoComponent",
        data(){
            return{
                repoData: {},
                showData: false
            }
        },
        props:[
            "owner", "repo"
        ],
        mounted() {
            const {owner, repo} = this;

            axios.get(`/api/repo/${owner}/${repo}`)
                .then(response => {
                    console.log(response);
                    if('data' in response && response.data.data instanceof Object){
                        this.repoData = response.data.data;
                        this.showData = true;
                    }

                })
                .catch(error => {
                    console.log(error);//Todo add show error
                });
        },
    }
</script>

<style scoped>

</style>

<!--Todo no data msg-->
