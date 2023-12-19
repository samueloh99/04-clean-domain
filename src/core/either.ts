// Error
export class Error<error, success> {
  readonly value: error

  constructor(value: error) {
    this.value = value
  }

  isSuccess(): this is Success<error, success> {
    return false
  }

  isError(): this is Error<error, success> {
    return true
  }
}

// Success
export class Success<success, error> {
  readonly value: success

  constructor(value: success) {
    this.value = value
  }

  isSuccess(): this is Success<error, success> {
    return true
  }

  isError(): this is Error<error, success> {
    return false
  }
}

export type Either<error, success> =
  | Error<error, success>
  | Success<success, error>

export const error = <error, success>(value: error): Either<error, success> => {
  return new Error(value)
}

export const success = <error, success>(
  value: success,
): Either<error, success> => {
  return new Success(value)
}
