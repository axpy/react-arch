interface ResultSuccess<T> extends Result {
  readonly success: boolean = true;
  readonly data: T;
}

interface ResultFailure extends Result {
  readonly success: boolean = false;
  readonly error: Error;
}

declare interface Result<T> {
  readonly success?: boolean;
  readonly data?: T;
  readonly error?: Error;
}

