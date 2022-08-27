import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Users/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, ValidationErrors, ValidatorFn, AbstractControl  } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

hide = true
  firstName!: string;
  lastName!: string;
  password!:string;
  // confirmPassword!:string;
  username!: string;
  city!:string;
  country!:string;
  // miform: any;



  constructor( public userService: UsersService, public router: Router, private fb:FormBuilder) {}
 
  ngOnInit(): void {
  }

  // onSubmit(miform:NgForm){
  //   console.log(miform)
  // }

  miformulario:FormGroup=this.fb.group({
    'firstName': ['',[Validators.required]],
    'lastName': ['',[Validators.required]],
    'username': ['',[Validators.required]],
    'password': ['',[Validators.required,Validators.minLength(6),]],
    // 'confirmPassword': ['',[Validators.required,Validators.minLength(5)]],
    'country': ['',[Validators.required]],
    'city': ['',[Validators.required]],
  })


  campoValido(campo:string){
    return this.miformulario.controls[campo].errors && this.miformulario.controls[campo].touched
  }


  registerUser(){
    const user = {username: this.miformulario.value.username, firstName: this.miformulario.value.firstName, lastName: this.miformulario.value.lastName, password:this.miformulario.value.password, country:this.miformulario.value.country, city:this.miformulario.value.city};
    console.log(this.miformulario.value)
    this.userService.registerUser(user).subscribe(data =>{
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/');
      window.open('http://localhost:4200/principal')
    })
  }


  guardar(){

      if (this.miformulario.invalid){
      this.miformulario.markAllAsTouched()
      return
    }
    this.miformulario.reset()
  


}
}