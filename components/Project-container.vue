<template>
    <div id="Project-container" class="relative flex w-full flex-grow md:w-2/5">
        <a :href="href">
            <div class="img">
                <img
                    :src="require(`~/assets/img/projects/${src}.png`)"
                    :alt="src"
                    class="z-10"
                    width="100%"
                    height="100%"
                />
                <h1
                    class="absolute bottom-10 right-5 z-30 text-center text-2xl font-extrabold text-green-600"
                >
                    {{ name }}
                </h1>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'ProjectContaier',
    props: {
        src: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        href: {
            type: String,
            default: 'https://github.com/MahykBurak',
            required: false,
        },
    },
}
</script>

<style scoped>
.img:hover img {
    -webkit-filter: blur(0);
    filter: blur(0);
}
.img img {
    -webkit-filter: blur(2px);
    filter: blur(2px);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
}
.img:hover h1 {
    display: none;
}
</style>
