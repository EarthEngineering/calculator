const Calculator = artifacts.require("Calculator")

module.exports = deployer => {
  deployer.deploy(Calculator)
}
