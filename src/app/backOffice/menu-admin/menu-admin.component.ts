import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Boutique} from "../../models/boutique";
import {BoutiqueServiceService} from "../../services/boutique-service.service";
import {BadwordsServiceService} from "../../services/badwords-service.service";
import {BadWord} from "../../models/bad-word";

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent {
  isUpdate:boolean=false;
  badwords!: BadWord []
  badword: BadWord = new BadWord();
  constructor(private router: Router,private badwordService: BadwordsServiceService) {
  }

  showModal = false;
  redirectToShow() {
    console.log("ok");
    this.router.navigate(['admin/pag']);
  }
  redirectToHome() {
    console.log("ok");
    this.router.navigate(['admin']);
  }

  redirectToRegister() {
    console.log("ok");
    this.router.navigate(['admin/register']);
  }
  redirectToSend() {
    console.log("ok");
    this.router.navigate(['admin/send-mail']);
  }
  redirectToReceive() {
    console.log("ok");
    this.router.navigate(['admin/mail']);
  }
  redirectToLivraison() {
    console.log("ok");
    this.router.navigate(['livraison']);
  }
  logout() {
    localStorage.removeItem('token'); // supprimer le token JWT du localStorage
    this.router.navigate(['user/authenticate']); // rediriger l'utilisateur vers la page de connexion
  }

  redirectToKhayri() {
    console.log("ok");
    this.router.navigate(['vendor/deals']);
  }
  closePopupForCreate() {
    this.showModal = false;
  }
  openPopupForCreate() {
    this.isUpdate=false
    this.showModal = true;
  }

  onSubmit() {

    this.badwordService.addBadWords(this.badword)
      .subscribe(badword => {
        console.log('Mot ajouté avec succès: ', badword);
        this.badword = new BadWord();

      }, error => {
        console.error('Erreur lors de l\'ajout de la badword : ', error);

      });

    this.showModal = false;
  }
}
