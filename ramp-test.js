import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [
    { duration: "1m", target: 10000000 },   // start with 5 users
    // { duration: "30s", target: 300 },  // increase to 10
    // { duration: "30s", target: 600 },  // increase to 20
    // { duration: "30s", target: 1000 },  // increase to 40
    // { duration: "30s", target: 5000 },  // increase to 80
    // { duration: "30s", target: 0 },   // ramp down
  ],
};

export default function () {

  const payload = JSON.stringify({
    message: "Hello"
  });

  const params = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const res = http.post(
    "https://chatnil-ai-agent-ewfjdmevcqdxb5fc.centralindia-01.azurewebsites.net/chat",
    payload,
    params
  );

  console.log(res.status);

  sleep(2);
}