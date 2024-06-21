import { Module } from "@nestjs/common";
import { DataRequestModuleBase } from "./base/dataRequest.module.base";
import { DataRequestService } from "./dataRequest.service";
import { DataRequestController } from "./dataRequest.controller";
import { DataRequestResolver } from "./dataRequest.resolver";

@Module({
  imports: [DataRequestModuleBase],
  controllers: [DataRequestController],
  providers: [DataRequestService, DataRequestResolver],
  exports: [DataRequestService],
})
export class DataRequestModule {}
