<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-6 w-full h-[90%]">
    <div class="text-center max-w-md">
      <h1 class="text-9xl font-bold text-gray-200">404</h1>
      <h2 class="text-2xl font-semibold text-gray-800 mt-4">页面不存在</h2>
      <p class="text-gray-500 mt-2">抱歉，您访问的页面可能已被删除或暂时不可用。</p>
      <button 
        @click="goHome" 
        class="mt-8 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
      >
        返回首页
      </button>
    </div>
  </div>
</template>