# Express Routes

## Visualization of App Structure

https://miro.com/app/board/uXjVP8-oTIY=/?share_link_id=347451481228

### Packages/Libraries Used

|     | package                                                                              | description                    | comments                                                                                 |
| --- | ------------------------------------------------------------------------------------ | ------------------------------ | ---------------------------------------------------------------------------------------- |
| M   | [MySQL2](https://www.npmjs.com/package/mysql2)                                       |                                |                                                                                          |
| M   | [Sequelize](https://www.npmjs.com/package/sequelize)                                 |                                |                                                                                          |
| V   | [hbs](https://www.npmjs.com/package/hbs)                                             | templating engine              | _May no longer be maintained._ Last published a year ago                                 |
| C   | [Express](https://www.npmjs.com/package/express)                                     |                                |                                                                                          |
|     | [dotenv](https://www.npmjs.com/package/dotenv)                                       | protect environment variables  |                                                                                          |
|     | [bcrypt](https://www.npmjs.com/package/bcrypt)                                       |                                |                                                                                          |
|     | [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) |                                |                                                                                          |
|     | [nodemon](https://www.npmjs.com/package/nodemon) (dev dependency)                    |                                |                                                                                          |
|     | [jest](https://jestjs.io/) (dev dependency)                                          |                                |                                                                                          |
|     | [express-session](https://www.npmjs.com/package/express-session)                     |                                |                                                                                          |
|     | [morgan](https://www.npmjs.com/package/morgan)                                       | HTTP request logger middleware | _May no longer be maintained._ Last published 3 years ago Switch to something like pino? |

### Git Branches

-   main = production-ready
-   develop = for testing
-   template/\* = boilerplate for use and/or study
-   feature/\* = functionality
