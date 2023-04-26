import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'zchat-register',
  templateUrl: './zchat-register.component.html'
})
export class ZchatRegisterComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder,private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  }

  submit(): void {
    
  }
}
