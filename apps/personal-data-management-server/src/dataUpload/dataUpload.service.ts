import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataUploadServiceBase } from "./base/dataUpload.service.base";

@Injectable()
export class DataUploadService extends DataUploadServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
