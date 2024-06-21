import { Module } from "@nestjs/common";
import { DataUploadModuleBase } from "./base/dataUpload.module.base";
import { DataUploadService } from "./dataUpload.service";
import { DataUploadController } from "./dataUpload.controller";
import { DataUploadResolver } from "./dataUpload.resolver";

@Module({
  imports: [DataUploadModuleBase],
  controllers: [DataUploadController],
  providers: [DataUploadService, DataUploadResolver],
  exports: [DataUploadService],
})
export class DataUploadModule {}
