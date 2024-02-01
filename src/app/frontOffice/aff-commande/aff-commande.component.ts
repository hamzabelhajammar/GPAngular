import {Component, OnInit} from '@angular/core';
import {Commande} from "../../models/Commande";
import {CommandeService} from "../../services/commande.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-aff-commande',
  templateUrl: './aff-commande.component.html',
  styleUrls: ['./aff-commande.component.css']
})
export class AffCommandeComponent implements OnInit{
  commandes!: Commande[];
  commande: Commande = new Commande();
  isUpdate: boolean = false;


  constructor(private commandeService: CommandeService, private router: Router) {
  }
  showModal = false;

  ngOnInit(){
    this.commandeService.getAllcommande().subscribe( (data : Commande[]) =>{
        console.log(data);
        this.commandes=data;
      } ,
      (error) => {
        console.log(error);
      });


    this.closePopupForUpdate();
  }

  public deleteCommande(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete ')) {
      this.commandeService.deleteCommande(id).subscribe(() => {
        console.log('deleted successfully!');
        this.getCom();
      });
    }
  }

  getCom(): void {
    this.commandeService.getAllcommande().subscribe(commandes => this.commandes = commandes);
    location.reload();
  }

  openPopupForUpdate(comtoupdate: any) {
    this.commande = comtoupdate
    this.showModal = true;
    this.isUpdate = true;

  }

  closePopupForUpdate() {
    this.showModal = false;
  }


  onSubmit() {
    console.log("entered in submit")
    this.commandeService.add(this.commande)
      .subscribe(commande => {
        console.log(' succès: ',commande);
        // réinitialiser le formulaire après l'ajout
        this.commande = new Commande();
        this.getCom()
      }, error => {
        console.error('Erreurrrrrr : ', error);
      });
    this.showModal = false;
  }

  checkout(commandeId: number) {
    this.router.navigate(['/checkout'], { queryParams: { id: commandeId }});

  }


}
