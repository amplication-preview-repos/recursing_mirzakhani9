import * as graphql from "@nestjs/graphql";
import { CommunicationResolverBase } from "./base/communication.resolver.base";
import { Communication } from "./base/Communication";
import { CommunicationService } from "./communication.service";

@graphql.Resolver(() => Communication)
export class CommunicationResolver extends CommunicationResolverBase {
  constructor(protected readonly service: CommunicationService) {
    super(service);
  }
}
