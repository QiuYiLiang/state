import { observer } from "@qiuyl/state-react";
import { store } from "./store";

function CompA() {
  return <div>{store.count}</div>;
}

export default observer(CompA);
