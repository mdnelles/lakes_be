import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDetailDto } from 'src/dto/create-detail.dto';
import { IDetail } from 'src/interface/detail.interface';
import { Model } from 'mongoose';
import { UpdateDetailDto } from 'src/dto/update-detail.dto';
@Injectable()
export class DetailService {
  constructor(@InjectModel('Detail') private detailModel: Model<IDetail>) {}
  async createDetail(createDetailDto: CreateDetailDto): Promise<IDetail> {
    const newDetail = await new this.detailModel(createDetailDto);
    return newDetail.save();
  }
  async updateDetail(
    detailId: string,
    updateDetailDto: UpdateDetailDto,
  ): Promise<IDetail> {
    const existingDetail = await this.detailModel.findByIdAndUpdate(
      detailId,
      updateDetailDto,
      { new: true },
    );
    if (!existingDetail) {
      throw new NotFoundException(`Detail #${detailId} not found`);
    }
    return existingDetail;
  }
  async getAllDetails(): Promise<IDetail[]> {
    const detailData = await this.detailModel.find();
    if (!detailData || detailData.length == 0) {
      throw new NotFoundException('Details data not found!');
    }
    return detailData;
  }
  async getDetail(detailId: string): Promise<IDetail> {
    const existingDetail = await this.detailModel.findById(detailId).exec();
    if (!existingDetail) {
      throw new NotFoundException(`Detail #${detailId} not found`);
    }
    return existingDetail;
  }
  async deleteDetail(detailId: string): Promise<IDetail> {
    const deletedDetail = await this.detailModel.findByIdAndDelete(detailId);
    if (!deletedDetail) {
      throw new NotFoundException(`Detail #${detailId} not found`);
    }
    return deletedDetail;
  }
}
