import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public getAll(key: string): any[] {
    const items = localStorage.getItem(key);
    if (items) {
      return JSON.parse(items);
    } else {
      return [];
    }
  }

  public deleteAll(key: string): void {
    localStorage.removeItem(key);
  }

  public setAll(key: string, items: any[]): void {
    const itemsAsString = JSON.stringify(items);
    localStorage.setItem(key, itemsAsString);
  }

  public getOne(key: string, identifier: string, identifierName = 'id'): any {
    const allItems = this.getAll(key);
    if (allItems?.length) {
      return allItems.find((item) => item[identifierName] === identifier);
    }
    return undefined;
  }

  public deleteOne(
    key: string,
    identifier: number,
    identifierName = 'id'
  ): void {
    const allItems = this.getAll(key);
    if (allItems?.length) {
      const filteredItems = allItems.filter(
        (item) => item[identifierName] !== identifier
      );
      this.setAll(key, filteredItems);
    }
  }

  public setOne(key: string, item: any): void {
    const allItems = this.getAll(key);
    allItems.push(item);
    this.setAll(key, allItems);
  }

  public update(key: string, updatedItem: any, identifierName = 'id'): void {
    const allItems = this.getAll(key);
    const index = allItems.findIndex(item => item[identifierName] === updatedItem[identifierName]);
    if (index !== -1) {
      allItems[index] = updatedItem;
      this.setAll(key, allItems);
    }
  }
}
