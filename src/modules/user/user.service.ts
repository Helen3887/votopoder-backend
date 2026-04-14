import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(data: any) {
    // Nota: Aquí luego agregaremos el hash de la contraseña
    const newUser = this.userRepository.create(data);
    return await this.userRepository.save(newUser);
  }

  async findAll() {
    return await this.userRepository.find({
      select: ['id', 'nombreCompleto', 'email', 'rol', 'createdAt'] // No devolvemos la clave por seguridad
    });
  }
}