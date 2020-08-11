import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();
  constructor() { }

  @Input()
  cardIndex: number;

  ngOnInit(): void {
  }

  onCourseViewed() {
    console.log('card component - btn clicked');
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return 'beginner';
    }
  }

  cardStyles() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }
}
