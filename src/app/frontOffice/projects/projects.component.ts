import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ProjectService} from "../../services/project.service";
import {Project} from "../../models/Project";
import Swal from "sweetalert2";


interface Tache {
  nom: string;
  description: string;
  duree: string;
  dateFin: string;
  employe: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html', // Link this component to your HTML template
  styleUrls: ['./projects.component.css'], // Link this component to your CSS file
})
export class ProjectsComponent {
  projet = {
    nom: '',
    description: '',
    dateDebut: '',
    dateFin: '',
    employe: '',
    taches: [] as Tache[] // Déclarer le type 'Tache[]' pour le tableau 'taches'
  };

  constructor(private router: Router) {}

  ajouterTache() {
    this.projet.taches.push({
      nom: '',
      description: '',
      duree: '',
      dateFin: '',
      employe: '',
    } as Tache); // Utiliser 'as Tache' pour indiquer le type de l'objet ajouté
  }

  supprimerTache(index: number) {
    this.projet.taches.splice(index, 1);
  }
  deleteproject(i:number)
  {
    this.projet.taches.splice(i, 1);

    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
  onSubmit() {
    // Logic to submit the project form and redirect if needed
    // Example: this.router.navigate(['/success']);
  }
}
