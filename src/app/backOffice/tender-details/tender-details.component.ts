import {Component, OnInit} from '@angular/core';
import {Tender} from "../../models/Tender";
import {ActivatedRoute} from "@angular/router";
import {TenderService} from "../../services/tender.service";

@Component({
  selector: 'app-tender-details',
  templateUrl: './tender-details.component.html',
  styleUrls: ['./tender-details.component.css']
})
export class TenderDetailsComponent implements OnInit {
  tender: Tender | undefined;

  constructor(private route: ActivatedRoute, private tenderService: TenderService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tenderService.getTenderById(+id).subscribe((tender) => {
        this.tender = tender;
      });
    }
  }

}
