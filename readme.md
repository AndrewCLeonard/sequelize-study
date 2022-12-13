# Express Routes

## Visualization of App Structure

https://miro.com/app/board/uXjVP8-oTIY=/

### Packages/Libraries Used

|     | package                                                                              | description                         |
| --- | ------------------------------------------------------------------------------------ | ----------------------------------- |
| M   | [MySQL2](https://www.npmjs.com/package/mysql2)                                       |                                     |
| M   | [Sequelize](https://www.npmjs.com/package/sequelize)                                 |                                     |
<!-- | V   | [express-handlebars](https://www.npmjs.com/package/express-handlebars)               | templating engine                   | -->
| V | 
| V   | bootstrap                                                                            | imported using their CDN, _not_ npm |
| C   | [Express](https://www.npmjs.com/package/express)                                     |                                     |
|     | [dotenv](https://www.npmjs.com/package/dotenv)                                       | protect environment variables       |
|     | [bcrypt](https://www.npmjs.com/package/bcrypt)                                       |                                     |
<!-- |     | [express-session](https://www.npmjs.com/package/express-session)                     |                                     | -->
|     | [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) |                                     |
|     | [nodemon](https://www.npmjs.com/package/nodemon) (dev dependency)                    |                                     |

### Git Branches

-   main = production-ready
-   develop = for testing
-   template/\* = boilerplate for use and/or study
-   feature/\* = functionality
