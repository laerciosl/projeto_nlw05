import express from "express";

import "./database";

const app = express();

app.listen(3334, () => {
  console.log("Server ir running on port 3334")
})