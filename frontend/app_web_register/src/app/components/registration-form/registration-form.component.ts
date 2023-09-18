import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UtilsService } from '../alerts/alerts.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { UserService } from 'src/app/services/user.service';

/**
 * Component that represents a registration form for user sign-up.
 */
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        })
      ),
      transition('void => *', animate(300)),
    ]),
  ],
})
export class RegistrationFormComponent {
  newUserForm!: FormGroup;
  createUserForm!: FormGroup;
  newUserFormValid = false;
  validatedForm: boolean = false;
  validatedFormTwo: boolean = false;
  currentDate = Date.now();
  showPassword = false;
  genders = [
    'Male',
    'Female',
    'Non-binary',
    'Prefer not to say',
    'Other',
    'Not applicable',
  ];

  constructor(private fb: FormBuilder, private UTIL: UtilsService, private userService: UserService) {
    this.newUserForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      code: new FormControl('+57', [Validators.required, Validators.minLength(2)]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthdate: new FormControl('', [
        Validators.required,
        this.maxDateValidator,
      ]),
    });
    this.createUserForm = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  /**
   * Validator function to check if the selected date is not greater than the current date.
   * @param {AbstractControl} control - The form control to validate.
   * @returns {ValidationErrors | null} An object with a validation error if the condition is not met, or null if the validation passes.
   */
  maxDateValidator(control: AbstractControl): { [key: string]: any } | null {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    if (selectedDate > currentDate) {
      return { maxDate: true };
    }
    return null;
  }

  /**
   * Validates the first part of the form and sets the form validation status accordingly.
   */
  validFormOne() {
    this.validatedForm = true;
    if (this.newUserForm.valid) {
      this.newUserFormValid = true;
    } else {
      this.UTIL.showAlert(
        'Please validate all the fields of the form',
        'warning'
      );
    }
  }

  /**
   * Registers a new user and validates both parts of the form before proceeding.
   */
  registerUser() {
    this.validatedFormTwo = true;
    if (this.newUserForm.valid && this.createUserForm.valid) {
      let newUser = {
        userName: this.createUserForm.controls['userName'].value,
        password: this.createUserForm.controls['password'].value,
        email: this.newUserForm.controls['email'].value,
        firstName: this.newUserForm.controls['firstName'].value,
        lastName: this.newUserForm.controls['lastName'].value,
        phone: this.newUserForm.controls['code'].value + this.newUserForm.controls['phoneNumber'].value,
        address: this.newUserForm.controls['address'].value,
        city: this.newUserForm.controls['city'].value,
        country: this.newUserForm.controls['country'].value,
        gender: this.newUserForm.controls['gender'].value,
        birthDate: this.newUserForm.controls['birthdate'].value,
      }
      this.userService.addUser(newUser).subscribe({next: () => {
        this.UTIL.showLoad();
        this.newUserForm.reset();
        this.createUserForm.reset();
        this.newUserFormValid = false;
        this.validatedForm = false;
        this.validatedFormTwo = false;
      }, error: () => {
        this.UTIL.showAlert('An error occurred while creating the user','danger')
      }, complete: () => {
        this.UTIL.showAlert('User created successfully','success');
        this.UTIL.hideLoad();
      }});
    } else {
      this.UTIL.showAlert(
        'Please validate all the fields of the form',
        'warning'
      );
    }
  }
}
