export class Email {
  constructor(
    public id: number,
    public subject: string,
    public from: string[],
    public date: string,
    public content: string
  ) {}
}
