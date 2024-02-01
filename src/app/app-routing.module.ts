import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterBuyerAdminComponent} from "./backOffice/register-buyer-admin/register-buyer-admin.component";
import {AllTemplateAdminComponent} from "./backOffice/all-template-admin/all-template-admin.component";
import {AllTemplateUserComponent} from "./frontOffice/all-template-user/all-template-user.component";
import {RegisterVendorAdminComponent} from "./backOffice/register-vendor-admin/register-vendor-admin.component";
import {RegisterProviderAdminComponent} from "./backOffice/register-provider-admin/register-provider-admin.component";
import {RegisterLivreurAdminComponent} from "./backOffice/register-livreur-admin/register-livreur-admin.component";
import {RegisterBuyerUserComponent} from "./frontOffice/register-buyer-user/register-buyer-user.component";
import {RegisterLivreurUserComponent} from "./frontOffice/register-livreur-user/register-livreur-user.component";
import {RegisterProviderUserComponent} from "./frontOffice/register-provider-user/register-provider-user.component";
import {RegisterVendorUserComponent} from "./frontOffice/register-vendor-user/register-vendor-user.component";
import {SendCodeUserComponent} from "./frontOffice/send-code-user/send-code-user.component";
import {HomeUserComponent} from "./frontOffice/home-user/home-user.component";
import {RegisterUserComponent} from "./frontOffice/register-user/register-user.component";
import {AuthenticationUserComponent} from "./frontOffice/authentication-user/authentication-user.component";
import {UploadLogoUserComponent} from "./frontOffice/upload-logo-user/upload-logo-user.component";
import {HomeBuyerUserComponent} from "./frontOffice/home-buyer-user/home-buyer-user.component";
import {ShowAdminComponent} from "./backOffice/show-admin/show-admin.component";
import {DashboardAdminComponent} from "./backOffice/dashboard-admin/dashboard-admin.component";
import {DetailsAdminComponent} from "./backOffice/details-admin/details-admin.component";
import {ForgotPwdUserComponent} from "./frontOffice/forgot-pwd-user/forgot-pwd-user.component";
import {HomeLivreurUserComponent} from "./frontOffice/home-livreur-user/home-livreur-user.component";
import {HomeProviderUserComponent} from "./frontOffice/home-provider-user/home-provider-user.component";
import {UnsubscribeUserComponent} from "./frontOffice/unsubscribe-user/unsubscribe-user.component";
import {Show2AdminComponent} from "./backOffice/show2-admin/show2-admin.component";
import {QrcodeUserComponent} from "./frontOffice/qrcode-user/qrcode-user.component";
import {RegiserAdminComponent} from "./backOffice/regiser-admin/regiser-admin.component";
import {SendMailAdminComponent} from "./backOffice/send-mail-admin/send-mail-admin.component";
import {SendMailUserComponent} from "./frontOffice/send-mail-user/send-mail-user.component";
import {ReceiveMailUserComponent} from "./frontOffice/receive-mail-user/receive-mail-user.component";
import {MailAdminComponent} from "./backOffice/mail-admin/mail-admin.component";
import {UpdatePasswordUserComponent} from "./frontOffice/update-password-user/update-password-user.component";
import {RegisterAdminUserComponent} from "./frontOffice/register-admin-user/register-admin-user.component";
import {BoutiqueListComponent} from "./frontOffice/boutique-list/boutique-list.component";
import {AddCommandeComponent} from "./frontOffice/add-commande/add-commande.component";
import {AffCommandeComponent} from "./frontOffice/aff-commande/aff-commande.component";
import {CheckoutPaiementComponent} from "./frontOffice/checkout-paiement/checkout-paiement.component";
import {AddLivraisonAdminComponent} from "./backOffice/add-livraison-admin/add-livraison-admin.component";
import {AffLivraisonAdminComponent} from "./backOffice/aff-livraison-admin/aff-livraison-admin.component";
import {AssignLivraisonAdminComponent} from "./backOffice/assign-livraison-admin/assign-livraison-admin.component";
import {AssignLivreurAdminComponent} from "./backOffice/assign-livreur-admin/assign-livreur-admin.component";
import {LivraisonDetailAdminComponent} from "./backOffice/livraison-detail-admin/livraison-detail-admin.component";
import {LivraisonAdminComponent} from "./backOffice/livraison-admin/livraison-admin.component";
import {AddOfferComponent} from "./backOffice/add-offer/add-offer.component";
import {SuccessPopupComponent} from "./backOffice/success-popup/success-popup.component";
import {AddTenderComponent} from "./backOffice/add-tender/add-tender.component";
import {TenderListComponent} from "./backOffice/tender-list/tender-list.component";
import {TenderDetailsComponent} from "./backOffice/tender-details/tender-details.component";
import {UpdateTenderComponent} from "./backOffice/update-tender/update-tender.component";
import {OfferListComponent} from "./backOffice/offer-list/offer-list.component";
import {DealsComponent} from "./backOffice/deals/deals.component";
import {ContractListComponent} from "./backOffice/contract-list/contract-list.component";
import {BasicStatsComponent} from "./backOffice/basic-stats/basic-stats.component";
import {ContractDetailsComponent} from "./backOffice/contract-details/contract-details.component";
import {AjouterCategorieComponent} from "./frontOffice/ajouter-categorie/ajouter-categorie.component";
import {AjouterProduitComponent} from "./frontOffice/ajouter-produit/ajouter-produit.component";
import {AjouterStockComponent} from "./frontOffice/ajouter-stock/ajouter-stock.component";
import {DetailProduitComponent} from "./frontOffice/detail-produit/detail-produit.component";
import {HomeVendorUserComponent} from "./frontOffice/home-vendor-user/home-vendor-user.component";
import {ChatComponent} from "./frontOffice/chat/chat.component";

