export type ActionResponse<T = unknown> = {
  message: string;
  status: "success" | "error";
  data?: T;
};
