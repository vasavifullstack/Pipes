// import { Directive, ElementRef, Renderer2, Input, OnChanges, SimpleChanges,HostListener } from '@angular/core';

// @Directive({
//   selector: '[appDirective]'
// })
// export class DirectiveDirective implements OnChanges {

//   @Input() directiveColor!: string;
//   @Input() background-color!: string;

//   constructor(private elementRef: ElementRef, private renderer: Renderer2) {
//     console.log(this.elementRef);
//     console.log(this.elementRef.nativeElement);
//     //span information because dont apply directly to nativate elements
//     //getting security issues so renderer is used
//     //this.elementRef.nativeElement.style.background='pink';
//     //this.elementRef.nativeElement.style.bold='black';

    
//     // Set initial background color
//     this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'pink');
//   }

//   ngOnChanges(changes: SimpleChanges) {
//     if (changes['directiveColor']) {
//       const newColor = changes['directiveColor'].currentValue;
//       this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor','green');

//     }
//      @HostListener('mouseenter') onMouseEnter() {
//     this.renderer.setStyle(this.elementRef.nativeElement,this.background-color);
//    }

//   }
// }


import { Directive, ElementRef, Renderer2, Input, OnChanges, SimpleChanges, HostListener ,HostBinding} from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective implements OnChanges {

  @Input() directiveColor!: string;
  @Input() backgroundColor!: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // default style
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['directiveColor']) {
      const newColor = changes['directiveColor'].currentValue;
      this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', newColor);
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this.backgroundColor || 'lightblue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'GREY');
  }
  @HostListener('click') onClick() {
      this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'pink');

      this.border = '50px solid yellow';
      this.margin = '100px';
      this.padding = '100px';
}
@HostBinding('style.border')  border !: string;
@HostBinding('style.margin')  margin !: string
@HostBinding('style.padding') padding !: string;
}