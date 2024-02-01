import {Component, OnInit} from '@angular/core';
import {Contract} from "../../models/Contract";
import {ContractService} from "../../services/contract.service";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit{
  contracts: Contract[] = [];
  selectedContract?: Contract;
  error: any;

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.getContracts();
  }

  getContracts(): void {
    this.contractService.getContracts()
      .subscribe(contracts => this.contracts = contracts, error => this.error = error);
  }


  onSelect(contract: Contract): void {
    this.selectedContract = contract;
  }

}
