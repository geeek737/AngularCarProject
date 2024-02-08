import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFontSize]',
  standalone: true
})
export class FontSizeDirective {

  el: ElementRef
  constructor(el: ElementRef) { 
    this.el = el;
  }

  setColor(color: string) {
    this.el.nativeElement.style.color = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor('#6a6a6a');
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor('#000');
  }

}
