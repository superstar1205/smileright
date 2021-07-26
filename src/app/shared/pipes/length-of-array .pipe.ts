import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'lengthOfArray',
    pure: false
})

export class LengthOfArrayPipe implements PipeTransform {

    transform(value: any): number {
        try {
            if (value)
                return value.length;
            else
                return 0
        }
        catch (e) {
            return 0;
        }
    }

}
