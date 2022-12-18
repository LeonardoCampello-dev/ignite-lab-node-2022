export class Content {
  private readonly content: string;

  constructor(content: string) {
    const isValidContentLength = this.validateLength(content);

    if (!isValidContentLength) {
      throw new Error('invalid content length');
    }

    this.content = content;
  }

  public get value(): string {
    return this.content;
  }

  public validateLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }
}
