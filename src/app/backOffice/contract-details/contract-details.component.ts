import {Component, OnInit} from '@angular/core';
import jsPDF from "jspdf";
import {Contract} from "../../models/Contract";
import {ActivatedRoute} from "@angular/router";
import {ContractService} from "../../services/contract.service";

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.css']
})
export class ContractDetailsComponent implements OnInit{
  contract: Contract | undefined;
  isHovered = false; // Add the isHovered property here

  constructor(private route: ActivatedRoute, private contractService: ContractService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contractService.getContractById(+id).subscribe((contract) => {
        this.contract = contract;
      });
    }
  }

  downloadPDF(): void {
    const doc = new jsPDF();
    const contract = this.contract;

    if (contract) {
      const contractDetails =
        `Contract number: ${contract.id}
       Price: ${contract.price}
       Quantity: ${contract.quantity}
       Start date: ${contract.startDate}
       End date: ${contract.endDate}
       Duration: ${contract.duration}`;
      doc.text(contractDetails, 10, 10);
      doc.save(`contract_${contract.id}.pdf`);
    }
  }

}
