import { a, div, h1, h3, section } from "@cycle/dom";

import { merge } from "./styles/utils";
import { flex } from "./styles";

const containerWidth = { width: "820px" };
const flexMain = { flex: "0 0 820px" };

function renderContent(sandboxDOM) {
  return div({ style: flex }, [div({ style: flexMain }, [sandboxDOM])]);
}

export function appView(sandboxDOM$) {
  return sandboxDOM$.map(sandboxDOM =>
    div({ style: merge(containerWidth, { margin: "30px auto" }) }, [
      renderContent(sandboxDOM)
    ])
  );
}
