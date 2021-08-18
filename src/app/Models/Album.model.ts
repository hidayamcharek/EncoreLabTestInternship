export class Album {
  // @ts-ignore
  id: string;
  // @ts-ignore
  photo: string;
  // @ts-ignore
  author: string;
  // @ts-ignore
  text: string;

  constructor(id:string, photo:string, author:string, text:string) {
    this.id = id;
    this.photo = photo;
    this.author = author;
    this.text = text;
  }
}
