import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PrivacyAgreementService } from "./privacyAgreement.service";
import { PrivacyAgreementControllerBase } from "./base/privacyAgreement.controller.base";

@swagger.ApiTags("privacyAgreements")
@common.Controller("privacyAgreements")
export class PrivacyAgreementController extends PrivacyAgreementControllerBase {
  constructor(protected readonly service: PrivacyAgreementService) {
    super(service);
  }
}
