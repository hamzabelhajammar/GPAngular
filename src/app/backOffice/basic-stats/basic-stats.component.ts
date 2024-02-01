import {Component, OnInit} from '@angular/core';
import {ContractService} from "../../services/contract.service";

@Component({
  selector: 'app-basic-stats',
  templateUrl: './basic-stats.component.html',
  styleUrls: ['./basic-stats.component.css']
})
export class BasicStatsComponent implements OnInit{
  stats: any[] = [];
  totalDuration!: number;
  totalContracts!: number;
  avgDuration!: number;

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.contractService.getContractBasicStats().subscribe((data: any[]) => {
      const stats = [
        { duration: '3-5', count: 0 },
        { duration: '6-8', count: 0 },
        { duration: '9-11', count: 0 },
        { duration: '12+', count: 0 }
      ];

      data.map((c) => {
        if (c.duration === '3-5') {
          stats[0].count = c.count;
        } else if (c.duration === '6-8') {
          stats[1].count = c.count;
        } else if (c.duration === '9-11') {
          stats[2].count = c.count;
        } else if (c.duration === '12+') {
          stats[3].count = c.count;
        }
      });

      this.stats = stats;
      console.log('test', stats);



      this.contractService.getTotalDuration().subscribe(duration => {
        this.totalDuration = duration;
        this.contractService.getTotalContracts().subscribe(contracts => {
          this.totalContracts = contracts;
          this.avgDuration = this.totalDuration / this.totalContracts;
        });
      });
    });
  }

  getTotalCount(): number {
    let totalCount = 0;
    this.stats.forEach(stat => {
      totalCount += stat.count;
    });
    return totalCount;
  }

}
