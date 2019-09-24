import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BlogService} from '../services/blog.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    public blogsObservable: Observable<any>;

    constructor(private blogService: BlogService) {
        this.blogsObservable = this.blogService.get_blogs();
    }

    ngOnInit() {

    }
}
