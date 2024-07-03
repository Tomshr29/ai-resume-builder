import { DateTime } from "luxon";
import hash from "@adonisjs/core/services/hash";
import { compose } from "@adonisjs/core/helpers";
import { BaseModel, column, hasMany } from "@adonisjs/lucid/orm";
import { withAuthFinder } from "@adonisjs/auth/mixins/lucid";

import Post from "#models/post";
import type { HasMany } from "@adonisjs/lucid/types/relations";

const AuthFinder = withAuthFinder(() => hash.use("scrypt"), {
  uids: ["email"],
  passwordColumnName: "password",
});

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: string;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null;

  @column()
  declare email: string;

  @column()
  declare password: string;

  @hasMany(() => Post)
  declare posts: HasMany<typeof Post>;
}
