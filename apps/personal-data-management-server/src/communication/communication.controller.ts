import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommunicationService } from "./communication.service";
import { CommunicationControllerBase } from "./base/communication.controller.base";

@swagger.ApiTags("communications")
@common.Controller("communications")
export class CommunicationController extends CommunicationControllerBase {
  constructor(protected readonly service: CommunicationService) {
    super(service);
  }
}
