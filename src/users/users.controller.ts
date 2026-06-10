import {
  Controller,
  Get,
  NotFoundException,
  Req,
  UseGuards,
} from "@nestjs/common";

import { AuthGuard } from "../auth/auth.guard";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get("me")
  async getMe(@Req() req: any) {
    const uid = req.user.uid;

    const user = await this.usersService.getMe(uid);

    if (!user) {
      throw new NotFoundException(
        "Usuário não encontrado no Firestore.",
      );
    }

    return user;
  }
}