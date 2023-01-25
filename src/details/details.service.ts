import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDetailsDto } from 'src/dto/create-details.dto';
import { IDetails } from 'src/interface/details.interface';
import { Model } from 'mongoose';
import { UpdateDetailsDto } from 'src/dto/update-details.dto';
@Injectable()
export class DetailsService {
  constructor(@InjectModel('Details') private detailsModel: Model<IDetails>) {}
  async createDetails(createDetailsDto: CreateDetailsDto): Promise<IDetails> {
    const newDetails = await new this.detailsModel(createDetailsDto);
    return newDetails.save();
  }
  async updateDetails(
    detailsId: string,
    updateDetailsDto: UpdateDetailsDto,
  ): Promise<IDetails> {
    const existingDetails = await this.detailsModel.findByIdAndUpdate(
      detailsId,
      updateDetailsDto,
      { new: true },
    );
    if (!existingDetails) {
      throw new NotFoundException(`Details #${detailsId} not found`);
    }
    return existingDetails;
  }
  async getAllDetailss(): Promise<IDetails[]> {
    const detailsData = await this.detailsModel.find();
    if (!detailsData || detailsData.length == 0) {
      throw new NotFoundException('Detailss data not found!');
    }
    return detailsData;
  }
  async getDetails(detailsId: string): Promise<IDetails> {
    const existingDetails = await this.detailsModel.findById(detailsId).exec();
    if (!existingDetails) {
      throw new NotFoundException(`Details #${detailsId} not found`);
    }
    return existingDetails;
  }
  async deleteDetails(detailsId: string): Promise<IDetails> {
    const deletedDetails = await this.detailsModel.findByIdAndDelete(detailsId);
    if (!deletedDetails) {
      throw new NotFoundException(`Details #${detailsId} not found`);
    }
    return deletedDetails;
  }
}
