import { Component } from '@angular/core';


@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent {

  selectedFile: File | null = null;
  uploadSuccess = false;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.uploadSuccess = false; // Reset the success message when a new file is selected
  }

  uploadFile() {
    if (this.selectedFile) {
      // Your file upload logic here
      // You can simulate a successful upload with a timeout for demonstration purposes
      setTimeout(() => {
        this.uploadSuccess = true; // Set the success message to true
      }, 2000); // Simulating a 2-second delay
    } else {
      console.log('No file selected.');
    }
  }
}

 





  /*theird coodes */
//   selectedFile: File | null = null;
//   downloadUrl: string | null = null;

//   onFileSelected(event: any) {
//     this.selectedFile = event.target.files[0];
//   }

//   downloadFile() {
//     if (this.downloadUrl) {
//       const link = document.createElement('a');
//       link.href = this.downloadUrl;
//       link.target = '_blank';
//       link.download = this.selectedFile?.name || 'file';
//       link.click();
//     } else {
//       console.log('No file to download.');
//     }
//   }

//   uploadFile() {
//     if (this.selectedFile) {
//       const formData = new FormData();
//       formData.append('file', this.selectedFile);

//       // You can create a Blob URL to simulate a download link
//       const blob = new Blob([this.selectedFile]);
//       this.downloadUrl = window.URL.createObjectURL(blob);
//     } else {
//       console.log('No file selected.');
//     }
//   }
// }





  //secand cooode
//   selectedFile: File | null = null;

//   onFileSelected(event: any) {
//     this.selectedFile = event.target.files[0];
//   }

//   uploadFile() {
//     if (this.selectedFile) {
//       const formData = new FormData();
//       formData.append('file', this.selectedFile);

//       // You can send the formData to your server for further processing here
//       // For example, using HttpClient to make a POST request to an API
//       // this.http.post('your-upload-api-endpoint', formData).subscribe(response => {
//       //   console.log('File uploaded successfully:', response);
//       // });
//     }
//      else {
//       console.log('No file selected.');
//     }
//   }

// }












  // selectedFile: File | null = null;
  // fileUploadForm: any;

  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0];
  // }

  // uploadFile() {
  //   if (this.selectedFile) {
  //     // Here, you can implement the logic to upload the file to your server.
  //     // You can use services or HTTP requests to send the file to your backend.
  //     console.log('Uploading file:', this.selectedFile);
  //     // Reset the form after successful upload if needed.
  //     this.fileUploadForm.reset();
  //   }
  // }

