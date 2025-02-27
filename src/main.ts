import rl from "./config/readline.config";
import auth from "./config/auth.config";
import { Customer } from "./services/Customer";
import { Authentication } from "./services/Authentication";
import { mlStorage, pubgStorage } from "./config/currencyStore.config";

class MainProgram {
  start() {
    rl.question(
      "Please Select One Option \n (1).Login \n (2).Register --> ",
      (option) => {
        if (option == "1") {
          login();
        } else if (option == "2") {
          console.log("--- Please register ---");
          rl.question("Please enter your name --> ", (name) => {
            rl.question("Please enter your email --> ", (email) => {
              rl.question("Please enter your password --> ", (password) => {
                const isRegisterSuccess = auth.registerCustomer(
                  new Customer(name, email, password)
                );
                if (isRegisterSuccess) {
                  login();
                  chooseCurrencyStore();
                }
              });
            });
          });
        } else {
          console.log("Option Not found!");
        }
      }
    );
  }
}

const login = () => {
  console.log("--- Please Login ---");
  rl.question("Please enter your email --> ", (email) => {
    rl.question("Please enter your password --> ", (password) => {
      const isSuccess = auth.loginCustomer(email, password);
      if (isSuccess) {
        console.log("Login successfully!");
        console.log(`---- Welcome ${email} Please Select A Store ----`);
        chooseCurrencyStore();
      } else {
      }
    });
  });
};

const chooseCurrencyStore = () => {
  rl.question(
    "(1). Mobile Legends Diamond \n (2). PUBG Mobile UC --> ",
    (storeOption) => {
      if (storeOption === "1") {
        console.log("--- Diamonds Store ---");
        const diamondPackages = mlStorage.listCurrency();
        console.log("--- Available Packages ---");
        const filteredCategories: Array<string> = [];
        diamondPackages.forEach((dp) => {
          !filteredCategories.includes(dp.category) &&
            filteredCategories.push(dp.category);
        });
        filteredCategories.forEach((category) => {
          console.log(`--- ${category} ---`);
          diamondPackages
            .filter((dp) => {
              return dp.category == category;
            })
            .forEach((p) => {
              console.log(
                `--(id)-- (${p.id}) / --(diamonds)-- (${p.diamonds}) / --(mmk)-- (${p.myanmarKyats}mmk)`
              );
              console.log(
                "-------------------------------------------------------"
              );
            });
        });
      } else if (storeOption === "2") {
        console.log("--- UC Store ---");
        const ucPackages = pubgStorage.listCurrency();
        console.log("--- Available Packages ---");
        const filteredCategories: Array<string> = [];
        ucPackages.forEach((up) => {
          !filteredCategories.includes(up.category) &&
            filteredCategories.push(up.category);
        });
        filteredCategories.forEach((category) => {
          console.log(`--- ${category} ---`);
          ucPackages
            .filter((up) => {
              return up.category == category;
            })
            .forEach((p) => {
              console.log(
                `--(id)-- (${p.id}) / --(UC)-- (${p.unknownCurrency}) / --(mmk)-- (${p.myanmarKyats}mmk)`
              );
              console.log(
                "-------------------------------------------------------"
              );
            });
        });
      } else {
        console.log("404! Store not found");
      }
    }
  );
};

const mainProgram = new MainProgram();
mainProgram.start();
