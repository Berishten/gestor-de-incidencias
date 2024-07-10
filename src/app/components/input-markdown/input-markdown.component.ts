import { CommonModule } from '@angular/common';
import { Component, Input, VERSION } from '@angular/core';
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
  @Input() markdown: string | null = '';
  showMarkdownView = true;
}
