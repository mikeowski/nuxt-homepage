<template>
  <div>
    <Loading :is-loading="isLoading" />
    <ol v-if="!isLoading">
      <li
        v-for="comment in comments"
        :key="comment.id"
        class="w-full py-3 flex w-full"
      >
        <!-- user-->
        <img
          :src="comment.user.picture"
          :alt="comment.user.name"
          class="rounded-full w-10 h-10 flex-shrink-0"
        />

        <!-- comment + date -->
        <div class="pl-4">
          <div class="flex space-x-2 items-center">
            <span class="text-highlight font-bold">{{
              comment.user.name
            }}</span>
            <span class="text-sm text-gray-500">{{
              formatDate(comment.createdAt)
            }}</span>
          </div>
          <p>{{ comment.text }}</p>
        </div>
        <button
          v-if="userValidator()"
          class="ml-auto"
          @click.prevent="deleteComments(comment)"
        >
          <IconDelete class="w-8 h-8" />
        </button>
      </li>
    </ol>
  </div>
</template>

<script>
import { DateTime } from 'luxon'
import IconDelete from '../assets/icons/trash.svg'
import Loading from './Loading'
export default {
  name: 'Comments',
  components: {
    Loading,
    IconDelete,
  },
  props: {
    comments: {
      type: Array,
      required: false,
    },
    deleteComments: {
      type: Function,
      required: false,
    },
    userValidator: {
      type: Function,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      return DateTime.fromMillis(date).toRelative()
    },
  },
}
</script>

<style scoped></style>
