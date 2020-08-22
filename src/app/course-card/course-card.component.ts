import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  Component, DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Course} from '../model/course';
import {CoursesService} from '../services/courses.service';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges, AfterContentChecked, AfterViewChecked, AfterContentInit,
  AfterViewInit, DoCheck {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  constructor(private coursesService: CoursesService, @Attribute('type') private type: string) {
    console.log('constructor', this.course);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  // don't change properties of the view part but common dom ops like scrolling to bottom of list or something like that
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  // don't change properties of the content part
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');

    this.course.description = 'ngAfterContentChecked';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit', this.course);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  onSaveClicked(description: string) {

    this.courseEmitter.emit({...this.course, description});

  }

  onTitleChanged(newTitle: string) {
    this.course.description = newTitle;
  }
}
