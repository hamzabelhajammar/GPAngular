import {Component, OnInit} from '@angular/core';
import {Livraison} from "../../models/Livraison";
import {LivraisonService} from "../../services/livraison.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-aff-livraison-admin',
  templateUrl: './aff-livraison-admin.component.html',
  styleUrls: ['./aff-livraison-admin.component.css']
})
export class AffLivraisonAdminComponent implements OnInit {
  livraisons!: Livraison[];
  livraison: Livraison = new Livraison();
  isUpdate: boolean = false;
  searchValue:string='';


  constructor(private livraisonService: LivraisonService, private R: Router) {
  }
  showModal = false;

  ngOnInit(){
    this.livraisonService.getAllliv().subscribe((data : Livraison[]) => {
      console.log(data);
      this.livraisons = data;
    });

    this.closePopupForUpdate();
  }


  public deleteLiv(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete ')) {
      this.livraisonService.deleteLiv(id).subscribe(() => {
        console.log('deleted successfully!');
        this.getLiv();
      });
    }
  }

  getLiv(): void {
    this.livraisonService.getAllliv().subscribe(livraisons => this.livraisons = livraisons);
    location.reload();
  }

  openPopupForUpdate(livtoupdate: any) {
    this.livraison = livtoupdate
    this.showModal = true;
    this.isUpdate = true;

  }

  closePopupForUpdate() {
    this.showModal = false;
  }


  onSubmit() {
    console.log("entered in submit")
    this.livraisonService.add(this.livraison)
      .subscribe(livraison => {
        console.log(' succès: ',livraison);
        // réinitialiser le formulaire après l'ajout
        this.livraison = new Livraison();
        this.getLiv()
      }, error => {
        console.error('Erreurrrrrr : ', error);
      });
    this.showModal = false;
  }

  searchByRegion(region: string): void {

    if(region==''){
      return   this.getLiv()
    }

    else {
      this.livraisonService.searchLivNotAffected(region)
        .subscribe(livraisons => this.livraisons =livraisons);
    }}

}
