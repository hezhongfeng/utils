import { multiRequest } from './utils.js';

const run = async (urlLength, maxNum) => {
  const urls = new Array(urlLength).fill('https://www.baidu.com/');

  await multiRequest(urls, maxNum);
};

run(1000, 20);
