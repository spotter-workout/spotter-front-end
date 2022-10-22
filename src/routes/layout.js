import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "@builder.io/qwik/jsx-runtime";
import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";
export default component$(() => {
    return (_jsxs(_Fragment, { children: [_jsxs("main", { children: [_jsx(Header, {}), _jsx("section", { children: _jsx(Slot, {}) })] }), _jsx("footer", { children: _jsx("a", Object.assign({ href: "https://www.builder.io/", target: "_blank" }, { children: "Made with \u2661 by Builder.io" })) })] }));
});
