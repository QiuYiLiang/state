import { currentUpdate } from "./currentUpdate";

export const _currentUpdate = currentUpdate;

export const observable = (obj: Record<string, any>): any => {
  const map: Map<string, Set<() => void>> = new Map();
  return new Proxy(obj, {
    get: (target, property: string) => (
      !map.get(property) && map.set(property, new Set()),
      currentUpdate.current && map.get(property)?.add(currentUpdate.current),
      typeof Reflect.get(target, property) === "object"
        ? observable(Reflect.get(target, property))
        : Reflect.get(target, property)
    ),

    set: (target, property: string, value) => (
      map.get(property)?.forEach((fn) => fn()),
      Reflect.set(target, property, value)
    ),
  });
};
