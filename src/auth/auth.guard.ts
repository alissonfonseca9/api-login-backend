import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { admin } from "../firebase/firebase-admin";

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Token não enviado.');
    }

    const token = authHeader.replace('Bearer ', '');

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);

      request.user = decodedToken;

      return true;
    } catch {
      throw new UnauthorizedException('Token inválido.');
    }
  }
}
