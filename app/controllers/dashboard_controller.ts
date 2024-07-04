import Post from "#models/post";
import type { HttpContext } from "@adonisjs/core/http";

export default class DashboardController {
  async index({ auth, inertia, response }: HttpContext) {
    const user = auth.user!;

    if (!user) {
      return response.redirect().toPath("/login");
    }

    const posts = await Post.query()
      .where("user_id", user.id)
      .orderBy("created_at", "desc");
    return inertia.render("dashboard/index", { posts });
  }
}
