import { Component, OnInit } from '@angular/core';
import { UtitlityService } from './services/utitlity.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'autocomplete-ang';
  options = [];
  filteredData = [];
  formGroup!: FormGroup;
  constructor(private service: UtitlityService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
    this.getData();
  }

  initForm() {
    this.formGroup = this.fb.group({
      name: [''],
    });
    this.formGroup.get('name')?.valueChanges.subscribe((response) => {
      console.log(response);

      this.filterData(response);
    });
  }

  filterData(enterData: any) {
    this.options = this.filteredData.filter((item: any) => {
      return item.toLowerCase().indexOf(enterData.toLowerCase()) > -1;
    });
  }

  getData() {
    this.service.getData().subscribe((Response) => {
      this.options = Response;
      this.filteredData = Response;
    });
  }
}
