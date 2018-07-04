import { Pipe, PipeTransform } from '@angular/core';

import {ApiServeService} from '../services/api-serve.service';
import * as _ from "lodash";
@Pipe({
  name: 'valueHeaders'
})
export class ValueHeadersPipe implements PipeTransform {
  headers: any = []
  constructor( private _ApiServeService:ApiServeService) {

  }
  transform(value: any, args?: any): any {
    this.headers = this._ApiServeService.getHeaders()

    return _.find(this.headers,{'id':value})['value'];
  }

}
