import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api'; 

@Component({
  selector: 'app-record-attendance',
  templateUrl: './record-attendance.component.html',
  styleUrls: ['./record-attendance.component.css']
})
export class RecordAttendanceComponent {
  students: Student[] = [];
  newStudent: Student = { name: '', date: new Date(), status: '' }; // Initialize date as a Date object
  statusOptions: any[] = [
    { label: 'Present', value: 'Present' },
    { label: 'Absent', value: 'Absent' }
  ];

  addStudent() {
    if (this.newStudent.name && this.newStudent.date && this.newStudent.status) {
      this.students.push({ ...this.newStudent });
      this.newStudent = { name: '', date: new Date(), status: '' }; // Reset date to a new Date object
    }
  }

  deleteStudent(index: number) {
    if (index >= 0 && index < this.students.length) {
      this.students.splice(index, 1);
    }
  }
}

interface Student {
  name: string;
  date: Date; // Change the type to Date
  status: string;
}



//   attendanceRecords: any[] = [];
//   students: any[] = [
//     { name: 'Student 1', date: new Date(), attendance: 'Present' },
//     { name: 'Student 2', date: new Date(), attendance: 'Absent' },
//     // Add more students here
//   ];

//   attendanceOptions: any[] = [
//     { label: 'Present', value: 'Present' },
//     { label: 'Absent', value: 'Absent' },
//   ];


//   selectedStudent: any;

//   addStudent() {
//     const newStudent = {
//       id: this.students.length + 1,
//       name: '',
//       date: new Date(),
//       attendance: 'Present'
//     };
//     this.students.push(newStudent);
//   }

//   deleteStudent() {
//     if (this.selectedStudent) {
//       const index = this.students.findIndex(student => student.id === this.selectedStudent.id);
//       if (index !== -1) {
//         this.students.splice(index, 1);
//         this.selectedStudent = null;
//       }
//     }
//   }
// }

