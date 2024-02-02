import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import EditorJS from '@editorjs/editorjs';
import { EDITOR_JS_TOOLS, convertEditorContentToHTML } from 'src/app/helpers/index';
import { ControlOptions } from 'src/app/models/index';

@Component({
  selector: 'app-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.scss']
})
export class RichTextComponent implements OnInit {


  @ViewChild('editor', { read: ElementRef, static: true }) editorElement: ElementRef;

  @Input()
  controlOptions: ControlOptions;

  @Output()
  content: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  isValid: EventEmitter<boolean> = new EventEmitter<boolean>();

  private editor: any;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initializeEditor();
  }

  getEditorData(): void {
    if (this.editor) {
      this.editor.save().then((data) => {
        const isValid = data && data.blocks && data.blocks.length > 0;
        this.content.emit(isValid ? convertEditorContentToHTML(data) : '');
        this.isValid.emit(isValid);
      }).catch((error) => {
        this.isValid.emit(false);
      });
    }
  }

  private initializeEditor() {
    this.editor = new EditorJS({
      holder: this.editorElement.nativeElement,
      readOnly: false,
      placeholder: '',
      autofocus: true,
      minHeight: 300,
      tools: EDITOR_JS_TOOLS,
    });
  }

}
