import { Component } from '@angular/core';
import {Tender} from "../../models/Tender";
import {TenderService} from "../../services/tender.service";

@Component({
  selector: 'app-add-tender',
  templateUrl: './add-tender.component.html',
  styleUrls: ['./add-tender.component.css']
})
export class AddTenderComponent {
  tender: Tender = new Tender();
  data: any;
  error: any;
  showMessage = false;

  constructor(private tenderService: TenderService) { }

  addTender() {
    this.tenderService.addTender(this.tender).subscribe(
      data => {
        this.data = data;
        console.log(data);
      },
      error => {
        this.error = error;
        console.log(error.error.errorMessage);
      }
    );
  }

  showSuccessMessage() {
    this.showMessage = true;
  }
}
