/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommunicationUpdateManyWithoutCompaniesInput } from "./CommunicationUpdateManyWithoutCompaniesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { DataRequestUpdateManyWithoutCompaniesInput } from "./DataRequestUpdateManyWithoutCompaniesInput";
import { DataUploadUpdateManyWithoutCompaniesInput } from "./DataUploadUpdateManyWithoutCompaniesInput";
import { PrivacyAgreementUpdateManyWithoutCompaniesInput } from "./PrivacyAgreementUpdateManyWithoutCompaniesInput";

@InputType()
class CompanyUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CommunicationUpdateManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => CommunicationUpdateManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => CommunicationUpdateManyWithoutCompaniesInput, {
    nullable: true,
  })
  communications?: CommunicationUpdateManyWithoutCompaniesInput;

  @ApiProperty({
    required: false,
    type: () => DataRequestUpdateManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => DataRequestUpdateManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => DataRequestUpdateManyWithoutCompaniesInput, {
    nullable: true,
  })
  dataRequests?: DataRequestUpdateManyWithoutCompaniesInput;

  @ApiProperty({
    required: false,
    type: () => DataUploadUpdateManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => DataUploadUpdateManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => DataUploadUpdateManyWithoutCompaniesInput, {
    nullable: true,
  })
  dataUploads?: DataUploadUpdateManyWithoutCompaniesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  industry?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  privacyAgreement?: string | null;

  @ApiProperty({
    required: false,
    type: () => PrivacyAgreementUpdateManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => PrivacyAgreementUpdateManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => PrivacyAgreementUpdateManyWithoutCompaniesInput, {
    nullable: true,
  })
  privacyAgreements?: PrivacyAgreementUpdateManyWithoutCompaniesInput;
}

export { CompanyUpdateInput as CompanyUpdateInput };