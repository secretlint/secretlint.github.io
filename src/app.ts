import { basicSetup, EditorView } from "codemirror";
import { secretlint } from "./secretlint";
import { DEFAUT_TEXT } from "./DEFAUT_TEXT";
import { lintGutter } from "@codemirror/lint";

const editorElement = document.getElementById("editor")!;
new EditorView({
    doc: DEFAUT_TEXT,
    extensions: [basicSetup, lintGutter(), secretlint],
    parent: editorElement
});
