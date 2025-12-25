<script lang="ts">

</script>

<script setup lang="ts">
// import LoginForm from "@/components/LoginForm.vue"
import CoverBanner from "@/components/CoverBanner.vue"
import Vditor from 'vditor';
import 'vditor/dist/index.css';
import { onMounted, ref, onBeforeUnmount } from 'vue';
// 编辑器容器引用
const editorContainer = ref<HTMLElement | null>(null);
let vditor: Vditor | null = null;

onMounted(() => {
  // 初始化 Vditor 编辑器
  vditor = new Vditor(editorContainer.value!, {
    width: 1000,
    height:1000,
    placeholder: '开始写你的内容...',
    theme: 'classic',
    cache:{id: "editorContainer"},
    toolbar: [
      // 'headings',
      // 'bold',
      // 'italic',
      // 'strike',
      // 'link',
      // '|',
      // 'list',
      // 'ordered-list',
      // 'check',
      // 'outdent',
      // 'indent',
      // '|',
      // 'quote',
      // 'line',
      // 'code',
      // 'inline-code',
      // 'insert-after',
      // 'insert-before',
      // '|',
      // 'upload',
      // '|',
      // 'undo',
      // 'redo',
      // '|',
      // 'fullscreen',
      // 'edit-mode',
      // {
      //   name: 'more',
      //   toolbar: [
      //     'both',
      //     'code-theme',
      //     'content-theme',
      //     'export',
      //     'import',
      //     'preview',
      //   ],
      // },
    ],
    // upload: {
    //   accept: 'image/*',
    //   max: 10 * 1024 * 1024, // 10MB
    // },
  });
});

onBeforeUnmount(() => {
  // 销毁编辑器实例
  if (vditor) {
    vditor.destroy();
    vditor = null;
  }
});
</script>

<template>
  <div class="flex flex-col items-center justify-center p-6 md:p-10 min-h-[svh,100%] w-full w-max-[400px]">
    <CoverBanner />
    HomePage
    <div id ="editorContainer" ref="editorContainer" class="w-full max-w-4xl mt-4"></div>
  </div>
</template>

<style scoped>
/* Vditor 自定义样式 */
:deep(.vditor) {
  overflow: hidden;
  border: none;
}

/* :deep(.vditor-toolbar) {
  border-bottom: 1px solid #e5e7eb;
}

:deep(.vditor-content) {
  background-color: white;
} */

</style>
