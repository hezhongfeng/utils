import { multiRequest } from './utils.js';

const run = async () => {
  console.time('test');

  const urls = new Array(500).fill('https://www.baidu.com/');

  await multiRequest(urls, 30);

  console.timeEnd('test');
};

run();
