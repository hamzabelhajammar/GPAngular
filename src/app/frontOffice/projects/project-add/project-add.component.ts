import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from "../../../services/project.service";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/User";
import {Project} from "../../../models/Project";
import Swal from "sweetalert2";

interface Tache {
  nom: string;
  description: string;
  duree: string;
  dateFin: string;
  employe: string;
}

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent  implements OnInit {
  userConnecter: User | undefined = new User();
  chefId: number | null = null;
  projects: Project[] = [];
  projet = {
    nom: '',
    description: '',
    dateDebut: '',
    dateFin: '',
    employe: '',
    taches: [] as Tache[]
  };

  constructor(
    private userService: UserService,
    private projectService: ProjectService,
    private router: Router
  ) {}
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

      }
    }
  }
  /*createProject(project: any, id: number): void {
    this.projectService.createProject(project, id).subscribe(
      (newProject) => {
        // Handle the newly created project here
        console.log('Created project:', newProject);
        // Optionally, you can refresh the project list
      },
      (error) => {
        console.error('Error creating project:', error);
      }
    );
  }*/



  ajouterTache() {
    this.projet.taches.push({
      nom: '',
      description: '',
      duree: '',
      dateFin: '',
      employe: '',
    } as Tache);
  }

  supprimerTache(index: number) {
    this.projet.taches.splice(index, 1);
  }
  creerprojet()
  {

    Swal.fire(
      'Created!',
      'Votre projet a été crée.',
      'success'
    )
  }
  onSubmit() {

  }
}
