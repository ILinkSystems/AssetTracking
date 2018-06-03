import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../utils/apiservice';
import { NgProgress } from 'ngx-progressbar';
import { Observable } from 'rxjs/Rx';
import { PageChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { debug } from 'util';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private apiService: APIService, private router: Router, private ngProgress: NgProgress) {
        this.apiService.getConfiguration();
    }

    private userName = '';
    private password = '';
    private result: string;
    public gridView: GridDataResult;

    @Output() onSignUp = new EventEmitter<boolean>();

    loginClicked(): void {
        if (this.userName !== '' && this.password !== '') {
            const body = { username: this.userName, password: this.password };
            this.ngProgress.start();
            this.router.navigate(['/dashboard']);
            // this.apiService.getAssetHistory().then(data => {
                 this.ngProgress.done();

            //     if (data) {
            //         console.log('here');
            //         console.log(data[0]);
            //          this.gridView = {
            //             data: data,
            //             total: 2
            //         };
            //     }
            //     else {
                    
            //         console.log(data);
            //                     this.result = data.message;
            //                 }
            // });
            // this.apiService.authenticate(body)
            //     .then(data => {
            //         this.ngProgress.done();
            //         if (data.success) {
            //             localStorage.setItem('currentUser', JSON.stringify({ user: data.user }));
            //             localStorage.setItem('token', data.token);
            //             this.router.navigate(['/dashboard']);
            //         } else {
            //             this.result = data.message;
            //         }
            //     });
        } else {
            this.result = 'Please provide Username and Password.';
        }


    }

    signupClicked(): void {
        this.router.navigate(['/signup']);
    }
}
