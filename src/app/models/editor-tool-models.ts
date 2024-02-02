export interface ToolConfig {
    class: any;
    inlineToolbar?: boolean | string[];
    config?: Record<string, any>;
}

export interface ControlOptions {
    paragraph: ToolConfig;
    list: ToolConfig;
    header: ToolConfig;
    table: ToolConfig;
    marker: ToolConfig;
    checklist: ToolConfig;
    quote: ToolConfig;
    warning: ToolConfig;
    delimiter: ToolConfig
}