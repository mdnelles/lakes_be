import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.input';
import { UpdateTestInput } from './dto/update-test.input';
import { ITest } from './interface/test.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TestService {
  constructor(@InjectModel('Test') private detailModel: Model<ITest>) {}
  create(createTestInput: CreateTestDto) {
    return 'This action adds a new test';
  }

  findAll() {
    return `This action returns all test`;
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestInput: UpdateTestInput) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
