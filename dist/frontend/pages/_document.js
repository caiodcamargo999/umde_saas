"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Document;
const document_1 = require("next/document");
function Document() {
    return (<document_1.Html lang="pt-BR">
      <document_1.Head>
        
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet"/>
      </document_1.Head>
      <body>
        <document_1.Main />
        <document_1.NextScript />
      </body>
    </document_1.Html>);
}
//# sourceMappingURL=_document.js.map