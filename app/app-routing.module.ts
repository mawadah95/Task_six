import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordAttendanceComponent } from './record-attendance/record-attendance.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'attendance', component: RecordAttendanceComponent },
  { path: 'upload', component: UploadFilesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
