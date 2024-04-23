import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Board } from '../class/board.class';

@Injectable({
  providedIn: 'root',
})
export class BoardService {

  constructor(private localStorageService: LocalStorageService) {}

  getAllBoards(): Board[] {
    return this.localStorageService.getAll('boards') || [];
  }

  addBoard(title: string, description: string, url: string): void {
    const board = Board.init(title, description, url);
    this.localStorageService.setOne('boards', board);
  }
}
