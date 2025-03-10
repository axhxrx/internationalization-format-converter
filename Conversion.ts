export class Conversion
{
  static toJSON = new Conversion('toJSON');
  static fromJSON = new Conversion('fromJSON');

  readonly mode: 'toJSON' | 'fromJSON';

  constructor(mode: 'toJSON' | 'fromJSON')
  {
    this.mode = mode;
  }
}
