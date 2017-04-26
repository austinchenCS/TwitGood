import { Component, Input } from '@angular/core';
 
@Component({
  moduleId: module.id,
  selector: 'validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {
  @Input() model : any;
  @Input() messages : string[];
}