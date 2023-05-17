---
switchValue: true # 声明变量value
comment: true
---

# 文档说明

自定义组件引入
<SliderCmp-index />
<TimePicker-index />

引入组件并传值 front matter 定义的值(不具有响应式)

<el-switch v-model="$page.switchValue" />

:::: tabs
::: tabpane label="Tab 1"
This is the content of tab 1.
:::

::: tabpane label="Tab 2"
This is the content of tab 2.
:::
::::
