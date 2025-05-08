import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "blog_project",
    password: "password",
    database: "blog_project",
    synchronize: true,
    logging: false,
    entities: [
        "src/entities/**/*.ts"
    ],
    migrations: [],
    subscribers: [],
})
