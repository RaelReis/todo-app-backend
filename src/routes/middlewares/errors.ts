export interface Err {
  errors: Errors[];
}

export interface Errors {
  name: Name;
}

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
