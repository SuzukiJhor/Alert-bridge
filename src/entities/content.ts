export class Content {
  private readonly content: string;

  get value() {
    return this.content;
  }

  private validateContentLength(content: string) {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isValidLength = this.validateContentLength(content);
    if (!isValidLength) throw new Error('Content length is invalid');
    this.content = content;
  }
}
