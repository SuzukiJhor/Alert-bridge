import { Module } from '@nestjs/common';
import { AlertsController } from 'src/http/controller/alert.controller';
import { DatabaseModule } from 'src/service/modules/database.module';
import { CancelAlert } from 'src/use-cases/cancel-alert';
import { CountAlert } from 'src/use-cases/count-recipient-alert';
import { ExecuteAlert } from 'src/use-cases/execute-alert';
import { ReadtAlert } from 'src/use-cases/read-alert';

@Module({
  imports: [DatabaseModule],
  controllers: [AlertsController],
  providers: [ExecuteAlert, CountAlert, ReadtAlert, CancelAlert],
})
export class HttpModule {}
