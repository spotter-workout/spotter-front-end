import { jsx as _jsx, jsxs as _jsxs } from "@builder.io/qwik/jsx-runtime";
import { component$ } from "@builder.io/qwik";
import { QwikCity, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import "./global.css";
export default component$(() => {
    /**
     * The root of a QwikCity site always start with the <QwikCity> component,
     * immediately followed by the document's <head> and <body>.
     *
     * Dont remove the `<head>` and `<body>` elements.
     */
    return (_jsxs(QwikCity, { children: [_jsxs("head", { children: [_jsx("meta", { charSet: "utf-8" }), _jsx(RouterHead, {})] }), _jsxs("body", Object.assign({ lang: "en" }, { children: [_jsx(RouterOutlet, {}), _jsx(ServiceWorkerRegister, {})] }))] }));
});
