import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  closeModal() {
    document.querySelector('.modal-container')?.classList.add('hidden');
  }
}
