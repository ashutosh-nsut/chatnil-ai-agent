import http from "k6/http";

export const options = {
  scenarios: {
    rps_test: {
      executor: "ramping-arrival-rate",
      startRate: 2,
      timeUnit: "1s",
      preAllocatedVUs: 50,
      maxVUs: 200,
      stages: [
        { target: 5, duration: "10s" },
        { target: 10, duration: "10s" },
        { target: 20, duration: "10s" },
        { target: 40, duration: "10s" }
      ],
    },
  },
};

export default function () {

  const payload = JSON.stringify({
    message: "Hello"
  });

  const params = {
    headers: { "Content-Type": "application/json" }
  };

  http.post(
    "https://chatnil-ai-agent-ewfjdmevcqdxb5fc.centralindia-01.azurewebsites.net/chat",
    payload,
    params
  );
}