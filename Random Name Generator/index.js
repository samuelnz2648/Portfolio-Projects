const readline = require("readline");

// Create an interface to handle user input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const firstNames = [];
const middleNames = [];
const lastNames = [];

const enterFirstName = () => {
  rl.question(
    "Write what First Name you want to add, write 'Complete' to move to middle name: ",
    (firstName) => {
      if (firstName.toLowerCase() !== "complete") {
        firstNames.push(firstName);
        enterFirstName();
      } else {
        enterMiddleName();
      }
    }
  );
};

const enterMiddleName = () => {
  rl.question(
    "Write what Middle Name you want to add, write 'Complete' to move to Last name: ",
    (middleName) => {
      if (middleName.toLowerCase() !== "complete") {
        middleNames.push(middleName);
        enterMiddleName();
      } else {
        enterLastName();
      }
    }
  );
};

const enterLastName = () => {
  rl.question(
    "Write what Last Name you want to add, write 'Complete' to move to generate Full name: ",
    (lastName) => {
      if (lastName.toLowerCase() !== "complete") {
        lastNames.push(lastName);
        enterLastName();
      } else {
        displayName();
      }
    }
  );
};

const generateRandomIndex = (nameArr) => {
  return Math.floor(Math.random() * nameArr.length);
};

const displayName = () => {
  console.log(
    `Generated Full Name: ${firstNames[generateRandomIndex(firstNames)]} ${
      middleNames[generateRandomIndex(middleNames)]
    } ${lastNames[generateRandomIndex(lastNames)]}`
  );

  rl.question("Generate another name?, if not, restart: ", (input) => {
    if (input.toLowerCase() === "yes" || input.toLowerCase() === "y") {
        displayName();
    } else {
        firstNames.length = 0;
        middleNames.length = 0;
        lastNames.length = 0;
        enterFirstName();
    }
  })
};

enterFirstName();
