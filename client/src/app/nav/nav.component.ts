import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  //loggedIn: boolean;
  //currentUser$: Observable<User>;

  constructor(public accountService: AccountService, private rounter: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    //this.currentUser$ = this.accountService.currentUser$;
  }

  login(){
    this.accountService.login(this.model).subscribe(response =>{
      console.log(response);
      this.rounter.navigateByUrl('/members');
    }
    // ,error=>{
    //   console.log(error);
    //   this.toastr.error(error.error);
    // }
  )
}
  logout() {
    this.accountService.logout();
    this.rounter.navigateByUrl('/');
  }
}
