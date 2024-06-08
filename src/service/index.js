import { v4 as uuidv4 } from "uuid";

function generateKey(length) {
  return uuidv4().replace(/-/g, "").substring(0, length);
}

export const keyForRoom = generateKey(8);
