export const handler = async (event) => {
  console.log('Teste utilizando o GitHub Actions');
  
  const response = {
    statusCode: 200,
    body: JSON.stringify(event),
  };
  console.log("event: ", event);
  return response;
};
