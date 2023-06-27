import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'name',
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'email',
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'password',
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'role',
  })
  role: string;
}
