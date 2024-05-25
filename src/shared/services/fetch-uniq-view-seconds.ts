interface UniqueViewSeconds {
  id: string;
  numbers: number[][];
}

export const fetchUniqViewSeconds = async (): Promise<UniqueViewSeconds> => {
  const response = await fetch(
    'https://664ac067a300e8795d42d1ff.mockapi.io/api/v1/numbers/1',
  );

  const data: UniqueViewSeconds = await response.json();
  return data;
};
