import { multiRequest } from './utils.js';

const run = async (urlLength, maxNum) => {
  console.time(`网络请求并发测试，url 数量 ${urlLength}，并发数 ${maxNum}`);

  const urls = new Array(urlLength).fill('https://www.baidu.com/');

  await multiRequest(urls, maxNum);

  console.timeEnd(`网络请求并发测试，url 数量 ${urlLength}，并发数 ${maxNum}`);
};

run(500, 30);
