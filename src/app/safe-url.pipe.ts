import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  
  // takes url as a parameter and returns sanitized version to enable use of iframes
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
