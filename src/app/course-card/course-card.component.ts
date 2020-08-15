import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output, QueryList,
  ViewChild
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input()
  course: Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();
  constructor() { }

  @Input()
  cardIndex: number;

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<ElementRef>;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.images);
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
