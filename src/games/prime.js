import { cons } from 'hexlet-pairs';
import game from '..';
import generateNum from '../utils';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const maxNumber = 20;
const minNumber = 1;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const iter = (divisor, num) => {
    if (divisor > Math.sqrt(num)) {
      return true;
    }
    if (num % divisor === 0) {
      return false;
    }
    return iter(divisor + 1, num);
  };
  return iter(2, number);
};

const prime = () => {
  const question = generateNum(minNumber, maxNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => game(instruction, prime);
