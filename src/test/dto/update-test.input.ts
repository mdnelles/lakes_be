import { CreateTestDto } from './create-test.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTestInput extends PartialType(CreateTestDto) {
  @Field(() => Int)
  id: number;
}
