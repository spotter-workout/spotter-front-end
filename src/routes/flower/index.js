import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@builder.io/qwik/jsx-runtime";
import { component$, useClientEffect$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import styles from "./flower.css?inline";
export default component$(() => {
    useStylesScoped$(styles);
    const loc = useLocation();
    const state = useStore({
        count: 0,
        number: 20
    });
    useClientEffect$(({ cleanup }) => {
        const timeout = setTimeout(() => (state.count = 1), 500);
        cleanup(() => clearTimeout(timeout));
        const internal = setInterval(() => state.count++, 7000);
        cleanup(() => clearInterval(internal));
    });
    return (_jsxs(_Fragment, { children: [_jsx("input", { type: "range", value: state.number, max: 50, "onInput$": (ev) => {
                    state.number = ev.target.valueAsNumber;
                } }), _jsx("div", Object.assign({ style: {
                    "--state": `${state.count * 0.1}`
                }, class: {
                    host: true,
                    pride: loc.query.pride === "true"
                } }, { children: Array.from({ length: state.number }, (_, i) => (_jsx("div", { class: {
                        square: true,
                        odd: i % 2 === 0
                    }, style: { "--index": `${i + 1}` } }, i))).reverse() }))] }));
});
export const head = {
    title: "Qwik Flower"
};
