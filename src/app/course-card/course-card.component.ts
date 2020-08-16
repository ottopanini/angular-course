import {Component, EventEmitter, Input, OnInit, Output, Self, SkipSelf} from '@angular/core';
import {Course} from '../model/course';
import {CoursesService} from '../services/courses.service';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  providers: [
    CoursesService
  ]
})
export class CourseCardComponent implements OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(@SkipSelf() private coursesService: CoursesService) {

    }

    ngOnInit() {
      console.log('coursesService course card' + this.coursesService.id);
    }


    onSaveClicked(description: string) {

        this.courseEmitter.emit({...this.course, description});

    }




}
