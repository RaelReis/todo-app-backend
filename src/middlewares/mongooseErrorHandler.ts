import ErrorResponse from "../utils/errorsResponse";

export interface Name {
  name: string;
  message: string;
  properties: Properties;
  kind: string;
  path: string;
}

export interface Properties {
  message: string;
  type: string;
  path: string;
}

export const mongooseErrorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  if (err.name === "MongoServerError" && error.code === 11000) {
    const message = "O usuario já existe";
    error = new ErrorResponse(message, 400);
  }

  if (err.name === "CastError") {
    const message = "Id de usuario invalido";
    error = new ErrorResponse(message, 400);
  }

  if (err.name === "ValidationError") {
    const message = Object.values<Name>(err.errors)
      .map((val) => val.message)
      .join(" ");
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({ error: error.message || "Server Error" });
};
