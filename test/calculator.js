const Calculator = artifacts.require("Calculator")
const truffleAssert = require("truffle-assertions")

contract("Calculator", accounts => {
  it("should add 2 numbers", async () => {
    const calculatorInstance = await Calculator.deployed()
    const augend = 1
    const addend = 2
    const sum = await calculatorInstance.add(augend, addend)

    // truffleAssert.eventEmitted(sum, "Add", ev => {
    //   return ev.augend === 1 && ev.addend === 2 && ev.sum === 3
    // })

    assert.equal(sum, 3, "the sum should be 3")
  })

  it("should subtract 2 numbers", async () => {
    const calculatorInstance = await Calculator.deployed()
    const minuend = 3
    const subtrahend = 2
    const difference = await calculatorInstance.subtract(minuend, subtrahend)
    assert.equal(difference, 1, "the difference should be 1")
  })

  it("should multiply 2 numbers", async () => {
    const calculatorInstance = await Calculator.deployed()
    const multiplicand = 3
    const multiplier = 2
    const product = await calculatorInstance.multiply(multiplicand, multiplier)
    assert.equal(product, 6, "the product should be 6")
  })

  it("should divide 2 numbers", async () => {
    const calculatorInstance = await Calculator.deployed()
    const dividend = 4
    const divisor = 2
    const quotient = await calculatorInstance.divide(dividend, divisor)
    assert.equal(quotient, 2, "the quotient should be 2")
  })

  it("should modulo 2 numbers", async () => {
    const calculatorInstance = await Calculator.deployed()
    const dividend = 3
    const divisor = 2
    const product = await calculatorInstance.modulo(dividend, divisor)
    assert.equal(product, 1, "the product should be 1")
  })
})
