import {
  Controller,
  Get,
  Req,
  UseGuards,
  NotFoundException,
} from "@nestjs/common";

import { AuthGuard } from "./auth.guard";
import { UsersService } from "./users.service";

@Controller()
export class AppController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Get()
  getHello() {
    return {
      message: "API NestJS funcionando",
    };
  }

  @UseGuards(AuthGuard)
  @Get("profile")
  getProfile(@Req() req: any) {
    return {
      message: "Usuário autenticado",
      user: req.user,
    };
  }

  @UseGuards(AuthGuard)
  @Get("users/me")
  async getMe(@Req() req: any) {
    const uid = req.user.uid;

    const user = await this.usersService.getMe(uid);

    if (!user) {
      throw new NotFoundException(
        "Usuário não encontrado no Firestore."
      );
    }

    return user;
  }
}