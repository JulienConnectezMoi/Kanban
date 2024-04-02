import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BoardService {

  constructor(private localStorageService: LocalStorageService) {}

  fetchBoards(): any[] {
    return this.localStorageService.getAll('boards');
  }

  addBoard(boardItem: any): void {
    this.localStorageService.setOne('boards', boardItem);
  }
}