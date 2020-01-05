pragma solidity >=0.5.11 <0.7.0;

contract Calculator {
  event Add(
    uint indexed augend,
    uint indexed addend,
    uint sum
  );

  event Subtract(
    uint indexed minuend,
    uint indexed subtrahend,
    uint difference
  );

  event Multiply(
    uint indexed multiplicand,
    uint indexed multiplier,
    uint product
  );

  event Divide(
    uint indexed dividend,
    uint indexed divisor,
    uint quotient
  );

  event Modulo(
    uint indexed dividend,
    uint indexed divisor,
    uint remainder
  );

  function add(uint256 augend, uint256 addend) public pure returns (uint256 sum) {
    // emit Add(augend, addend, sum);
    return augend + addend;
  }

  function subtract(uint256 minuend, uint256 subtrahend) public pure returns (uint256 difference) {
    // emit Subtract(minuend, subtrahend, difference);
    return minuend - subtrahend;
  }

  function multiply(uint256 multiplicand, uint256 multiplier) public pure returns (uint256 product) {
    // emit Multiply(multiplicand, multiplier, product);
    return multiplicand * multiplier;
  }

  function divide(uint256 dividend, uint256 divisor) public pure returns (uint256 quotient) {
    // emit Divide(dividend, divisor, quotient);
    return dividend / divisor;
  }

  function modulo(uint256 dividend, uint256 divisor) public pure returns (uint256 remainder) {
    // emit Modulo(dividend, divisor, remainder);
    return dividend % divisor;
  }

  function foo(uint256 dividend, uint256 divisor) public pure returns (uint256 remainder) {
    // emit Modulo(dividend, divisor, remainder);
    return dividend % divisor;
  }
}
