const getRandomValueForType = (type) => {
  switch (true) {
    case /string/.test(type):
      return `'${randomString()}'`;
    case /number/.test(type):
      return randomNumber();
    case /boolean/.test(type):
      return randomBoolean();
    case /object/.test(type):
      return randomObject();
    case /Array/.test(type):
      return randomArray();
    default:
      return `null`;
  }
};

const randomBoolean = () => Math.random() < 0.5;

const randomObject = () => {
  const key = randomString();
  const value = randomString();
  return `{ '${key}': '${value}' }`;
};

const randomArray = () => {
  const item1 = randomString();
  const item2 = randomString();
  return [`['${item1}', '${item2}']`];
};

const randomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomString = () => Math.random().toString(36).substring(2, 15);

export { getRandomValueForType, randomBoolean, randomObject, randomArray, randomNumber, randomString };
