import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShipmentsModule } from './shipments/shipments.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ShipmentsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-181.railway.app',
      port: 7544,
      username: 'postgres',
      password: 'N35n5WJ3Pa3gxtPfThOI',
      database: 'railway',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
