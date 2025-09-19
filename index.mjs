export const handler = async (event) => {
  console.log("event: ", JSON.stringify(event));

  return {
    statusCode: 200,
    body: page,
    headers: {
      "content-type": "text/html"
    }
  };
};

const page = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Mensagem Lambda</title>
  </head>
  <body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#0f0c29 0%,#302b63 50%,#24243e 100%);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
    <div style="text-align:center;padding:40px;border-radius:20px;box-shadow:0 8px 30px rgba(0,0,0,0.45);background:rgba(255,255,255,0.05);backdrop-filter:blur(6px);">
      <h1 style="margin:0;font-size:clamp(24px,6vw,56px);color:#ffffff;letter-spacing:1px;">
        TOP!! TU DEU UMA LAMBDA LEGAL
      </h1>
      <p style="margin-top:12px;color:rgba(255,255,255,0.85);font-size:14px;">
        Página gerada com HTML e CSS inline dentro de uma string.
      </p>
    </div>
  </body>
</html>`;
