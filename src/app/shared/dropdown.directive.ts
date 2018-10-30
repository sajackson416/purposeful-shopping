import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  dropdownOpen = false;
  elRef;

  constructor(elRef: ElementRef) {
    console.log(elRef);
    this.elRef = elRef;
    const self = this;
    elRef.nativeElement.onclick = function () {
      self.toggleDropdown();
    };
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    if (this.dropdownOpen) {
      this.elRef.nativeElement.classList.add('open');
    } else {
      this.elRef.nativeElement.classList.remove('open');
    }
    console.log(this.dropdownOpen);
  }
}
