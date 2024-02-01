import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
show(){
  Swal.fire({
    title: 'Metter a jour',
    html: `<input type="text" id="login" class="swal2-input" placeholder="Nom de la tache">
<input type="text" id="password" class="swal2-input" placeholder="Description">
  <input type="number" id="password" class="swal2-input" placeholder="duree">
<div>
<select id="employee" class="swal2-input">
  <option value="employee2">Ahmed mezghani</option>
  <option value="employee2"></option>

  <!-- Add more options as needed -->
</select></div>`,

    confirmButtonText: 'Mettre a jour',
    cancelButtonText: 'Cancel',
    showCancelButton: true,
    focusConfirm: false,
    preConfirm: () => {
      console.log("yes josh")
      // const login = Swal.getPopup().querySelector('#login').value
      // const password = Swal.getPopup().querySelector('#password').value
      // if (!login || !password) {
      //   Swal.showValidationMessage(`Please enter login and password`)
      // }
      // return { login: login, password: password }
    }
  }).then((result) => {
    Swal.fire(
      'Modifié!',
      'Votre task a été modifié.',
      'success'
    )
  })

}
  deleted(){
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
  showadd(){
    Swal.fire({
      title: 'ajoute un task',

      html: `<input type="text" id="login" class="swal2-input" placeholder="Nom de la tache">
<input type="text" id="password" class="swal2-input" placeholder="Description">
  <input type="number" id="password" class="swal2-input" placeholder="duree">
<div>
<select id="employee" class="swal2-input">
  <option value="employee2">Ahemd Mezghani</option>
  <option value="employee1">Mohamed chebbi</option>


  <!-- Add more options as needed -->
</select></div>`,
      confirmButtonText: 'Ajouter',
      cancelButtonText: 'Cancel',
      showCancelButton: true,
      focusConfirm: false,
      preConfirm: () => {

          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )

      }
    }).then((result) => {
      Swal.fire(
        'Ajouté!',
        'Votre task a été ajouté.',
        'success'
      )
    })

  }
}
