export const handler = async (event) => {
  console.log("event: ", JSON.stringify(event));

  return {
    statusCode: 200,
    body: `<html><body> Dados da requisicao ${JSON.stringify(event)}</body></html>`,
    headers: {
      "content-type": "text/html"
    }
  };
};
