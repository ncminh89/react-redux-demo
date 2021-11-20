import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { PhasesService } from './phases.service';

@Controller("phases")
export class PhasesController {
  constructor(private readonly phasesService: PhasesService) { }

  @Get()
  findAll(@Res() res) {
    var data = this.phasesService.getAll();
    res.json(data)
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Res() res) {
    var data = this.phasesService.getOne(id)
    res.json(data)
  }
}
