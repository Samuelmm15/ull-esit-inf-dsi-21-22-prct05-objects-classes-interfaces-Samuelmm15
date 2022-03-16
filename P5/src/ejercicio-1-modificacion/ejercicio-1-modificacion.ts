/**
 * Class Person
 */
class person {
  constructor(private name: string, private readonly surname: string,
    private readonly born: string, private readonly genre: string) {
  }
  getName(): string {
    return this.name;
  }
  getSurname(): string {
    return this.surname;
  }
  getBorn(): string {
    return this.born;
  }
  getGenre(): string {
    return this.genre;
  }
}
/**
 * Class Student
 */
class student extends person {
  constructor(name: string, surname: string,
      born: string, genre: string, public eMail: string,
      public gradeAverage: number) {
    super(name, surname, born, genre);
  }
}
//** */
class teacher extends person {
  constructor(name: string, surname: string,
      born: string, genre: string, public eMail: string,
      public degree: string) {
    super(name, surname, born, genre);
  }
}

/**
 * Class Course
 */
export class course { // Recibe una lista de objetos
  constructor(public courseName: string) { // Corregir
  }
  getTeacherName(teacher: teacher) {
    console.log(teacher.getName());
  }
  getStudentName(student: student) {
    console.log(student.getName());
  }
}

export const firstStudent =
  new student(`Pepe`, `Martín`, `11-02-2001`, `Hombre`,
      `pepe15@gmail.com`, 8);

export const firstTeacher =
  new teacher(`Juan`, `Perez`, `15-11-1967`, `Hombre`,
      `juan13@gmail.com`, `informática`);

export const courseExample =
  new course(`DSI`);

courseExample.getStudentName(firstStudent);
courseExample.getTeacherName(firstTeacher);

