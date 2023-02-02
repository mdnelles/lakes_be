import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateDetailDto } from 'src/dto/create-detail.dto';
import { UpdateDetailDto } from 'src/dto/update-detail.dto';
import { DetailService } from 'src/detail/detail.service';
@Controller('detail')
export class DetailController {
  constructor(private readonly detailService: DetailService) {}
  // create
  @Post()
  async createDetail(
    @Res() response,
    @Body() createDetailDto: CreateDetailDto,
  ) {
    try {
      const newDetail = await this.detailService.createDetail(createDetailDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Detail has been created successfully',
        newDetail,
      });
    } catch (err) {
      console.log(err);
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Detail not created!',
        error: 'Bad Request',
      });
    }
  }

  // update
  @Put('/:id')
  async updateDetail(
    @Res() response,
    @Param('id') detailId: string,
    @Body() updateDetailDto: UpdateDetailDto,
  ) {
    try {
      const existingDetail = await this.detailService.updateDetail(
        detailId,
        updateDetailDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Detail has been successfully updated',
        existingDetail,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get()
  async getDetails(@Res() response) {
    try {
      const detailData = await this.detailService.getAllDetails();
      return response.status(HttpStatus.OK).json({
        message: 'All details data found successfully',
        detailData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get('/:id')
  async getDetail(@Res() response, @Param('id') detailId: string) {
    try {
      const existingDetail = await this.detailService.getDetail(detailId);
      return response.status(HttpStatus.OK).json({
        message: 'Detail found successfully',
        existingDetail,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Delete('/:id')
  async deleteDetail(@Res() response, @Param('id') detailId: string) {
    try {
      const deletedDetail = await this.detailService.deleteDetail(detailId);
      return response.status(HttpStatus.OK).json({
        message: 'Detail deleted successfully',
        deletedDetail,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
