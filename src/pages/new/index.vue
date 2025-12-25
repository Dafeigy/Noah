<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue';
import CoverBanner from "@/components/CoverBanner.vue"
import Vditor from 'vditor';
import 'vditor/dist/index.css';

// 编辑器容器引用
const editorContainer = ref<HTMLElement | null>(null);
let vditor: Vditor | null = null;

</script>

<template>
  <div class="flex flex-col items-center justify-center p-6 md:p-10 min-h-[svh,100%] w-full w-max-[400px]">
    <CoverBanner />
    
    <!-- Markdown 编辑器容器 -->
    <div ref="editorContainer" class="w-full max-w-4xl mt-4"></div>
    
  </div>
</template>

<style scoped>
/* Vditor 自定义样式 */
:deep(.vditor) {
  border-radius: 8px;
  overflow: hidden;
}

:deep(.vditor-toolbar) {
  border-bottom: 1px solid #e5e7eb;
}

:deep(.vditor-content) {
  background-color: white;
}
</style>