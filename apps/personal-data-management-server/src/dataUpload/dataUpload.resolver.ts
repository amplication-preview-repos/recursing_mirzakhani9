import * as graphql from "@nestjs/graphql";
import { DataUploadResolverBase } from "./base/dataUpload.resolver.base";
import { DataUpload } from "./base/DataUpload";
import { DataUploadService } from "./dataUpload.service";

@graphql.Resolver(() => DataUpload)
export class DataUploadResolver extends DataUploadResolverBase {
  constructor(protected readonly service: DataUploadService) {
    super(service);
  }
}
