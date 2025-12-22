<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppSidebar from "@/components/AppSidebar.vue"
import NavActions from "@/components/NavActions.vue"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
// import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
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
        <div class="flex flex-1 items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator
            orientation="vertical"
            class="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage class="line-clamp-1">
                  xx文件.pdf
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div class="ml-auto px-3">
          <NavActions />
        </div>
      </header>
      <div class="flex flex-1 justify-center">
        <router-view />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>