import { Controller, Get, Req, Post, HttpCode, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('lakes')
export class LakesController {
  @Get()
  Example(@Req() request: Request): string {
    console.log(request.body);
    return 'lakes';
  }

  @Get('ab*cd')
  findAll() {
    return 'This route uses a wildcard';
  }
  @Post()
  @HttpCode(204)
  create() {
    return 'This action adds a new cat';
  }
  //http://localhost:3000/lakes/2
  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a Param ID: ${params.id}`;
  }
}
