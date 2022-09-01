import { Injectable } from '@nestjs/common';
import { StudentEntity } from '../entities/students.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentDTO } from '../model/student.dto.input';

@Injectable()
export class StudentsService {
  constructor(@InjectRepository(StudentEntity) private studentRepository: Repository<StudentEntity>) {}

  async findAllStudents(): Promise<StudentDTO[]> {
    return await (await this.studentRepository.find()).map(student => student.toStudent());
  }

  async findById(id: number) {
    const findStudent = await this.studentRepository.findOne({
      where: {
        id: id
      }
    });

    if (!findStudent) {
      return 'Student not found';
    }
  }

  findByCourse(course: string) {
    return `This action returns all students by course : ${course} FROM REPOSITORY`;
  }

  findByEmail(email: string) {
    return `This action returns a student by email FROM REPOSITORY`;
  }

  findByAdvisorName(advisor_name: string) {
    return `This action returns a student by advisor_name : ${advisor_name} FROM REPOSITORY`;
  }

  createStudent(student: StudentDTO) {
    return student; //TODO : create student
  }

  updateStudent(student: StudentDTO) {
    return student; //TODO : update student
  }
}
