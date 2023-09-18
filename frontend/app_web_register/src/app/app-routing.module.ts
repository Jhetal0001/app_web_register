import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'register', component: RegistrationFormComponent },
  { path: 'user-list', component: UserListComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'register'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
