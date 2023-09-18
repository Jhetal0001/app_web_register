import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { User } from '../models/user.model';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { UserService } from '../services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmComponent } from '../components/modal-confirm/modal-confirm.component';

/**
 * Component that displays a list of users and provides filtering and sorting options.
 */
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
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
export class UserListComponent implements OnInit {
  filteredList: User[] = [];
  userList: User[] = [];
  orderStates: { [key: string]: boolean } = {
    firstName: true,
    lastName: true,
    userName: true,
    email: true,
    phone: true,
    registrationDate: true,
  };

  filter = '';
  filterBy = 'firstName';
  filterRegistrationDate = '';

  constructor(
    private userService: UserService,
    private UTIL: UtilsService,
    private ngbModal: NgbModal
  ) {}

  /**
   * Filters the user list based on the selected filter criteria.
   */
  applyFilter() {
    console.log(this.filterBy);
    switch (this.filterBy) {
      case 'firstName':
        this.filteredList = this.userList?.filter((item) => {
          return item.firstName
            .toLowerCase()
            .includes(this.filter.toLowerCase());
        });
        break;
      case 'lastName':
        this.filteredList = this.userList?.filter((item) => {
          return item.lastName
            .toLowerCase()
            .includes(this.filter.toLowerCase());
        });
        break;
      case 'userName':
        this.filteredList = this.userList?.filter((item) => {
          return item.userName
            .toLowerCase()
            .includes(this.filter.toLowerCase());
        });
        break;
      case 'email':
        this.filteredList = this.userList?.filter((item) => {
          return item.email.toLowerCase().includes(this.filter.toLowerCase());
        });
        break;
      case 'phone':
        this.filteredList = this.userList?.filter((item) => {
          return item.phone.toLowerCase().includes(this.filter.toLowerCase());
        });
        break;
      case 'registrationDate':
        if (this.filterRegistrationDate && this.filterRegistrationDate !== '') {
          if (this.filterRegistrationDate) {
            this.filteredList = this.userList?.filter((item) => {
              const dateItem = new Date(item.registrationDate as Date);

              const dateItemString = dateItem.toLocaleDateString();
              const fdateFilterString = this.dateFormat(
                this.filterRegistrationDate
              );
              return dateItemString === fdateFilterString;
            });
          }
        } else {
          this.filteredList = this.userList;
        }
        break;
    }
  }

  /**
   * Converts a date string into a formatted date (dd/mm/yyyy).
   * @param {string} converterDate - The date string to be converted.
   * @returns {string} The formatted date string.
   */
  dateFormat(converterDate: string): string {
    const date = new Date(converterDate);

    date.setDate(date.getDate() + 1);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  }

  /**
   * Sorts the filtered list in ascending order based on the specified column.
   * @param {string} column - The column by which to sort the list.
   */
  ascendingOrder(column: string) {
    this.orderStates[column] = true;
    switch (column) {
      case 'firstName':
        this.filteredList = this.filteredList?.slice().sort((a, b) => {
          const nameA = (a.firstName as string).toLowerCase();
          const nameB = (b.firstName as string).toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        break;
      case 'lastName':
        this.filteredList = this.filteredList?.slice().sort((a, b) => {
          const nameA = (a.lastName as string).toLowerCase();
          const nameB = (b.lastName as string).toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        break;
      case 'userName':
        this.filteredList = this.filteredList?.slice().sort((a, b) => {
          const nameA = (a.userName as string).toLowerCase();
          const nameB = (b.userName as string).toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        break;
      case 'phone':
        this.filteredList = this.filteredList
          ?.slice()
          .sort(
            (a, b) =>
              (parseInt(a.phone) as number) - (parseInt(b.phone) as number)
          );
        break;
      case 'email':
        this.filteredList = this.filteredList?.slice().sort((a, b) => {
          const nameA = (a.email as string).toLowerCase();
          const nameB = (b.email as string).toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        break;
      case 'registrationDate':
        this.filteredList = this.filteredList?.slice().sort((a, b) => {
          const dateA = new Date(a.registrationDate as Date);
          const dateB = new Date(b.registrationDate as Date);
          if (dateA < dateB) {
            return -1;
          }
          if (dateA > dateB) {
            return 1;
          }
          return 0;
        });
        break;
      default:
        break;
    }
  }

  /**
   * Sorts the filtered list in descending order based on the specified column.
   * @param {string} column - The column by which to sort the list.
   */
  descendingOrder(column: string) {
    this.orderStates[column] = false;
    switch (column) {
      case 'firstName':
        this.filteredList = this.filteredList?.slice().sort((a, b) => {
          const nameA = (a.firstName as string).toLowerCase();
          const nameB = (b.firstName as string).toLowerCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        });
        break;
      case 'lastName':
        this.filteredList = this.filteredList?.slice().sort((a, b) => {
          const nameA = (a.lastName as string).toLowerCase();
          const nameB = (b.lastName as string).toLowerCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        });
        break;
      case 'userName':
        this.filteredList = this.filteredList?.slice().sort((a, b) => {
          const nameA = (a.userName as string).toLowerCase();
          const nameB = (b.userName as string).toLowerCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        });
        break;
      case 'phone':
        this.filteredList = this.filteredList
          ?.slice()
          .sort(
            (a, b) =>
              (parseInt(b.phone) as number) - (parseInt(a.phone) as number)
          );
        break;
      case 'email':
        this.filteredList = this.filteredList?.slice().sort((a, b) => {
          const nameA = (a.email as string).toLowerCase();
          const nameB = (b.email as string).toLowerCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        });
        break;
      case 'registrationDate':
        this.filteredList = this.filteredList?.slice().sort((a, b) => {
          const dateA = new Date(a.registrationDate as Date);
          const dateB = new Date(b.registrationDate as Date);
          if (dateA < dateB) {
            return 1;
          }
          if (dateA > dateB) {
            return -1;
          }
          return 0;
        });
        break;
      default:
        break;
    }
  }

  /**
   * Deletes a user by their ID.
   * @param {number | undefined} id - The ID of the user to delete.
   * @returns {void}
   */
  deleteUser(id?: number): void {
    this.userService.deleteUser(id as number).subscribe({
      next: () => {
        this.UTIL.showAlert(
          'The user has been deleted successfully',
          'success'
        );
      },
      error: (error) => {
        console.log(error);
        this.UTIL.showAlert(
          'An error occurred while deleting the user',
          'danger'
        );
      },
      complete: () => {
        this.loadUsers();
      },
    });
  }

  /**
   * Opens a confirmation modal for user deletion and proceeds if confirmed.
   * @param {User} user - The user to be deleted.
   * @returns {void}
   */
  confirmUserDeletion(user: User): void {
    const modalRef = this.ngbModal.open(ModalConfirmComponent, {
      centered: true,
    });
    modalRef.componentInstance.item = user.firstName + ' ' +  user.lastName;
    modalRef.result.then((result) => {
      if (result === 'confirmed') {
        this.deleteUser(user.id);
      }
    });
  }

  /**
   * Loads the user list from the service and updates the component's data.
   * @returns {void}
   */
  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (users: User[]) => {
        this.userList = users;
        this.filteredList = this.userList;
      },
      error: () =>
        this.UTIL.showAlert(
          'An error occurred while bringing the user list',
          'danger'
        ),
      complete: () => {
        this.UTIL.hideLoad();
      }
    });
  }

  /**
   * Initializes the component and fetches the user list from the service.
   * @returns {void}
   */
  ngOnInit(): void {
    this.UTIL.showLoad();
    this.loadUsers();
  }
}
