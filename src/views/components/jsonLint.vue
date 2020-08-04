<template>
  <div class="components-container">
    
    <div class="editor-container">
      <json-editor
        ref="jsonEditor"
        v-model="value"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import JsonEditor from '@/components/u-jsonEditor/index.vue'

const jsonData = `
[{
 "merchant_id": 285,
"merchant_name": "测试商户001",
"merchant_loginname": "ceshishanghu",
"created_at": 1584886886,
"updated_at": 1596090333,
"agent_ratio": "0",
"platfrom_ratio": "0.03",
"platfrom_refund_ratio": "0.5",
"merchant_simple_name": "测试商户",
"merchant_status": 1,
"agent_refund_ratio": "0"
},{
 "merchant_id": 285,
"merchant_name": "测试商户001",
"merchant_loginname": "ceshishanghu",
"created_at": 1584886886,
"updated_at": 1596090333,
"agent_ratio": "0",
"platfrom_ratio": "0.03",
"platfrom_refund_ratio": "0.5",
"merchant_simple_name": "测试商户",
"merchant_status": 1,
"agent_refund_ratio": "0"
},{
 "merchant_id": 285,
"merchant_name": "测试商户001",
"merchant_loginname": "ceshishanghu",
"created_at": 1584886886,
"updated_at": 1596090333,
"agent_ratio": "0",
"platfrom_ratio": "0.03",
"platfrom_refund_ratio": "0.5",
"merchant_simple_name": "测试商户",
"merchant_status": 1,
"agent_refund_ratio": "0"
},{
 "merchant_id": 285,
"merchant_name": "测试商户001",
"merchant_loginname": "ceshishanghu",
"created_at": 1584886886,
"updated_at": 1596090333,
"agent_ratio": "0",
"platfrom_ratio": "0.03",
"platfrom_refund_ratio": "0.5",
"merchant_simple_name": "测试商户",
"merchant_status": 1,
"agent_refund_ratio": "0"
},{
 "merchant_id": 285,
"merchant_name": "测试商户001",
"merchant_loginname": "ceshishanghu",
"created_at": 1584886886,
"updated_at": 1596090333,
"agent_ratio": "0",
"platfrom_ratio": "0.03",
"platfrom_refund_ratio": "0.5",
"merchant_simple_name": "测试商户",
"merchant_status": 1,
"agent_refund_ratio": "0"
}
]
`

@Component({
  name: 'JsonEditorDemo',
  components: {
    JsonEditor
  }
})
export default class extends Vue {
  private value = JSON.parse(jsonData)
}
</script>

<style lang="scss" scoped>
.editor-container {
  position: relative;
  height: 100%;
}
</style>
