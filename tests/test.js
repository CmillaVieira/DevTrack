
const { spawn } = require("child_process");
const assert = require("assert");

const PORT = 3001;
const BASE_URL = `http://127.0.0.1:${PORT}`;

const app = spawn("node", ["app.js"], {
  env: { ...process.env, PORT },
  stdio: "ignore"
});

async function waitForServer() {
  for (let i = 0; i < 30; i++) {
    try {
      const response = await fetch(`${BASE_URL}/health`);

      if (response.ok) {
        return;
      }
    } catch (error) {
      // Aguarda o servidor iniciar.
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error("Servidor não iniciou a tempo.");
}

async function runTests() {
  try {
    await waitForServer();

    // Teste 1: verificar a rota de saúde
    const healthResponse = await fetch(`${BASE_URL}/health`);
    assert.strictEqual(healthResponse.status, 200);

    const healthData = await healthResponse.json();
    assert.strictEqual(healthData.status, "ok");

    console.log("Teste 1 aprovado: rota /health.");

    // Teste 2: verificar a página principal
    const homeResponse = await fetch(`${BASE_URL}/`);
    assert.strictEqual(homeResponse.status, 200);

    const homeHtml = await homeResponse.text();
    assert.ok(homeHtml.includes("DevTrack"));

    console.log("Teste 2 aprovado: página principal.");

    // Teste 3: verificar a API de tarefas
    const tasksResponse = await fetch(`${BASE_URL}/api/tasks`);
    assert.strictEqual(tasksResponse.status, 200);

    const tasks = await tasksResponse.json();
    assert.ok(Array.isArray(tasks));
    assert.ok(tasks.length > 0);
    assert.ok(tasks.every((task) => task.title));

    console.log("Teste 3 aprovado: API de tarefas.");

    console.log("\nTodos os testes foram aprovados!");
  } catch (error) {
    console.error("\nFalha nos testes:", error.message);
    process.exitCode = 1;
  } finally {
    app.kill();
  }
}

runTests();
