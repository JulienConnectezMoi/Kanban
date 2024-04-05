
import { NumberHelper } from '../../helpers/number.helper';
import { IBoardDto } from '../board.model';


export class Board {
  private _id: number;
  public title: string;
  public description: string;
  public url: string;

  constructor(dto: IBoardDto) {
    this._id = dto._id;
    this.title = dto.title;
    this.description = dto.description;
    this.url = dto.url;
  }

  public get id(): number {
    return this._id;
  }

  public static init(title: string, description: string, url: string): Board {
    const _id = NumberHelper.getRandomId();
    return new Board({
      _id,
      title,
      description,
      url,
    });
  }
}
