import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'SearchpipePipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(products: Product[], searchTerm: string):Product[]  {
    
    if(!products || !searchTerm){
      return products;
    }   
    return products.filter(prod=>prod.type.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
  }

