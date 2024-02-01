import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { MenuAdminComponent } from './backOffice/menu-admin/menu-admin.component';
import { NavbarAdminComponent } from './backOffice/navbar-admin/navbar-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { NavbarUserComponent } from './frontOffice/navbar-user/navbar-user.component';
import { BannerUserComponent } from './frontOffice/banner-user/banner-user.component';
import { FooterUserComponent } from './frontOffice/footer-user/footer-user.component';
import { RegisterBuyerAdminComponent } from './backOffice/register-buyer-admin/register-buyer-admin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RegisterVendorAdminComponent } from './backOffice/register-vendor-admin/register-vendor-admin.component';
import { RegisterProviderAdminComponent } from './backOffice/register-provider-admin/register-provider-admin.component';
import { RegisterLivreurAdminComponent } from './backOffice/register-livreur-admin/register-livreur-admin.component';
import { RegisterBuyerUserComponent } from './frontOffice/register-buyer-user/register-buyer-user.component';
import { RegisterLivreurUserComponent } from './frontOffice/register-livreur-user/register-livreur-user.component';
import { RegisterProviderUserComponent } from './frontOffice/register-provider-user/register-provider-user.component';
import {SendCodeUserComponent} from "./frontOffice/send-code-user/send-code-user.component";
import {RegisterVendorUserComponent} from "./frontOffice/register-vendor-user/register-vendor-user.component";
import { HomeUserComponent } from './frontOffice/home-user/home-user.component';
import { RegisterUserComponent } from './frontOffice/register-user/register-user.component';
import { PreloaderUserComponent } from './frontOffice/preloader-user/preloader-user.component';
import { AuthenticationUserComponent } from './frontOffice/authentication-user/authentication-user.component';
import { UploadLogoUserComponent } from './frontOffice/upload-logo-user/upload-logo-user.component';
import { HomeBuyerUserComponent } from './frontOffice/home-buyer-user/home-buyer-user.component';
import { HomeLivreurUserComponent } from './frontOffice/home-livreur-user/home-livreur-user.component';
import { HomeProviderUserComponent } from './frontOffice/home-provider-user/home-provider-user.component';
import { HomeVendorUserComponent } from './frontOffice/home-vendor-user/home-vendor-user.component';
import { ShowAdminComponent } from './backOffice/show-admin/show-admin.component';
import { DashboardAdminComponent } from './backOffice/dashboard-admin/dashboard-admin.component';
import { DetailsAdminComponent } from './backOffice/details-admin/details-admin.component';
import {CookieService} from "ngx-cookie-service";
import { ForgotPwdUserComponent } from './frontOffice/forgot-pwd-user/forgot-pwd-user.component';
import { UnsubscribeUserComponent } from './frontOffice/unsubscribe-user/unsubscribe-user.component';
import { Show2AdminComponent } from './backOffice/show2-admin/show2-admin.component';
import {NgxPaginationModule} from "ngx-pagination";
import { QrcodeUserComponent } from './frontOffice/qrcode-user/qrcode-user.component';
import { RegiserAdminComponent } from './backOffice/regiser-admin/regiser-admin.component';
import { SendMailAdminComponent } from './backOffice/send-mail-admin/send-mail-admin.component';
import { SendMailUserComponent } from './frontOffice/send-mail-user/send-mail-user.component';
import { ReceiveMailUserComponent } from './frontOffice/receive-mail-user/receive-mail-user.component';
import { MailAdminComponent } from './backOffice/mail-admin/mail-admin.component';
import { PreloaderAdminComponent } from './backOffice/preloader-admin/preloader-admin.component';
import { UpdatePasswordUserComponent } from './frontOffice/update-password-user/update-password-user.component';
import { Navbar2UserComponent } from './frontOffice/navbar2-user/navbar2-user.component';
import { RegisterAdminUserComponent } from './frontOffice/register-admin-user/register-admin-user.component';
import { BoutiqueListComponent } from './frontOffice/boutique-list/boutique-list.component';
import { AddCommandeComponent } from './frontOffice/add-commande/add-commande.component';
import { AffCommandeComponent } from './frontOffice/aff-commande/aff-commande.component';
import { CheckoutPaiementComponent } from './frontOffice/checkout-paiement/checkout-paiement.component';
import { PaiementComponent } from './frontOffice/paiement/paiement.component';
import { AddLivraisonAdminComponent } from './backOffice/add-livraison-admin/add-livraison-admin.component';
import { AffLivraisonAdminComponent } from './backOffice/aff-livraison-admin/aff-livraison-admin.component';
import { AssignLivraisonAdminComponent } from './backOffice/assign-livraison-admin/assign-livraison-admin.component';
import { AssignLivreurAdminComponent } from './backOffice/assign-livreur-admin/assign-livreur-admin.component';
import { LivraisonDetailAdminComponent } from './backOffice/livraison-detail-admin/livraison-detail-admin.component';
import { LivraisonAdminComponent } from './backOffice/livraison-admin/livraison-admin.component';
import { SuccessPopupComponent } from './backOffice/success-popup/success-popup.component';
import { AddOfferComponent } from './backOffice/add-offer/add-offer.component';
import { AddTenderComponent } from './backOffice/add-tender/add-tender.component';
import { BasicStatsComponent } from './backOffice/basic-stats/basic-stats.component';
import { ContractDetailsComponent } from './backOffice/contract-details/contract-details.component';
import { ContractListComponent } from './backOffice/contract-list/contract-list.component';
import { ContractStatsComponent } from './backOffice/contract-stats/contract-stats.component';
import { DealsComponent } from './backOffice/deals/deals.component';
import { OfferListComponent } from './backOffice/offer-list/offer-list.component';
import { TenderDetailsComponent } from './backOffice/tender-details/tender-details.component';
import { TenderListComponent } from './backOffice/tender-list/tender-list.component';
import { UpdateTenderComponent } from './backOffice/update-tender/update-tender.component';
import {PipesModule} from './pipes.module'
import {AjouterCategorieComponent} from "./frontOffice/ajouter-categorie/ajouter-categorie.component";
import {AjouterProduitComponent} from "./frontOffice/ajouter-produit/ajouter-produit.component";
import {AjouterStockComponent} from "./frontOffice/ajouter-stock/ajouter-stock.component";
import {DetailProduitComponent} from "./frontOffice/detail-produit/detail-produit.component";
import { ProjectsComponent } from './frontOffice/projects/projects.component';
import {ProjectAddComponent } from './frontOffice/projects/project-add/project-add.component'
import { ProjectListComponent } from './frontOffice/projects/project-list/project-list.component';
import {TaskComponent} from  './frontOffice/task/task.component';

