import { jsx as _jsx, jsxs as _jsxs } from "@builder.io/qwik/jsx-runtime";
import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.css?inline";
export default component$(() => {
    useStylesScoped$(styles);
    return (_jsxs("header", { children: [_jsx("div", Object.assign({ class: "logo" }, { children: _jsx("a", Object.assign({ href: "https://qwik.builder.io/", target: "_blank" }, { children: _jsx(QwikLogo, {}) })) })), _jsxs("ul", { children: [_jsx("li", { children: _jsx("a", Object.assign({ href: "https://qwik.builder.io/docs/components/overview/", target: "_blank" }, { children: "Docs" })) }), _jsx("li", { children: _jsx("a", Object.assign({ href: "https://qwik.builder.io/examples/introduction/hello-world/", target: "_blank" }, { children: "Examples" })) }), _jsx("li", { children: _jsx("a", Object.assign({ href: "https://qwik.builder.io/tutorial/welcome/overview/", target: "_blank" }, { children: "Tutorials" })) })] })] }));
});
