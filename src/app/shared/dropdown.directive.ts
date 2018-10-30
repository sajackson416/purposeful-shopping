import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}


/*export class DropdownDirective {

  dropdownOpen = false;
  element;

  constructor(elRef: ElementRef) {
    this.element = elRef.nativeElement.parentElement;
    const self = this;
    this.element.onclick = function () {
      self.toggleDropdown();
    };
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    if (this.dropdownOpen) {
      this.element.classList.add('open');
    } else {
      this.element.classList.remove('open');
    }
  }
}*/
