import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login() {
    return "I'm logged in";
  }
  @Post('signup')
  signup() {
    return "I'm signed up";
  }
}
