export class NumberHelper {
    public static getRandomId(): number {
      return (
        Math.random() * (Number.MAX_SAFE_INTEGER - 1) + 1 + new Date().getTime()
      );
    }
  }