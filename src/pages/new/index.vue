<script setup lang="ts">
// import { onMounted, ref, onBeforeUnmount } from 'vue';
import CoverBanner from "@/components/CoverBanner.vue"



</script>

<template>
  <div class="flex flex-col items-center justify-center p-6 md:p-10 min-h-[svh,100%] w-full w-max-[400px]">
    <CoverBanner />
    
    <!-- Markdown 编辑器容器 -->
    <div ref="editorContainer" class="w-full max-w-4xl mt-4"></div>
    
  </div>
</template>
