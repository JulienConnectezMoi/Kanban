import { NumberHelper } from '../helpers/number.helper';
import { IBoardDto } from '../models/board.model';

export class Board {
  public id: number;
  public title: string;
  public description: string;
  public url: string;

  constructor(dto: IBoardDto) {
    this.id = dto.id;
    this.title = dto.title;
    this.description = dto.description;
    this.url = dto.url;
  }

  public static init(title: string, description: string, url: string): Board {
    const id = NumberHelper.getRandomId();
    return new Board({
      id,
      title,
      description,
      url,
    });
  }
}
