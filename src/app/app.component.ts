import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {CoursesService} from './services/courses.service';
import {AppConfig, CONFIG_TOKEN} from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  courses: Course[];

  constructor(private coursesService: CoursesService,
              @Inject(CONFIG_TOKEN) private config: AppConfig,
              private cd: ChangeDetectorRef) { // Inject decorator because interface
    console.log('root component' + this.coursesService.id);

    console.log(config);
  }

  ngOnInit() {
    this.coursesService.loadCourses().subscribe(courses => {
      this.courses = courses;
      this.cd.markForCheck();
    });
  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe();
  }

  onEditCourse() {
  }
}
