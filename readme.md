# Express Routes

## Visualization of App Structure

https://miro.com/app/board/uXjVP8-oTIY=/?share_link_id=347451481228

### Packages/Libraries Used

|     | package                                                                              | description                    | comments                                                                                            |
| --- | ------------------------------------------------------------------------------------ | ------------------------------ | --------------------------------------------------------------------------------------------------- |
| M   | [MySQL2](https://www.npmjs.com/package/mysql2)                                       |                                |                                                                                                     |
| M   | [Sequelize](https://www.npmjs.com/package/sequelize)                                 |                                |                                                                                                     |
| V   | [hbs](https://www.npmjs.com/package/hbs)                                             | templating engine              | _May no longer be maintained._ Last published a year ago                                            |
| C   | [Express](https://www.npmjs.com/package/express)                                     |                                |                                                                                                     |
|     | [dotenv](https://www.npmjs.com/package/dotenv)                                       | protect environment variables  |                                                                                                     |
|     | [bcrypt](https://www.npmjs.com/package/bcrypt)                                       |                                |                                                                                                     |
|     | [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) |                                |                                                                                                     |
|     | [nodemon](https://www.npmjs.com/package/nodemon) (dev dependency)                    |                                |                                                                                                     |
|     | [jest](https://jestjs.io/) (dev dependency)                                          |                                |                                                                                                     |
|     | [express-session](https://www.npmjs.com/package/express-session)                     |                                |                                                                                                     |
|     | [morgan](https://www.npmjs.com/package/morgan)                                       | HTTP request logger middleware | _May no longer be maintained._ Last published 3 years ago Switch to something like winston or pino? |

### Git Branches

-   main = production-ready
-   develop = for testing
-   template/\* = boilerplate for use and/or study
-   feature/\* = functionality

## Error Messages and Solutions

### ECONNREFUSED

```
/Users/andrewleonard/codingBootcamp/sequelize-study/node_modules/sequelize/lib/dialects/mysql/connection-manager.js:92
          throw new SequelizeErrors.ConnectionRefusedError(err);
                ^

ConnectionRefusedError [SequelizeConnectionRefusedError]: connect ECONNREFUSED ::1:3300
    at ConnectionManager.connect (/Users/andrewleonard/codingBootcamp/sequelize-study/node_modules/sequelize/lib/dialects/mysql/connection-manager.js:92:17)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async ConnectionManager._connect (/Users/andrewleonard/codingBootcamp/sequelize-study/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:220:24)
    at async /Users/andrewleonard/codingBootcamp/sequelize-study/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:174:32
    at async ConnectionManager.getConnection (/Users/andrewleonard/codingBootcamp/sequelize-study/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:197:7)
    at async /Users/andrewleonard/codingBootcamp/sequelize-study/node_modules/sequelize/lib/sequelize.js:304:26
    at async Sequelize.authenticate (/Users/andrewleonard/codingBootcamp/sequelize-study/node_modules/sequelize/lib/sequelize.js:456:5)
    at async Sequelize.sync (/Users/andrewleonard/codingBootcamp/sequelize-study/node_modules/sequelize/lib/sequelize.js:368:7) {
  parent: Error: connect ECONNREFUSED ::1:3300
      at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1300:16) {
    errno: -61,
    code: 'ECONNREFUSED',
    syscall: 'connect',
    address: '::1',
    port: 3300,
    fatal: true
  },
  original: Error: connect ECONNREFUSED ::1:3300
      at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1300:16) {
    errno: -61,
    code: 'ECONNREFUSED',
    syscall: 'connect',
    address: '::1',
    port: 3300,
    fatal: true
  }
}

Node.js v18.12.1
```

This code from `bin/www` causes the crash:

```
sequelize.sync({ force: false }).then(() => {
	app.listen(port, () => console.log(`Now Listening on ${port}`));
});
```

-   `await` must be used inside an `async` function
