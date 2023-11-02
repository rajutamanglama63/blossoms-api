import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    const authorization = req.get('Authorization');

    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      req.user = authorization.substring(7);

      return true;
    }

    return false;
  }
}
