import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  fieldId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Capture the id from query parameters
    this.route.queryParams.subscribe(params => {
      this.fieldId = params['id'];
      console.log('Field ID:', this.fieldId);
    });
  }
}
