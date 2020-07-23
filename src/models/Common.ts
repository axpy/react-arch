class BinaryResult<T> {
  readonly success: boolean;
  readonly payload: T | null;

  constructor(success: boolean, payload?: T) {
    this.success = success;
    this.payload = payload ? payload : null;
  }
}

export {
  BinaryResult
}