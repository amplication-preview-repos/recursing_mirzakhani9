import { Module } from "@nestjs/common";
import { PrivacyAgreementModuleBase } from "./base/privacyAgreement.module.base";
import { PrivacyAgreementService } from "./privacyAgreement.service";
import { PrivacyAgreementController } from "./privacyAgreement.controller";
import { PrivacyAgreementResolver } from "./privacyAgreement.resolver";

@Module({
  imports: [PrivacyAgreementModuleBase],
  controllers: [PrivacyAgreementController],
  providers: [PrivacyAgreementService, PrivacyAgreementResolver],
  exports: [PrivacyAgreementService],
})
export class PrivacyAgreementModule {}
