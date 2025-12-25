<script setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import Button from '@/components/ui/button/Button.vue'
import ButtonGroup from "./ui/button-group/ButtonGroup.vue"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { 
  FolderOpen,
  Save,
  FileUp,
  FolderSync,
  Plus 
} from "lucide-vue-next"
import Todo from "./Todo.vue"

</script>

<template>
    <div class="flex flex-1 items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator
            orientation="vertical"
            class="mr-2 data-[orientation=vertical]:h-4"
          />
          <ButtonGroup class="bg-white rounded-xl">
            <Button
            variant="ghost"
            size="icon"
            class="h-7 w-7 data-[state=open]:bg-accent"
            title="新建文件"
            url="new"
          >
            <Plus />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            class="h-7 w-7 data-[state=open]:bg-accent"
            title="打开文件"
          >
            <FolderOpen />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            class="h-7 w-7 data-[state=open]:bg-accent"
            title="保存文件"
          >
            <Save />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            class="h-7 w-7 data-[state=open]:bg-accent"
            title="同步数据库"
          >
            <FolderSync />
          </Button>
          </ButtonGroup>
          
          
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
          <Todo />
        </div>
        
</template>