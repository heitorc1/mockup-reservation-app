type DataType = {
  id: number;
  day: string;
  hour: boolean[];
};

const DEFAULT: DataType[] = [{ id: 0, day: "", hour: [true] }];

DEFAULT.shift();

const addDays = (date: Date, days: number) => {
  date.setDate(date.getDate() + days);
  const month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const formatedDate = date.getDate() + "/" + month + "/" + date.getFullYear();
  return formatedDate;
};

for (let i = 0; i < 365; i++) {
  const initialDate = new Date();
  const tmpObj = {
    id: i,
    day: addDays(initialDate, i),
    hour: Array.from({ length: 17 }, () =>
      Math.random() < 0.5 ? true : false
    ),
  };
  DEFAULT.push(tmpObj);
}

export { DEFAULT };
