export type User = {
  first: string,
  last: string,
};

export type City = {
  name: string,
  industry?: string[],
  distance: {
    [key: string]: number,
  }
};
