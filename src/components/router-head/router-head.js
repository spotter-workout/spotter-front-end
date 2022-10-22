import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@builder.io/qwik/jsx-runtime";
import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
    const head = useDocumentHead();
    const loc = useLocation();
    return (_jsxs(_Fragment, { children: [_jsx("title", { children: head.title }), _jsx("link", { rel: "canonical", href: loc.href }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }), _jsx("link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }), _jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), _jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" }), _jsx("link", { href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap", rel: "stylesheet" }), head.meta.map((m) => (_jsx("meta", Object.assign({}, m)))), head.links.map((l) => (_jsx("link", Object.assign({}, l)))), head.styles.map((s) => (_jsx("style", Object.assign({}, s.props, { dangerouslySetInnerHTML: s.style }))))] }));
});
