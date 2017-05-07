import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'escapeHtml', pure: false})
export class EscapeHtmlPipe implements PipeTransform {
   transform(value: any, args: any[] = []) {
       return value;
   }
}