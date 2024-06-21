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
import { DataRequestWhereInput } from "./DataRequestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DataRequestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DataRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => DataRequestWhereInput)
  @IsOptional()
  @Field(() => DataRequestWhereInput, {
    nullable: true,
  })
  every?: DataRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => DataRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => DataRequestWhereInput)
  @IsOptional()
  @Field(() => DataRequestWhereInput, {
    nullable: true,
  })
  some?: DataRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => DataRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => DataRequestWhereInput)
  @IsOptional()
  @Field(() => DataRequestWhereInput, {
    nullable: true,
  })
  none?: DataRequestWhereInput;
}
export { DataRequestListRelationFilter as DataRequestListRelationFilter };