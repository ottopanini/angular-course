import {AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit {
  @Input()
  course: Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();
  constructor() { }

  @Input()
  cardIndex: number;

  @ContentChild(CourseImageComponent)
  image: CourseImageComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.image);
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
