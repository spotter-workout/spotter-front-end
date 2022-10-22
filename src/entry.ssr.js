import { jsx as _jsx } from "@builder.io/qwik/jsx-runtime";
/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is render outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import { renderToStream } from "@builder.io/qwik/server";
import { manifest } from "@qwik-client-manifest";
import Root from "./root";
export default function (opts) {
    return renderToStream(_jsx(Root, {}), Object.assign(Object.assign({ manifest }, opts), { prefetchStrategy: {
            implementation: {
                linkInsert: null,
                workerFetchInsert: null,
                prefetchEvent: "always"
            }
        } }));
}
