import { h, defineComponent } from "vue";
import { _currentUpdate } from "@qiuyl/state";

export const Observer = defineComponent({
  data: () => ({
    key: 0,
  }),
  render() {
    _currentUpdate.current = () => {
      this.key++;
    };
    return h(this.$slots.default!, { key: this.key });
  },
});
