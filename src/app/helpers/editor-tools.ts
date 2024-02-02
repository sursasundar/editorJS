import Checklist from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Marker from '@editorjs/marker';
import Paragraph from '@editorjs/paragraph';
import Table from '@editorjs/table';
import Warning from '@editorjs/warning';

const commonInlineToolbar = ["bold", "italic"];

export const EDITOR_JS_TOOLS: any = {
    paragraph: {
        class: Paragraph,
        inlineToolbar: commonInlineToolbar,
    },
    list: {
        class: List,
        inlineToolbar: commonInlineToolbar,
    },
    header: {
        class: Header,
        inlineToolbar: commonInlineToolbar,
        config: {
            placeholder: 'Enter a header',
            levels: [1, 2, 3],
            defaultLevel: 1,
        },
    },
    table: {
        class: Table,
        inlineToolbar: commonInlineToolbar,
    },
    marker: {
        class: Marker,
        inlineToolbar: commonInlineToolbar,
    },
    checklist: {
        class: Checklist,
        inlineToolbar: commonInlineToolbar,
    },
    warning: Warning,
    delimiter: Delimiter,
};
