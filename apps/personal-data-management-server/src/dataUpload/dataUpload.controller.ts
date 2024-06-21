import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DataUploadService } from "./dataUpload.service";
import { DataUploadControllerBase } from "./base/dataUpload.controller.base";

@swagger.ApiTags("dataUploads")
@common.Controller("dataUploads")
export class DataUploadController extends DataUploadControllerBase {
  constructor(protected readonly service: DataUploadService) {
    super(service);
  }
}
