import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contract} from "../models/Contract";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private baseUrl = 'http://localhost:8075/contracts';

  constructor(private http: HttpClient) { }

  addContract(contract: Contract): Observable<Contract> {
    return this.http.post<Contract>(`${this.baseUrl}/add`, contract);
  }


  getContracts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  getContractBasicStats(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/stats`);
  }

  // Get a single Contract by ID
  getContractById(id: number): Observable<Contract> {
    return this.http.get<Contract>(`${this.baseUrl}/${id}`);
  }


  // Calculate total duration of all contracts
  getTotalDuration(): Observable<number> {
    return this.getContracts().pipe(
      map((contracts) => contracts.reduce((total, contract) => total + contract.duration, 0))
    );
  }

// Count total number of contracts
  getTotalContracts(): Observable<number> {
    return this.getContracts().pipe(
      map((contracts) => contracts.length)
    );
  }
}