// import {ProjectsComponent} from "./frontOffice/projects/projects.component";
import {ProjectAddComponent} from "./frontOffice/projects/project-add/project-add.component";
import { ProjectListComponent } from './frontOffice/projects/project-list/project-list.component';
import {TaskComponent} from "./frontOffice/task/task.component";
function CheckoutComponent() {
}

const routes: Routes = [
  {
    path:'',
    component: AllTemplateUserComponent,
    children:[
      {path:'',component:HomeUserComponent}
    ]
  },
  {
    path:'admin', component:AllTemplateAdminComponent,
    children:[
      {path:'', component:DashboardAdminComponent},
      {path:'register',component:RegiserAdminComponent},
      // {path:'listproject',component:ListComponent},
      // {path:'create',component:CreateComponent},


      {path:'show', component:ShowAdminComponent},
      {path:'details/:id', component:DetailsAdminComponent},
      {path:'register-buyer', component:RegisterBuyerAdminComponent},
      {path:'register-vendor', component:RegisterVendorAdminComponent},
      {path:'register-provider', component:RegisterProviderAdminComponent},
      {path:'register-livreur', component:RegisterLivreurAdminComponent},
      {path:'pag', component:Show2AdminComponent},
      {path:'send-mail', component:SendMailAdminComponent},
      {path:'mail', component:MailAdminComponent}
    ]

  },
  {
    path:'user',
    component: AllTemplateUserComponent,
    children:[
      {path:'',component:HomeUserComponent},
      // {path:'listproject',component:ListComponent},
      // {path:'create',component:CreateComponent},

      {path:'register',component:RegisterUserComponent},
      {path:'register-buyer',component:RegisterBuyerUserComponent},
      {path:'register-livreur',component:RegisterLivreurUserComponent},
      {path:'register-provider',component:RegisterProviderUserComponent},
      {path:'register-vendor',component:RegisterVendorUserComponent},
      {path:'register-admin',component:RegisterAdminUserComponent},
      {path:'send-code',component:SendCodeUserComponent},
      {path:'authenticate',component:AuthenticationUserComponent},
      {path:'upload-logo',component:UploadLogoUserComponent},
      {path:'forgot-password',component:ForgotPwdUserComponent},
      {path:'buyer',component:HomeBuyerUserComponent},
      {path:'livreur',component:HomeLivreurUserComponent},
      {path:'provider',component:AddOfferComponent},
      {path:'vendor',component:HomeVendorUserComponent},
      {path:'unsubscribe',component:UnsubscribeUserComponent},
      {path:'qrcode',component:QrcodeUserComponent},
      {path:'send-mail',component:SendMailUserComponent},
      {path:'receive-mail',component:ReceiveMailUserComponent},
      {path:'update-pwd',component:UpdatePasswordUserComponent},
      {path:'chat',component:ChatComponent},
      {path:'task',component:TaskComponent},
      // {path:'projects',component:ProjectsComponent},
      {path:'project-add',component:ProjectAddComponent},
      {path:'project-list',component:ProjectListComponent},



    ]
  },
  {
    path:'boutique',
    component: AllTemplateUserComponent,
    children:[
      {path:'show',component:BoutiqueListComponent},
    ]
  },
  {
    path:'project-add',
    component: AllTemplateUserComponent,
    children:[
      {path:'project-add',component:ProjectAddComponent},
    ]
  },
  {
    path:'project-list',
    component: AllTemplateUserComponent,
    children:[
      {path:'project-list',component:ProjectListComponent},
    ]
  },
  {
    path:'commande',
    component: AllTemplateUserComponent,
    children:[
      {path:'add',component:AddCommandeComponent},
      {path:'aff',component:AffCommandeComponent},
    ]
  },
  {
    path:'livraison',
    component: AllTemplateAdminComponent,
    children:[
      {path:'',component:LivraisonAdminComponent},
      {path:'add',component:AddLivraisonAdminComponent},
      {path:'aff',component:AffLivraisonAdminComponent},
      {path:'assignLiv',component:AssignLivraisonAdminComponent},
      {path:'detail/:id',component:LivraisonDetailAdminComponent},
      {path:'assign',component:AssignLivreurAdminComponent},

    ]
  },
  {
    path: 'offer',
    component: AllTemplateAdminComponent,
    children: [
      { path: 'all', component:OfferListComponent },
    ]
  },
  {
    path: 'offer',
    component: AllTemplateUserComponent,
    children: [
      { path: 'add', component:AddOfferComponent },
      { path: 'success', component:SuccessPopupComponent }
    ]
  },
  {
    path: 'vendor',
    component: AllTemplateAdminComponent,
    children: [
      { path: 'deals', component:DealsComponent}
    ]
  },
  {
    path: 'contracts',
    component: AllTemplateAdminComponent,
    children: [
      { path: 'all', component:ContractListComponent },
      { path: 'stats', component:BasicStatsComponent },
      { path: 'details/:id', component:ContractDetailsComponent }
    ]
  },
  {
    path:'tender',
    component: AllTemplateAdminComponent,
    children:[
      {path:'add',component:AddTenderComponent},
      {path:'all',component:TenderListComponent},
      { path: 'details/:id', component:TenderDetailsComponent },
      { path: 'update/:id', component:UpdateTenderComponent }

    ]
  },
  {
    path:'categorie',
    component: AllTemplateUserComponent,
    children:[
      {path:'add',component:AjouterCategorieComponent},
    ]
  },
  {
    path:'produit',
    component: AllTemplateUserComponent,
    children:[
      {path:'add',component:AjouterProduitComponent},
      {path:"DetailP/:id1", component:DetailProduitComponent},
    ]
  },
  {
    path:'stock',
    component: AllTemplateUserComponent,
    children:[
      {path:'add',component:AjouterStockComponent},
    ]
  },
  { path: 'checkout/:id', component:CheckoutPaiementComponent },
  { path: 'checkout', component: CheckoutPaiementComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
