import {Component, OnInit} from '@angular/core';
import {Contract} from "../../models/Contract";
import {ContractService} from "../../services/contract.service";
import * as moment from "moment";
import { Chart } from 'chart.js';

@Component({
  selector: 'app-contract-stats',
  templateUrl: './contract-stats.component.html',
  styleUrls: ['./contract-stats.component.css']
})
export class ContractStatsComponent implements OnInit {
  contracts: Contract[] = [];
  chart: any;

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.getContracts();
  }

  getContracts(): void {
    this.contractService.getContracts()
      .subscribe(contracts => {
        this.contracts = contracts;
        this.renderChart();
      });
  }

  renderChart(): void {
    const contractDurations = {
      '3-5 months': 0,
      '6-8 months': 0,
      '9-11 months': 0,
      '1 year or more': 0
    };

    this.contracts.forEach(contract => {

      const startDate = moment(contract.startDate);
      const endDate = moment(contract.endDate);
      const durationInMonths = endDate.diff(startDate, 'months');



      if (durationInMonths >= 3 && durationInMonths <= 5) {
        contractDurations['3-5 months']++;
      } else if (durationInMonths >= 6 && durationInMonths <= 8) {
        contractDurations['6-8 months']++;
      } else if (durationInMonths >= 9 && durationInMonths <= 11) {
        contractDurations['9-11 months']++;
      } else {
        contractDurations['1 year or more']++;
      }
    });

    const labels = Object.keys(contractDurations);
    const values = Object.values(contractDurations);

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('chart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Number of Contracts',
          data: values,
          backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
