export class Link {
 constructor(
  public longUrl: string,
  public shortUrl: string,
  public description: string,
  public count: number,
  public id?: string|number
 ) {}
}
