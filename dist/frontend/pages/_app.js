"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
require("../styles/globals.css");
const head_1 = require("next/head");
function App({ Component, pageProps }) {
    return (<>
      <head_1.default>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet"/>
      </head_1.default>
      <Component {...pageProps}/>
    </>);
}
//# sourceMappingURL=_app.js.map