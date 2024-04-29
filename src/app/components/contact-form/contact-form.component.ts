import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm: FormGroup;
  showErrorMessage: boolean = false;
  
  constructor(){
    this.contactForm = new FormGroup(
      {
        inputName: new FormControl("", [
          Validators.required,
          Validators.minLength(4)
        ]),
        inputPhone: new FormControl("", [
          Validators.required,
          Validators.minLength(10)
        ]),
        inputEmail: new FormControl("", [
          Validators.required,
          Validators.minLength(4)
        ]),
        inputCity: new FormControl(""),
        textareaMessage: new FormControl("", [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(256)
        ])
      }
    )
  }

  showFormData(){
    console.log(this.contactForm.value, this.contactForm)
    if(!this.contactForm.valid){
      this.showErrorMessage = true;
    }
  }
}