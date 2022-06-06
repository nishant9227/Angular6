import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = {username: '', password: '', remember: false};
  authService: any;

  

  constructor( public router: Router,
    public dialogRef: MatDialogRef<LoginComponent>) { }

    data = {username: '', password: ''};

  ngOnInit() {
  }

  onSubmit() {
    console.log('User: ', this.user);
    this.dialogRef.close();
  }

  goTo(path): void {
    this.router.navigateByUrl(path);
}

login(form: NgForm): void {
    this.authService.login(form.value)
        .subscribe(result => {
            if (result.success) {
                this.goTo('home');
            }
        });
}
}
