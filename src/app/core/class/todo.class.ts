import { NumberHelper } from '../helpers/number.helper';
import {ITodoDto} from "../models/todo.model";

export class Todo {
    public id: number;
    public title: string;
    public description: string;
    public status: string;
    public id_parent: number;

    constructor(dto: ITodoDto) {
        this.id = dto.id;
        this.title = dto.title;
        this.description = dto.description;
        this.status = dto.status;
        this.id_parent = dto.id_parent;
    }

    public static init(title: string, description: string, id_parent: number): Todo {
        const id = NumberHelper.getRandomId();
        const status = 'todo';
        return new Todo({
            id,
            title,
            description,
            status,
            id_parent,
        });
    }
}
