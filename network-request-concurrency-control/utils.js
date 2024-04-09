import axios from 'axios';

const multiRequest = async (urls, maxNum) => {
  return new Promise((resolve, reject) => {
    const length = urls.length;
    console.time(`网络请求并发测试，url 数量 ${length}，并发数 ${maxNum}，一共花费的时间是：`);
    // 当前的并发数
    let inFlight = 0;
    // 任务索引
    let index = 0;

    const run = () => {
      while (inFlight < maxNum && index < urls.length) {
        makeRequest(index);
        inFlight++;
        index++;
      }
    };

    const makeRequest = i => {
      const url = urls[i];
      console.time(`这是第 ${i + 1} '个请求，花费的时间是：'`);
      axios
        .get(url)
        .then(() => {
          // console.log(`请求成功，这是第 ${i + 1} 个请求`);
          console.timeEnd(`这是第 ${i + 1} '个请求，花费的时间是：'`);
        })
        .catch(() => {
          reject();
        })
        .finally(() => {
          inFlight--;
          run();
          if (inFlight === 0) {
            console.log('请求完毕');
            console.timeEnd(`网络请求并发测试，url 数量 ${length}，并发数 ${maxNum}，一共花费的时间是：`);
            resolve();
          }
        });
    };

    run();
  });
};

export { multiRequest };
