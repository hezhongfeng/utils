import axios from 'axios';

const multiRequest = async (urls, maxNum) => {
  return new Promise((resolve, reject) => {
    let inFlight = 0;
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
      axios
        .get(url)
        .then(() => {
          console.log('请求成功，这是第 ' + (i + 1) + '个');
        })
        .catch(() => {
          reject();
        })
        .finally(() => {
          inFlight--;
          run();
          if (inFlight === 0) {
            console.log('请求完毕');
            resolve();
          }
        });
    };

    run();
  });
};

export { multiRequest };
