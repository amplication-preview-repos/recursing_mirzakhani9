import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataRequestServiceBase } from "./base/dataRequest.service.base";

@Injectable()
export class DataRequestService extends DataRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
