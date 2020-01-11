import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs'; // new
import { Router } from '@angular/router'; // new

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {id: 1, name: "Angular"},
    {id: 2, name: "Node"},
    {id: 3, name: "MongoDB"},
    {id: 4, name: "Roby"},
    {id: 5, name: "Bootstrap"},
  ]

  // new
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // new
  onSelect(department) {
    this.router.navigate(['/departments', department.id]);
  }
}
