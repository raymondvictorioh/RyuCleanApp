import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/job';
import { Router, ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/job.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-date-setting',
  templateUrl: './date-setting.page.html',
  styleUrls: ['./date-setting.page.scss'],
})
export class DateSettingPage implements OnInit {

        newJob: Job;
        submitted: boolean;
          
        resultSuccess: boolean;
        resultError: boolean;
        message: string;

        customPickerOptions: any;
      
        constructor(private router: Router,
            private activatedRoute: ActivatedRoute,
            private jobService: JobService) {
            this.customPickerOptions = {
              buttons: [{
                text: 'Save',
                handler: () => console.log('Clicked Save!')
              }, {
                text: 'Log',
                handler: () => {
                  console.log('Clicked Log. Do not Dismiss.');
                  return false;
                }
              }]
            }

            this.newJob = this.jobService.getCurrentJob();
            this.submitted = false;
            this.resultSuccess = false; 
            this.resultError = false;
          
        }
      
      

      ngOnInit() {
        
      }

      clear (){
        this.submitted = false;
        //let jobNum = this.newJob.jobNum;
        this.newJob = new Job();
        //this.newJob.jobNum = jobNum;

      }

      submit(submitForm : NgForm){
        this.router.navigateByUrl('jobSetting');
      }

}
