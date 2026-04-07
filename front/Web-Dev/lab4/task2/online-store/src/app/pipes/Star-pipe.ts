import { Pipe , PipeTransform } from '@angular/core'

@Pipe({
  name : 'stars'
})
export class StarsPipe implements PipeTransform {
  transform(value: number) : string {
    const fullStar = Math.floor(value);
    const halfStar = value % 1 >= 0.5 ? '½' : '';
    const emptyStars = 5 - fullStar - (halfStar ? 1:0);
    return '★'.repeat(fullStar) + halfStar + '★'.repeat(emptyStars);
  }
}
