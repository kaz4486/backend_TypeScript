import { User } from '../interfaces/user.interface';
import { BaseRepository } from './base-repository.interface';

export interface UsersRepository extends BaseRepository<User> {
    findUserByFirstName(name: string): User;
}