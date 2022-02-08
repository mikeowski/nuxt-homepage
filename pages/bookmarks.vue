<template>
    <div class="sc">
        <div class="space-y-4 text-center md:text-left">
            <typical
                class="text-highlight text-center text-2xl font-medium md:text-left"
                :steps="['{', 500, '{ Dikkatimi Çekenler }']"
                :wrapper="'h1'"
            ></typical>
            <p>
                İnternetten gezinirken dikkatimi çeken yararlı olacağını
                düşündüğüm linkler
            </p>
        </div>
        <Loading :is-loading="isLoading" />
        <div v-if="!isLoading" class="space-y-4 pt-10 pb-4">
            <div
                v-for="bookmark in bookmarks"
                :key="bookmark._id"
                class="flex space-x-2 border-2 border-gray-100 p-4 hover:shadow-xl dark:border-gray-800"
            >
                <a :href="bookmark.link" class="bookmark flex space-x-4">
                    <div>
                        <span class="text-highlight text-xl">{{
                            bookmark.title
                        }}</span>
                        <span
                            >{{ bookmark.domain }}・{{
                                formatDate(bookmark.created)
                            }}</span
                        >
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { DateTime } from 'luxon'
import typical from 'vue-typical'
import Loading from '../components/Loading'
import { getBookmarks } from '../lib/raindrop'
export default {
    name: 'Bookmarks',
    components: {
        typical,
        Loading,
    },
    data() {
        return {
            bookmarks: null,
            isLoading: true,
        }
    },
    created() {
        this.getBookmarks()
    },
    methods: {
        async getBookmarks() {
            this.bookmarks = await getBookmarks()
            this.isLoading = false
        },
        formatDate(date) {
            return DateTime.fromISO(date).toRelative()
        },
    },
}
</script>

<style scoped>
span {
    display: inline-block;
    transition: transform 0.2s ease, color 0.2s ease;
}

.bookmark:hover span {
    transform: translateX(4px);
    color: #10b981;
}
</style>
