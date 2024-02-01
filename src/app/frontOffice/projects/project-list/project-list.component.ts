import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProjectService} from "../../../services/project.service";
import {Project} from "../../../models/Project";
import {User} from "../../../models/User";
import {UserService} from "../../../services/user.service";
import Swal from "sweetalert2";
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  userConnecter: User | undefined = new User();
  chefId: number | null = null;
  projects: Project[] = [];
  projects1 = [
    { nom: 'Projet 1', image: 'http://placekitten.com/200/300' },
    { nom: 'Projet 2', image: 'http://placekitten.com/200/300' },
    { nom: 'Projet 3', image: 'http://placekitten.com/200/300' },
    // Ajoutez d'autres projets selon vos besoins
  ];
  constructor(
    private userService: UserService,
    private projectService: ProjectService,
    private router: Router
  ) {}

  redirectToProjectForm() {
    // Code de redirection vers le formulaire d'ajout de projet
    // Par exemple : this.router.navigate(['/project-form']);
    this.router.navigate(['/user/project-add']);
  }
  ngOnInit(): void {
    this.setUserConnecter();
  }

  async setUserConnecter() {
    const emailUserConn = localStorage.getItem("tokenEmail");
    if (emailUserConn) {
      this.userConnecter = await this.userService.getUserByEmail(emailUserConn).toPromise();
      if (this.userConnecter) {
        // If the userConnecter exists, set the chefId
        this.chefId = this.userConnecter.id;
        console.log("user",this.chefId);
        this.listProjectsByChef(this.chefId); // Load projects for the chef
      }
    }
  }
  show(){
    Swal.fire({
      title: 'Metter a jour',
      html: `<input type="text" id="login" class="swal2-input" placeholder="Nom de projet">
<input type="password" id="password" class="swal2-input" placeholder="Description">
<input type="password" id="password" class="swal2-input" placeholder="Domaine">
  <input type="number" id="password" class="swal2-input" placeholder="Duree">
<div>
<div>
  <label>Select Employee(s):</label><br>
  <select id="employee" class="swal2-input" [multiple]="true">
    <option value="employee1">Ahmed mezghani</option>
    <option value="employee2">firas saafi</option>
    <option value="employee4">Mohamed chebbi</option>
    <!-- Add more options as needed -->
  </select>
</div>
</div>`,
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
      console.log(result)
      if (result.isConfirmed){
      Swal.fire(
        'Modifié!',
        'Votre task a été modifié.',
        'success'
      )}
      else {
        Swal.fire(
          'Canceled!',
        )
      }
    })

  }



  deleteproject(i:number)
  {
    this.projects.splice(i, 1);

    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
  listProjectsByChef(chefId: number): void {
    if (chefId) {
      this.projectService.listProjectsByChef(chefId)
        .subscribe(projects => this.projects = projects);
      console.log("projects",this.projects);

    }
  }/*
  delete(id: number): void {
    if (confirm("Are you sure you want to delete this project?")) {
      this.projectService.deleteProject(id)
        .subscribe(() => {
          // Remove the deleted project from the local array
          this.projects = this.projects.filter(project => project.id !== id);
        });
    }
  }*/
}
