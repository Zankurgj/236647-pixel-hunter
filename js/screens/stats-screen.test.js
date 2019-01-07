import {assert} from 'chai';

export const USER_ANSWERS = [
  {
    сorrectAnswer: true,
    timeSpend: 6
  },
  {
    сorrectAnswer: true,
    timeSpend: 6
  }
];

const getPoint = (time) => {
  if (time <= 0) {
    throw new Error(`time can not be negative`);
  }
  if (time < 5) {
    return 150;
  }
  if (time > 5 && time <= 10) {
    return 100;
  }
  if (time > 10) {
    return -50;
  }
  throw new Error(`time error`);
};

const score = (answers, lives) => {
  let totalPoints = 0;
  answers.forEach((answer) => {
    if (answer.сorrectAnswer) {
      let point = getPoint(answer.timeSpend);
      totalPoints = totalPoints + point;
    }
  });
  return totalPoints + lives * 50;
};

describe(`Scoring at the end of the game`, () => {
  it(`response check`, () => {
    assert.equal(getPoint(2), 150);
    assert.equal(getPoint(10), 100);
    assert.throws(() => getPoint(-55));
  });
  it(`get points`, () => {
    assert.equal(score(USER_ANSWERS, 1), 250);
  });
});
