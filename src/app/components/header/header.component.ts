import { Component, inject } from '@angular/core';
import { GlobalConfigService } from '../../services/global-config.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  globalConfigService = inject(GlobalConfigService);

  openLeftMenu() {
    this.globalConfigService.openLeftMenu();
  }
}
