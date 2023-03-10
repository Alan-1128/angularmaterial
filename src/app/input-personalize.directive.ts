import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appInputPersonalize]'
})
export class InputPersonalizeDirective implements OnInit{

  constructor(private er: ElementRef) { }

  ngOnInit(): void {
    const a = this.er.nativeElement

    console.log(a);
    

  }

}
