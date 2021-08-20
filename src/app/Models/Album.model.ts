export class Album {
  // @ts-ignore
  id: string;
  // @ts-ignore
  photo: string;
  // @ts-ignore
  author: string;
  // @ts-ignore
  text: string;
  // @ts-ignore
  fav: boolean;

  constructor(id:string, photo:string, author:string, text:string,fav:boolean) {
    this.id = id;
    this.photo = photo;
    this.author = author;
    this.text = text;
    this.fav = fav;
  }
}
