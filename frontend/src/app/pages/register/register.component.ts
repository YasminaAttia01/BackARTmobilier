import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent  {
  registerForm = this.fb.group({
    name:['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', Validators.required],
  });

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService, 
    private router: Router,
    private route$: ActivatedRoute) {}

  onSubmit(): void {
    this.submitted = true;

    this.userService.registerUser(this.registerForm.value).subscribe({
      next:(res)=>{
        if(res.status==="Success"){
          this.route$.url.subscribe( value =>
            this.router.navigate([''])
          ); 
          alert('success :-)');
          
        }
        else if (res.status==="Error"){
          //
        }
      },
      error:(error)=>{
        //
      },
      complete:()=>{}
    })
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
