import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/infraestructure/auth/login.service';
import { User } from 'src/app/infraestructure/remiseriaApi/models';
import { UserControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personalData',
  templateUrl: './personalData.component.html',
  styleUrls: ['./personalData.component.css']
})
export class PersonalDataComponent implements OnInit {

  constructor(private userService: UserControllerService,
              private loginService: LoginService
              ) { }
  activeModal = false;
  activeUpdated = false;
  userId: number = 0;
  newPassword: string = "";
  username: string = '';  // Nombre de usuario ingresado por el usuario

  employe: User | null = null;  // Para almacenar el usuario logueado
  employeList: User[] = [];
  ocultado = 'd-none';
  showSpinner = true;

  showPassword: boolean = false;

  currentPassword: string = '';  // Para la contraseña actual
  errorMessage: string = '';  // Para mostrar mensajes de error
  ngOnInit() {
    this.employe = this.loginService.getUser();  // Obtener el usuario logueado
    if (this.employe) {
      this.userId = this.employe.idUser??0;  // Asignar correctamente el ID del usuario logueado
    } else {
      console.error('No se ha encontrado un usuario logueado');
    }
  }
  ngAfterViewInit(): void {
  }

  validateUsername(): void {
    if (this.username !== this.employe?.username) {
      console.error('El nombre de usuario no coincide');
      Swal.fire(
        'Actualización de Contraseña',
        `EL usuario ingresado no es valido`,
        'error'
      );
    } else {
      console.log('El nombre de usuario coincide');
      this.updatePassword();  // Si el usuario es válido, se procede a la actualización de la contraseña
    }
  }

  
  refreshList(): void {
    this.ocultado = 'd-none';
    this.showSpinner = true;
  }
  loadUserData(): void {
    if (!this.userId) {
      console.error('No se encontró un ID de usuario válido');
      return;
    }
  
    // Hacer la consulta al backend para obtener los datos actualizados del usuario
    this.userService.getByIdUsingGET6(this.userId).subscribe(
      (updatedUser) => {
        // Actualizar el objeto employe con los datos más recientes
        this.employe = updatedUser;
  
        // Si es necesario, también puedes guardar estos datos en el LoginService para futuras referencias
        this.loginService.saveUser(updatedUser);  // Asegúrate de tener un método `setUser` en LoginService
      },
      (error) => {
        console.error('Error al cargar los datos del usuario', error);
        Swal.fire(
          'Error',
          'Hubo un problema al cargar los datos actualizados. Intenta nuevamente.',
          'error'
        );
      }
    );
  }

   // Método para actualizar la contraseña
   updatePassword(): void {
    if (!this.employe) {
      console.error('No hay usuario logueado.');
      return;  // Si no hay usuario logueado, termina la ejecución
    }
  
    // Verifica que el ID no sea 0 antes de realizar la solicitud
    if (this.userId === 0) {
      console.error('El ID del usuario es inválido.');
      return;
    }
  
    // Enviar la nueva contraseña al backend para actualizarla
    this.userService.updatePasswordUsingPUT(this.userId, this.newPassword).subscribe(
      (response) => {
        console.log('Contraseña actualizada correctamente', response);
        this.errorMessage = '';  // Limpiar el mensaje de error
        Swal.fire(
          'Actualización de Contraseña',
          `La contraseña fue actualizada`,
          'success'
        );
        this.loadUserData()
      },
      (error) => {
        console.error('Error al actualizar la contraseña', error);
        this.errorMessage = 'Hubo un error al actualizar la contraseña.';
        alert(this.errorMessage);  // Mostrar mensaje de error
      }
    );
  }

  updateEmploye(): void {
    if (!this.employe) {
      console.error('No hay empleado seleccionado.');
      return;  // Si no hay empleado, termina la ejecución
    }
  
    this.userService.updateUsingPUT6(this.employe).subscribe(
      (employe) => {
        console.log('Empleado actualizado:', employe); // Verifica que la respuesta sea correcta
        Swal.fire(
          'Empleado Actualizado',
          `Empleado ${employe.firstName} ha sido actualizado`,
          'success'
        );
        this.loadUserData()
      },
      (error) => {
        console.error('Error al actualizar el empleado', error);
        Swal.fire(
          'Error',
          'Hubo un error al actualizar el empleado. Intenta de nuevo.',
          'error'
        );
      }
    );
  }

}
