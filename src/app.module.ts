import { Module } from '@nestjs/common';
import { HttpModule } from './http/modules/http.module';
import { DatabaseModule } from './service/modules/database.module';
@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
