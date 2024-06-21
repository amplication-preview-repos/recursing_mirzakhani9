import * as graphql from "@nestjs/graphql";
import { DataRequestResolverBase } from "./base/dataRequest.resolver.base";
import { DataRequest } from "./base/DataRequest";
import { DataRequestService } from "./dataRequest.service";

@graphql.Resolver(() => DataRequest)
export class DataRequestResolver extends DataRequestResolverBase {
  constructor(protected readonly service: DataRequestService) {
    super(service);
  }
}