import {ChatComponent} from "./frontOffice/chat/chat.component";
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { LightboxModule} from "ngx-lightbox";
import { firebaseConfig } from '../environments/firebaseEnv';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';

// Flat Picker
// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';
import {NotificationComponent} from "./frontOffice/notification/notification.component";
import { initializeApp } from "firebase/app";
initializeApp(firebaseConfig.firebaseConfig);
// import {CreateComponent} from "./frontOffice/projects/create/create.component";
// import {ListComponent} from "./frontOffice/projects/list/list.component";
@NgModule({
  declarations: [
    AppComponent,

    AllTemplateAdminComponent,
    AllTemplateUserComponent,
    MenuAdminComponent,
    NavbarAdminComponent,
    FooterAdminComponent,
    NavbarUserComponent,
    BannerUserComponent,
    FooterUserComponent,
    RegisterBuyerAdminComponent,
    RegisterVendorAdminComponent,
    RegisterProviderAdminComponent,
    RegisterLivreurAdminComponent,
    RegisterBuyerUserComponent,
    RegisterLivreurUserComponent,
    RegisterProviderUserComponent,
    RegisterVendorUserComponent,
    SendCodeUserComponent,
    HomeUserComponent,
    RegisterUserComponent,
    PreloaderUserComponent,
    AuthenticationUserComponent,
    UploadLogoUserComponent,
    HomeBuyerUserComponent,
    HomeLivreurUserComponent,
    HomeProviderUserComponent,
    HomeVendorUserComponent,
    ShowAdminComponent,
    DashboardAdminComponent,
    DetailsAdminComponent,
    ForgotPwdUserComponent,
    UnsubscribeUserComponent,
    Show2AdminComponent,
    QrcodeUserComponent,
    RegiserAdminComponent,
    SendMailAdminComponent,
    SendMailUserComponent,
    ReceiveMailUserComponent,
    MailAdminComponent,
    PreloaderAdminComponent,
    UpdatePasswordUserComponent,
    Navbar2UserComponent,
    RegisterAdminUserComponent,
    BoutiqueListComponent,
    AddCommandeComponent,
    AffCommandeComponent,
    CheckoutPaiementComponent,
    PaiementComponent,
    AddLivraisonAdminComponent,
    AffLivraisonAdminComponent,
    AssignLivraisonAdminComponent,
    AssignLivreurAdminComponent,
    LivraisonDetailAdminComponent,
    LivraisonAdminComponent,
    SuccessPopupComponent,
    AddOfferComponent,
    AddTenderComponent,
    BasicStatsComponent,
    ContractDetailsComponent,
    ContractListComponent,
    ContractStatsComponent,
    DealsComponent,
    OfferListComponent,
    TenderDetailsComponent,
    TenderListComponent,
    UpdateTenderComponent,
    AjouterCategorieComponent,
    AjouterProduitComponent,
    AjouterStockComponent,
    ProjectAddComponent,
    TaskComponent,
    ProjectListComponent,
    ProjectsComponent,
    DetailProduitComponent,
    ChatComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    PipesModule,
    FeatherModule.pick(allIcons),
    SimplebarAngularModule,
    LightboxModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
