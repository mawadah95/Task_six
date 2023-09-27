import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordAttendanceComponent } from './record-attendance/record-attendance.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'primeng/carousel';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    AppComponent,
    RecordAttendanceComponent,
    UploadFilesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    DropdownModule,
    CalendarModule,
    BrowserAnimationsModule,
    CarouselModule,
    MessageModule,
    MessagesModule,
    FileUploadModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

