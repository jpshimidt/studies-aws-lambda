export const handler = async (event) => {
  console.log(process.env._MINHA_VAR);

  const response = {
    statusCode: 200,
    body: JSON.stringify(event),
  };
  console.log("event: ", event);
  return response;
};
