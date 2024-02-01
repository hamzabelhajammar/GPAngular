import {Component, OnInit} from '@angular/core';
import {Tender} from "../../models/Tender";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {TenderService} from "../../services/tender.service";

@Component({
  selector: 'app-update-tender',
  templateUrl: './update-tender.component.html',
  styleUrls: ['./update-tender.component.css']
})
export class UpdateTenderComponent implements OnInit {

  tender!: Tender;
  tenderForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    //private router: Router,
    private tenderService: TenderService
  ) { }

  ngOnInit(): void {
    this.tenderForm = this.formBuilder.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.tenderService.getTenderById(id).subscribe(tender => {
      this.tender = tender;
      this.tenderForm.patchValue({
        name: this.tender.name,
        startDate: this.tender.startDate,
        endDate: this.tender.endDate
      });
    });
  }

  onSubmit() {
    if (this.tender) {
      const updatedTender: Tender = {
        id: this.tender.id,
        name: this.tenderForm.value.name,
        startDate: this.tenderForm.value.startDate,
        endDate: this.tenderForm.value.endDate
      };
      this.tenderService.updateTender(this.tender.id, updatedTender).subscribe(() => {
        console.log('Tender updated successfully');
      });
    }
  }


}
