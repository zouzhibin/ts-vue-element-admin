<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script lang="ts">
import { isExternal } from "@/utils/validate";
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  components: {},
})
export default class ULink extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  to!:string;
  get isExternal() {
    return isExternal(this.to);
  }
  get type() {
    if (this.isExternal) {
      return "a";
    }
    return "router-link";
  }
  linkProps(to:string) {
    if (this.isExternal) {
      return {
        href: to,
        target: "_blank",
        rel: "noopener",
      };
    }
    return {
      to: to,
    };
  }
}
</script>
