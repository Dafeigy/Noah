<script setup lang="ts">
import { ref, onMounted} from 'vue';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';

// 状态管理
const isHovered = ref(false);
const isRepositioning = ref(false);
const imagePosition = ref(0); // 图片位置偏移量（百分比）
const imageUrl = ref('/src/assets/img/met_horace_pippin.jpg');
const showImageInput = ref(false);
const newImageUrl = ref('');
const fileInputRef = ref<HTMLInputElement | null>(null);

// 保存图片位置到本地存储
const saveImagePosition = () => {
  localStorage.setItem('coverImagePosition', imagePosition.value.toString());
};

// 加载保存的图片位置
const loadImagePosition = () => {
  const saved = localStorage.getItem('coverImagePosition');
  if (saved) {
    imagePosition.value = parseInt(saved);
  }
};

// 鼠标拖动处理
const handleMouseDown = (e: MouseEvent) => {
  if (!isRepositioning.value) return;
  
  const startY = e.clientY;
  const startPosition = imagePosition.value;
  
  const handleMouseMove = (e: MouseEvent) => {
    const deltaY = e.clientY - startY;
    // 计算新的位置偏移量，限制在0%到100%之间
    const newPosition = Math.max(0, Math.min(100, startPosition - (deltaY / window.innerHeight) * 200));
    imagePosition.value = newPosition;
  };
  
  const handleMouseUp = () => {
    saveImagePosition();
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };
  
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
};

// 切换图片位置调整模式
const toggleRepositioning = () => {
  isRepositioning.value = !isRepositioning.value;
};

// 显示图片输入框
const showImageUrlInput = () => {
  showImageInput.value = true;
  newImageUrl.value = imageUrl.value;
};

// 打开系统文件选择器
const openFilePicker = () => {
  fileInputRef.value?.click();
};

// 处理文件选择
const handleFileSelect = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  
  if (file) {
    // 检查是否是图片文件
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        imageUrl.value = result;
        localStorage.setItem('coverImageUrl', result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('请选择图片文件');
    }
  }
  
  // 重置 input，允许重复选择同一文件
  input.value = '';
};

// 保存新图片URL
// const saveNewImageUrl = () => {
//   if (newImageUrl.value) {
//     imageUrl.value = newImageUrl.value;
//     localStorage.setItem('coverImageUrl', newImageUrl.value);
//     showImageInput.value = false;
//   }
// };

// 取消图片URL修改
const cancelImageUrlChange = () => {
  showImageInput.value = false;
  newImageUrl.value = '';
};

// 生命周期钩子
onMounted(() => {
  loadImagePosition();
  const savedUrl = localStorage.getItem('coverImageUrl');
  if (savedUrl) {
    imageUrl.value = savedUrl;
  }
});
</script>

<template>
  <div 
    class="w-full relative" 
    @mouseenter="isHovered = true" 
    @mouseleave="isHovered = false"
    @mousedown="handleMouseDown"
  >
    <!-- 图片容器 -->
    <div 
      class="relative w-full h-[25vh] overflow-hidden bg-cover bg-center"
      :class="{ 'cursor-move': isRepositioning }"
      :style="{ backgroundImage: `url(${imageUrl})`, backgroundPositionY: `${imagePosition}%` }"
    >
    </div>
    
    <!-- 悬浮按钮 -->
    <div v-if="isHovered" class="absolute top-2 right-2 flex gap-2 bg-white/80 backdrop-blur-sm p-1 rounded-md shadow-md  justify-center">
      <ButtonGroup>
      <Button 
        size="sm"
        variant="ghost" 
        @click="showImageUrlInput"
        title="设置封面"
      >
         <p>设置封面</p>
      </Button>
      <Button 
        size="sm"
        variant="ghost" 
        :class="{ 'bg-primary text-primary-foreground': isRepositioning }"
        @click="toggleRepositioning"
        title="调整图片位置"
      >
         <p>调整位置</p>
      </Button>
    </ButtonGroup>
      
    </div>
    
    <!-- 图片URL输入框 -->
    <div v-if="showImageInput" class="absolute top-16 right-2 bg-white rounded-md shadow-lg p-4 w-80">
      <h3 class="text-sm font-medium mb-2">设置封面图片</h3>
      <div class="flex gap-2 mb-2">
        <input 
          v-model="newImageUrl" 
          type="text" 
          placeholder="输入图片URL" 
          class="flex-1 px-3 py-2 border rounded-md text-sm"
        >
      </div>
      <div class="flex gap-2">
        <Button size="sm" @click="openFilePicker">选择本地图片</Button>
        <!-- <Button size="sm" @click="saveNewImageUrl">保存</Button> -->
        <Button size="sm" variant="outline" @click="cancelImageUrlChange">取消</Button>
      </div>
    </div>
    
    <!-- 隐藏的文件输入 -->
    <input
      ref="fileInputRef"
      type="file"
      accept="image/*"
      class="hidden"
      @change="handleFileSelect"
    >
  </div>
</template>