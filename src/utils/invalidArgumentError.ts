interface InvalidArgumentError {
  message: string;
}

class InvalidArgumentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidArgumentError";
  }
}

export default InvalidArgumentError;
