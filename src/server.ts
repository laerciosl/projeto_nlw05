import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(3334, () => {
  console.log("Server ir running on port 3334")
});