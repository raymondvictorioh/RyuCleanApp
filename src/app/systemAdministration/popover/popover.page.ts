import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/job';
import { JobService } from '../../job.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  pendingJobs: Job [];
  pendingJobsNumber: number;
  schelduedJobs: Job[];
  schelduedJobsNumber: number;
  

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getPendingJobs().subscribe(
      response => {
        this.pendingJobs = response.jobs;
        
        this.pendingJobsNumber = this.pendingJobs.length;
      },
      error => {
        console.log('********* ViewScheduledOrdePage ' + error);
      }
    )


    this.jobService.getAcceptedJobs().subscribe(
      response => {
        this.schelduedJobs = response.jobs;
        this. schelduedJobsNumber= this.schelduedJobs.length;
      },
      error => {
        console.log('********* ViewScheduledOrdePage ' + error);
      }
    )

    
    this.jobService.getAssignedJobs().subscribe(
        response => {
          let assignedJobs: Job[] = response.jobs;
          this.schelduedJobsNumber = this.schelduedJobsNumber+assignedJobs.length;
          
  
        },
        error => {
          console.log('********* ViewScheduledOrdePage ' + error);
        }
      )
    }
  

}
