import { Module } from '@nestjs/common';
import { HttpModule } from './modules/http.module';
import { DatabaseModule } from './service/database.module';
@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
