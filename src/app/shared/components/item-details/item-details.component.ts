import { Component, Input } from '@angular/core';

import { Book } from '@core/models';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent {
  @Input() book: Book = {
    id: '',
    selfLink: '',
    volumeInfo: {
      title: '',
      authors: [],
      description: '',
      publishedDate: '',
      publisher: '',
      pageCount: 0,
      printType: '',
      categories: [],
      imageLinks: {
        smallThumbnail: '',
        thumbnail: '',
      },
      previewLink: '',
      language: '',
    },
  };
  @Input() fullDetails: boolean = false;

  constructor() {}
}
