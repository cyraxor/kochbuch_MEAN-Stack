export class Recepts {
  _id: number;
  title: string;
  description: string;
  duration: number;
  sourceUrl: string;
  pictureUrl: string;
  created: Date;

  constructor(obj: any) {
    this._id = obj.id;
    this.title = obj.title;
    this.description = obj.description;
    this.duration = obj.duration;
    this.sourceUrl = obj.sourceUrl;
    this.pictureUrl = obj.pictureUrl;
    this.created = obj.created;
  }
}
