export interface Book {
  id: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    publisher: string;
    publishedDate: string;
    pageCount: number;
    printType: string;
    categories: string[];
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    previewLink: string;
    language: string;
  };
}
