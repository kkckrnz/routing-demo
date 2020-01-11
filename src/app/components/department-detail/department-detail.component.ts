import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // with snapshot, the parameter would only be accessed once, when the component loads. Hence, it won't be updated, even if you change its value from within the same component.
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;

    // If you intend to update the URL parameter within the same component, then you have to use a subscription.
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['departments', nextId]);
  }

  goToDepartments() {
    // null check. for what exactly?
    // let selectedID = this.departmentId ? this.departmentId : null;
    let selectedID = this.departmentId;
    this.router.navigate(['departments', {id: selectedID}]);
  }
}
