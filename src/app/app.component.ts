import {Component, Inject, OnInit} from '@angular/core';
import {Course} from './model/course';
import {CoursesService} from './courses/courses.service';
import {AppConfig, CONFIG_TOKEN} from './config';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  courses: Course[] = COURSES;

  constructor(private coursesService: CoursesService,
              @Inject(CONFIG_TOKEN) private config: AppConfig) { // Inject decorator because interface
  }

  ngOnInit() {
  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe();
  }

  onEditCourse() {
    this.courses[1].category = 'ADVANCED';
  }
}
