import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('Usuarios del Sistema')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
create(@Body() createUserDto: CreateUserDto) { // <-- Cambiado de any a CreateUserDto
  return this.userService.create(createUserDto);
}

  @Get()
  @ApiOperation({ summary: 'Listar usuarios registrados' })
  findAll() {
    return this.userService.findAll();
  }
}