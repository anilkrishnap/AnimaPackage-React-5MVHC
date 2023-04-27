export const getData = async () => {
    const response = await import('./data.json');
    return response.default;
  };
  