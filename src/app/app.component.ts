import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, OnInit} from '@angular/core';
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
export class AppComponent implements OnInit, DoCheck {

  courses: Course[];
  private loaded: boolean;

  constructor(private coursesService: CoursesService,
              @Inject(CONFIG_TOKEN) private config: AppConfig,
              private cd: ChangeDetectorRef) { // Inject decorator because interface
    console.log('root component' + this.coursesService.id);

    console.log(config);
  }

  ngOnInit() {
    this.coursesService.loadCourses().subscribe(courses => {
      this.courses = courses;
      this.loaded = true;
    });
  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe();
  }

  onEditCourse() {
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');

    if (this.loaded) {
      console.log('checks...');
      this.cd.markForCheck();
      this.loaded = undefined;
    }
  }
}
