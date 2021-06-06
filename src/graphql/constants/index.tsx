export const CLIENT_URL =
  process.env.NODE_ENV === "production"
    ? "http://localhost:1337"
    : "http://192.168.0.102:1337";

export const PAGINATION_AMOUNT = 16;
