import { Component } from '@angular/core';
import {Boutique} from "../../models/boutique";
import {Router} from "@angular/router";
import {WebSocketServiceService} from "../../services/web-socket-service.service";
import {BoutiqueServiceService} from "../../services/boutique-service.service";

@Component({
  selector: 'app-boutique-list',
  templateUrl: './boutique-list.component.html',
  styleUrls: ['./boutique-list.component.css']
})
export class BoutiqueListComponent {
// boutiques: Boutique[] = [];
  boutiques!: Boutique []
  boutique: Boutique = new Boutique();
  isUpdate:boolean=false;
  searchValue: string = ''; // Add this line recherche

  notification!: string ; // Ajout de la variable pour stocker la notification



  constructor(private boutiqueService: BoutiqueServiceService,private router: Router,private webSocketService: WebSocketServiceService) {  }
  showModal = false;


  ngOnInit() {
    this.boutiqueService.getBoutiques().subscribe((data: Boutique[]) => {
      console.log(data);
      this.boutiques = data; // initialisation de la variable boutiques avec les données du service
    });

    // Souscription à l'observable retourné par la méthode getMessage() de WebSocketServiceService
    this.webSocketService.getMessage().subscribe(message => {
      this.notification = message.messageContent; // Mise à jour de la variable notification avec le message de la notification
    });


    this.closePopupForUpdate()
    this.closePopupForCreate()


    //this.getBoutiques();
  }


  openPopupForCreate() {
    this.isUpdate=false
    this.showModal = true;
  }

  openPopupForUpdate(boutiquetoupdate:any) {
    this.boutique=boutiquetoupdate
    this.showModal = true;
    this.isUpdate=true;

  }

  closePopupForCreate() {
    this.showModal = false;
  }

  closePopupForUpdate() {
    this.showModal = false;
  }

  onSubmit() {
    console.log("entered in submit")
    this.boutiqueService.addBoutique(this.boutique)
      .subscribe(boutique => {
        console.log('Boutique ajoutée avec succès: ', boutique);
        // réinitialiser le formulaire après l'ajout de la boutique


        this.boutique = new Boutique();
        this.getBoutiques();
        this.notification = "Une nouvelle boutique a été ajoutée ou modifiée";
        setTimeout(() => {
          this.notification = '';
        }, 6000);


        this.webSocketService.sendMessage("Tannoura");
        this.webSocketService.getMessage().subscribe(message => console.log(message));

        console.log(this.webSocketService.sendMessage("tnnnoua"))
        console.log(this.webSocketService.getMessage())

      }, error => {
        console.error('Erreur lors de l\'ajout de la boutique : ', error);
        if (error.status === 500) {
          alert("Veuillez Vérifier que tous les champs sont vrais");
        }
      });

    this.showModal = false;
  }




  getBoutiques(): void {
    this.boutiqueService.getBoutiques()
      .subscribe(boutiques => this.boutiques = boutiques);
    //location.reload();
  }

  public deleteBoutique(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete this Store?')) {
      this.boutiqueService.deleteBoutique(id).subscribe(() => {
        console.log('Store deleted successfully!');
        this.getBoutiques();
      });
    }
  }
  openAddBoutiqueModal() {
    // Code pour ouvrir la fenêtre modale
    this.isUpdate=false
    this.router.navigate(['/boutique/add']);
  }


  searchByAddress(address: string): void {

    if(address==''){
      return   this.getBoutiques()
    }

    else {
      this.boutiqueService.searchBoutiques(address)
        .subscribe(boutiques => this.boutiques = boutiques);
    }}

  sortBoutiques(): void {
    this.boutiqueService.sortBoutiques()
      .subscribe(boutiques => this.boutiques = boutiques);
  }

}
