import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';
import {CoursesService} from '../services/courses.service';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Input()
    type: string;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(private coursesService: CoursesService) {

    }

    ngOnInit() {
      console.log('coursesService course card' + this.coursesService.id);
      console.log(this.type);
    }


    onSaveClicked(description: string) {

        this.courseEmitter.emit({...this.course, description});

    }

  onTitleChanged(newTitle: string) {
    this.course.description = newTitle;
  }
}
