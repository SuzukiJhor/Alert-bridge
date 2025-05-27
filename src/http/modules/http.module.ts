import { Module } from '@nestjs/common';
import { AlertsController } from 'src/http/controller/alert.controller';
import { DatabaseModule } from 'src/service/modules/database.module';
import { ExecuteAlert } from 'src/use-cases/execute-alert';

@Module({
  imports: [DatabaseModule],
  controllers: [AlertsController],
  providers: [ExecuteAlert],
})
export class HttpModule {}
