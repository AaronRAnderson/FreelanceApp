import { Component } from '@angular/core';
import { Document } from './document';
@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "description",
      file_url: 'http://google.com',
      updated_at: '06/07/17',
      image_url: 'http://google.com'
    },
    {
      title: "My Second Doc",
      description: "description",
      file_url: 'http://google.com',
      updated_at: '06/07/17',
      image_url: 'http://google.com'
    },
    {
      title: "My Last Doc",
      description: "description",
      file_url: 'http://google.com',
      updated_at: '06/07/17',
      image_url: 'http://google.com'
    },
  ]
}
