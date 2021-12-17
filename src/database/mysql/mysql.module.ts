import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            // @ts-ignore
            type: process.env.TYPEORM_CONNECTION,
            host: process.env.TYPEORM_HOST,
            port: parseInt(process.env.TYPEORM_PORT),
            username: process.env.TYPEORM_USERNAME,
            password: process.env.TYPEORM_PASSWORD,
            database: process.env.TYPEORM_DATABASE,
            entities: ['src/entities/**/*.entity.ts'],
            synchronize: true,
            migrations: ['src/migration/*.ts'],
            cli: {
                migrationsDir: 'src/migration'
            }
        })
    ]
})
export default class MysqlModule { }
