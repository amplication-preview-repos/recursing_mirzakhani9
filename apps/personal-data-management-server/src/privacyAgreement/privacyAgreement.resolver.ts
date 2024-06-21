import * as graphql from "@nestjs/graphql";
import { PrivacyAgreementResolverBase } from "./base/privacyAgreement.resolver.base";
import { PrivacyAgreement } from "./base/PrivacyAgreement";
import { PrivacyAgreementService } from "./privacyAgreement.service";

@graphql.Resolver(() => PrivacyAgreement)
export class PrivacyAgreementResolver extends PrivacyAgreementResolverBase {
  constructor(protected readonly service: PrivacyAgreementService) {
    super(service);
  }
}
