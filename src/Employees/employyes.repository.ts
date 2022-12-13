import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.sevice";
import { PartialEmployeeDto } from "./dto/partialEmployeeInput.dto";
import { IEmployeeEntity } from "./entities/employee.entity";

@Injectable()
export class EmployeeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createEmployee(Employee: IEmployeeEntity): Promise<IEmployeeEntity> {
    const CreatedEmployee = await this.prisma.Employee.create({ data: Employee });
    return CreatedEmployee;
  }

  async updateEmployee(Employee: PartialEmployeeDto): Promise<IEmployeeEntity> {
    const UpdatedEmployee = await this.prisma.Employee.update({
      where: { id: Employee.id },
      data: Employee,
    });
    return UpdatedEmployee;
  }

  async deleteEmployee(id: string): Promise<IEmployeeEntity> {
    const deletedEmployee = await this.prisma.Employee.delete({
      where: { id: id },
    });
    return deletedEmployee;
  }

  async findAllEmployee(): Promise<IEmployeeEntity[]> {
    const allEmployees = await this.prisma.Employee.findMany();
    return allEmployees;
  }

  async findEmployeeById(id: string): Promise<IEmployeeEntity> {
    const foundedEmployee = await this.prisma.Employee.findUniqueOrThrow({
      where: { id: id },
    });
    return foundedEmployee;
  }
}