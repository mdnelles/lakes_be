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
import { CreateDetailsDto } from 'src/dto/create-details.dto';
import { UpdateDetailsDto } from 'src/dto/update-details.dto';
import { DetailsService } from 'src/details/details.service';
@Controller('details')
export class DetailsController {
  constructor(private readonly detailsService: DetailsService) {}
  @Post()
  async createDetails(
    @Res() response,
    @Body() createDetailsDto: CreateDetailsDto,
  ) {
    try {
      const newDetails = await this.detailsService.createDetails(
        createDetailsDto,
      );
      return response.status(HttpStatus.CREATED).json({
        message: 'Details has been created successfully',
        newDetails,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Details not created!',
        error: 'Bad Request',
      });
    }
  }
  @Put('/:id')
  async updateDetails(
    @Res() response,
    @Param('id') detailsId: string,
    @Body() updateDetailsDto: UpdateDetailsDto,
  ) {
    try {
      const existingDetails = await this.detailsService.updateDetails(
        detailsId,
        updateDetailsDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Details has been successfully updated',
        existingDetails,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get()
  async getDetailss(@Res() response) {
    try {
      const detailsData = await this.detailsService.getAllDetailss();
      return response.status(HttpStatus.OK).json({
        message: 'All detailss data found successfully',
        detailsData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get('/:id')
  async getDetails(@Res() response, @Param('id') detailsId: string) {
    try {
      const existingDetails = await this.detailsService.getDetails(detailsId);
      return response.status(HttpStatus.OK).json({
        message: 'Details found successfully',
        existingDetails,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Delete('/:id')
  async deleteDetails(@Res() response, @Param('id') detailsId: string) {
    try {
      const deletedDetails = await this.detailsService.deleteDetails(detailsId);
      return response.status(HttpStatus.OK).json({
        message: 'Details deleted successfully',
        deletedDetails,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
