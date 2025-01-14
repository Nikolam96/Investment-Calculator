import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentResultsService } from '../investment-results/investment-results.service';
import { type CalculateData } from '../investment-results/investment-results.module';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculateData = inject(InvestmentResultsService).calculateData;
  data = signal<CalculateData>({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 5,
    duration: 10,
  });

  onSubmit() {
    this.calculateData(this.data());
    this.resetForm();
  }

  resetForm() {
    this.data.set({
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 5,
      duration: 10,
    });
  }
}
