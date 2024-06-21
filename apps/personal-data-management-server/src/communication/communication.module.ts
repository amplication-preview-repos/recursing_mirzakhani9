import { Module } from "@nestjs/common";
import { CommunicationModuleBase } from "./base/communication.module.base";
import { CommunicationService } from "./communication.service";
import { CommunicationController } from "./communication.controller";
import { CommunicationResolver } from "./communication.resolver";

@Module({
  imports: [CommunicationModuleBase],
  controllers: [CommunicationController],
  providers: [CommunicationService, CommunicationResolver],
  exports: [CommunicationService],
})
export class CommunicationModule {}
