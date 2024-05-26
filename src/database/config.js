import { connect } from "mongoose";

import "dotenv/config";
console.log(process.env.PORT);

async function dbConection() {
  const DB_URI = process.env.DB_URI;

  await connect(DB_URI);
}

export default dbConection;
