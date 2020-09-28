import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    public users = [];

    constructor(private _userService: UserService) { }

    ngOnInit() {
        this._userService.getUsers()
            .subscribe(data => this.users = data);

    }

}

