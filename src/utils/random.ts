/**
 * @example (0, 3) --> -2이상 3이하의 랜덤한 숫자 반환
 * @example (3, -2) --> -2이상 3이하의 랜덤한 숫자 반환
 */
export function randomNumber(from: number, to: number) {
  const _max = Math.max(from, to);
  const _min = Math.min(from, to);
  const length = Math.abs(_max - _min) + 1;
  return Math.floor(Math.random() * length) + _min;
}

/**
 * @param anagramArray 랜덤한 문자열을 만들 때 들어갈 요소들
 * @param length 랜덤한 문자열의 길이
 *
 * @example (['a', 'b', 'c'], 5) ==> return 'aabac'
 */
export function makeRandomString(anagramArray: Array<string | number>, length: number): string {

  let result = new Array<string>(length);

  for (let i = 0; i < length; i++) {

    let randomIndex = randomNumber(0, anagramArray.length - 1);
    result.push(String(anagramArray[randomIndex]));
  }

  return result.join('');
}

export function getRandomComponentId() {
  return 'random-id-' + Math.floor(Math.random() * 10000000);
}