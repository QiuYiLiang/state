import {
  ClassicComponentClass,
  ComponentClass,
  createElement,
  FC,
  forwardRef,
  Ref,
  useReducer,
  useRef,
} from "react";
import { _currentUpdate } from "@qiuyl/state";

export const observer = (
  component: ClassicComponentClass | ComponentClass | FC
) =>
  forwardRef<Ref<any>, any>((props: any, ref) => {
    const r = useRef(),
      updateFn = (useReducer as any)(() => [])[1];

    !r.current && (r.current = _currentUpdate.current = updateFn);

    return createElement(component, {
      ...props,
      ref,
    });
  });
