export interface ILog {
  name: string;
  message: string;
}

export interface IDBLog extends ILog {
  _id: string;
}

export interface IViewLog extends IDBLog {
  origin: "client" | "server";
}
