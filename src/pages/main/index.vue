<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppSidebar from "@/components/AppSidebar.vue"
import NavActions from "@/components/NavActions.vue"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import MainHeader from '@/components/MainHeader.vue'

import * as pdfjsLib from 'pdfjs-dist'

// const url = 'src/assets/SplitHE_Int.pdf';
// const url = 'src/assets/dummy.pdf';
const pdfViewer = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (!pdfViewer.value) return
  
  // 设置PDF.js worker
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@5.4.449/build/pdf.worker.mjs'
  // await loadPDF(url)
  
})
</script>
<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header class="flex h-14 shrink-0 items-center gap-2">
        <MainHeader />
        <div class="ml-auto px-3">
          <NavActions />
        </div>
      </header>
      <div class="flex">
        <router-view />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>