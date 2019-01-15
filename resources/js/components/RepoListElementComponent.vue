<template>
    <div class="media my-2">
        <div class="col-2">
            <img :src="repo.owner.avatar_url" class="mr-3" alt="">
        </div>
        <div class="media-body col-8">
            <a :href="'repo/' + repo.owner.login + '/' + repo.name">
                <h5 class="mt-0 Repo__Name">{{repo.name}}</h5>
            </a>
            <div class="Repo__Author">{{repo.owner.login}}</div>
        </div>
        <div class="col-2 d-flex align-items-center justify-content-around">
            <a href="#" class="Like__Control"><font-awesome-icon icon="thumbs-up" /></a>
            <a href="#" class="Like__Control"><font-awesome-icon icon="thumbs-down" /></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RepoListElementComponent",
        props:["repo"]
    }
</script>

<style scoped>
    img{
        width: 100%;
    }
    .Like__Control{
        color: #3d4852;
    }
</style>
