import { Component } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { USER } from '../models/user.model';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

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
export class UserListComponent {
  filteredList: USER[] = [
    {
      id: 1,
      firstName: 'Jhon',
      lastName: 'Vasquez',
      userName: 'Jhetal00',
      phone: '3195493430',
      email: 'jhetal00@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Diego',
      lastName: 'Martinez',
      userName: 'diego278',
      phone: '3112547845',
      email: 'diego450@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Mario',
      lastName: 'Cimarro',
      userName: 'mario_23',
      phone: '3051245782',
      email: 'mario_278@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Scarllette',
      lastName: 'Diaz',
      userName: 'Scar250',
      phone: '3115478451',
      email: 'scarlette534@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Loraines',
      lastName: 'Ortiz',
      userName: 'loris',
      phone: '3112669729',
      email: 'loraine960918@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Jhon',
      lastName: 'Balbuena',
      userName: 'jhon_bal_12',
      phone: '3201547845',
      email: 'jhonbal_4512@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Catherine',
      lastName: 'Vasquez',
      userName: 'Jincer',
      phone: '3125554856',
      email: 'jinethcat@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Andres',
      lastName: 'Vasquez',
      userName: 'Andres_4s521',
      phone: '3162451232',
      email: 'andresvas@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Maria',
      lastName: 'Garcia',
      userName: 'Mari1969',
      phone: '3112140575',
      email: 'jhetal02@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Ivi',
      lastName: 'Vasquez',
      userName: 'iviqueen00',
      phone: '3024514578',
      email: 'iviqueen212@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Rosaire',
      lastName: 'Vera',
      userName: 'Rosita_vera_15',
      phone: '3195451245',
      email: 'rosirevera124_45@gmail.com',
      registrationDate: new Date(),
    },
  ];
  userList: USER[] = [
    {
      id: 1,
      firstName: 'Jhon',
      lastName: 'Vasquez',
      userName: 'Jhetal00',
      phone: '3195493430',
      email: 'jhetal00@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Diego',
      lastName: 'Martinez',
      userName: 'diego278',
      phone: '3112547845',
      email: 'diego450@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Mario',
      lastName: 'Cimarro',
      userName: 'mario_23',
      phone: '3051245782',
      email: 'mario_278@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Scarllette',
      lastName: 'Diaz',
      userName: 'Scar250',
      phone: '3115478451',
      email: 'scarlette534@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Loraines',
      lastName: 'Ortiz',
      userName: 'loris',
      phone: '3112669729',
      email: 'loraine960918@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Jhon',
      lastName: 'Balbuena',
      userName: 'jhon_bal_12',
      phone: '3201547845',
      email: 'jhonbal_4512@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Catherine',
      lastName: 'Vasquez',
      userName: 'Jincer',
      phone: '3125554856',
      email: 'jinethcat@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Andres',
      lastName: 'Vasquez',
      userName: 'Andres_4s521',
      phone: '3162451232',
      email: 'andresvas@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Maria',
      lastName: 'Garcia',
      userName: 'Mari1969',
      phone: '3112140575',
      email: 'jhetal02@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Ivi',
      lastName: 'Vasquez',
      userName: 'iviqueen00',
      phone: '3024514578',
      email: 'iviqueen212@gmail.com',
      registrationDate: new Date(),
    },
    {
      id: 1,
      firstName: 'Rosaire',
      lastName: 'Vera',
      userName: 'Rosita_vera_15',
      phone: '3195451245',
      email: 'rosirevera124_45@gmail.com',
      registrationDate: new Date(),
    },
  ];
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
  dateFormat(converterDate: string) {
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
}
