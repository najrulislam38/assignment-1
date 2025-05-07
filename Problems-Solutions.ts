function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    console.log(input.toLowerCase());
    return input.toLowerCase();
  } else {
    console.log(input.toUpperCase());
    return input.toUpperCase();
  }
}

// formatString("Bangladesh");
// formatString("Bangladesh", true);
// formatString("Bangladesh", false);

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filterItemByRating = items.filter((item) => item?.rating >= 4);

  // console.log(filterRating);
  return filterItemByRating;
}

const books = [
  { title: "English for today", rating: 4.0 },
  { title: "Bangla", rating: 4.5 },
  { title: "General Math", rating: 3.9 },
];

filterByRating(books);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let newArray = [];

  for (const arr of arrays) {
    newArray.push(...arr);
  }

  return newArray;
}

// console.log(
//   concatenateArrays(["Programming", "Hero"], ["Best of learning skills"])
// );
// console.log(concatenateArrays([1, 2], [3, 4], [5], [12]));
concatenateArrays(["Programming", "Hero"], ["Best of learning skills"]); // Output: ["a", "b", "c"]
concatenateArrays([1, 2], [3, 4], [5], [20]); // Output: [1, 2, 3, 4, 5]

class Vehicle {
  private make: string;
  public year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2023, "HGD-24343");

// console.log(myCar.getInfo());
// console.log(myCar.getModel());
