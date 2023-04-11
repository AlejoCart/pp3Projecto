import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  loading=false;

  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar){
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
      })
  }
  ngOnInit(): void {

  }

  ingresar(){
    //console.log(this.form);
    const usuario=this.form.value.usuario;
    const password=this.form.value.password;
    console.log(usuario);
    console.log(password);

    if(usuario=='admin' && password=='admin123'){
      //redireccionamos al dashbord
      this.fakeLoading();
    }else{
      this.error();
      this.form.reset();
    }
  }
  error(){
      this._snackBar.open(
      'Usuario o contraseña ingresados son invalidos',
      'Entendido',{
        duration:5000,
        horizontalPosition:'center',
        verticalPosition:'top',

      }

      )
  }
  fakeLoading(){
    this.loading=true;
    setTimeout(()=>{
      this.loading=false;
      //lo redireccionamos al dashboard
    },1500);

  }

}
