import { CommonModule } from '@angular/common';
import { Component, VERSION } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-markdown',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MarkdownComponent],
  templateUrl: './input-markdown.component.html',
  styleUrl: './input-markdown.component.scss'
})
export class InputMarkdownComponent {
  showMarkdownView = true;

  markdown = `## Error en vista 'Home'
---

#### Descripción técnica
\`\`\`js
import { Component } from '@angular/core';
\`\`\`


### Lists
1. Ordered list
2. Another bullet point
   - Unordered list
   - Another unordered bullet

### Blockquote
> Blockquote to the max`;
}
