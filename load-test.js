import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 1000,
  duration: "1m",
};

export default function () {

  const payload = JSON.stringify({
    message: "Hello"
  });

  const params = {
    headers: { "Content-Type": "application/json" }
  };

  let res = http.post("https://chatnil-ai-agent-ewfjdmevcqdxb5fc.centralindia-01.azurewebsites.net/chat", payload, params);

  console.log(res.status);

  sleep(0);
}
