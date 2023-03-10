import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: 'input[appInputPersonalize]'
})
export class InputPersonalizeDirective implements OnInit{

  constructor(private readonly er: ElementRef) { }
  @HostListener('input', ['$event'])
  onChangeInput(event: Event): void {
    console.log(this.er.nativeElement);
    
  }

  ngOnInit(): void {

  }

}
