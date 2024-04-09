# 网络请求并发控制

## 问题描述

有 1000 个网络请求需要去做，要求是：

1、所有请求都必须执行，不能遗漏，不要去执行的顺序
2、请求执行成功了就行，不需要知道返回的具体信息
3、尽可能快的完成这些请求
4、完成任务后需要打印出所有请求花费的时间
5、可以让调用者使用`await xxx`等待所有请求执行完毕

## 解题思路

### 并发

## Installation

```bash
pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
