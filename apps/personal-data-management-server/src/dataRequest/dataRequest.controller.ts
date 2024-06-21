import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DataRequestService } from "./dataRequest.service";
import { DataRequestControllerBase } from "./base/dataRequest.controller.base";

@swagger.ApiTags("dataRequests")
@common.Controller("dataRequests")
export class DataRequestController extends DataRequestControllerBase {
  constructor(protected readonly service: DataRequestService) {
    super(service);
  }
}
