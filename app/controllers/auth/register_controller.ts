import vine from "@vinejs/vine";
import User from "#models/user";
import type { HttpContext } from "@adonisjs/core/http";

export default class RegisterController {
  static validator = vine.compile(
    vine.object({
      email: vine.string().email(),
      password: vine.string(),
    }),
  );

  render({ inertia }: HttpContext) {
    return inertia.render("auth/register");
  }

  async execute({ auth, request, response }: HttpContext) {
    const data = await request.validateUsing(RegisterController.validator);

    const user = await User.create(data);
    await auth.use("web").login(user);

    return response.redirect().toPath("/");
  }
}
