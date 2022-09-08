import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common'
import { CreateStudentDTO } from '../model/student.dto.input'
import { ResponseStudentDTO } from '../model/student.response.dto'
import { StudentsService } from '../service/students.service'

@Controller('v1/students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get('find/bycourse')
  async findByCourse(
    @Query('course') course: string
  ): Promise<ResponseStudentDTO[]> {
    return (await this.studentsService.findByCourse(course)).map((students) =>
      students.toStudent()
    )
  }

  @Get('/list/all')
  async findAllStudents() {
    return (await this.studentsService.findAllStudents()).map((students) =>
      students.toStudent()
    )
  }

  @Get('find/byid/:id')
  async findById(@Param('id') id: number) {
    const student: ResponseStudentDTO = await (
      await this.studentsService.findById(id)
    ).toStudent()

    if (!student) throw new NotFoundException('Student not found')

    return student
  }

  @Get('find/byemail')
  async findByEmail(@Query('email') email: string) {
    return await (await this.studentsService.findByEmail(email)).toStudent()
  }

  @Get('/find/byadvisorid/:advisor_id')
  async findByAdvisorId(@Param('advisor_id') advisor_id: number) {
    return (await this.studentsService.findByAdvisorId(advisor_id)).map(
      (students) => students.toStudent()
    )
  }

  @Post()
  async createStudent(@Body() student: CreateStudentDTO) {
    return this.studentsService.createStudent(student) // TODO : create student
  }

  @Patch()
  async updateStudent(@Body() student: CreateStudentDTO) {
    return this.studentsService.updateStudent(student) // TODO : update student
  }
}
