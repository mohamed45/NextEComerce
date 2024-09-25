import { pgTable,serial, text } from "drizzle-orm/pg-core";

export const posts= pgTable('posts',{
    id:serial('id').primaryKey().notNull(),
    title:text('title').notNull()
})


 // "db:generate":"drizzle-kit generate:pg --config drizzle.config.ts",
    //  "db:push":"drizzle-kit push:pg --config drizzle.config.ts"