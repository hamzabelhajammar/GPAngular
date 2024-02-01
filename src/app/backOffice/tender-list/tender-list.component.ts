import {Component, OnInit} from '@angular/core';
import {Tender} from "../../models/Tender";
import {TenderService} from "../../services/tender.service";

@Component({
  selector: 'app-tender-list',
  templateUrl: './tender-list.component.html',
  styleUrls: ['./tender-list.component.css']
})
export class TenderListComponent implements OnInit {
  tenders: Tender[] = [];
  selectedTender?: Tender;

  constructor(private tenderService: TenderService) { }

  ngOnInit(): void {
    this.getTenders();
  }

  getTenders(): void {
    this.tenderService.getAllTenders()
      .subscribe(tenders => this.tenders = tenders);
  }

  onSelect(tender: Tender): void {
    this.selectedTender = tender;
  }

  deleteTender(tender: Tender) {
    this.tenderService.deleteTender(tender.id).subscribe(() => {
      this.tenders = this.tenders.filter(t => t.id !== tender.id);
    }, error => {
      console.log(error);
    });
  }

}
