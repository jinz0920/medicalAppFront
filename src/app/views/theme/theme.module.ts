import { DetailRdvComponent } from './detail-rdv.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CardModule,
  GridModule,
  NavModule,
  UtilitiesModule,
  TabsModule,
  FormModule,
  ButtonModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RdvMedecinComponent } from './rdv-medecin.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    ButtonModule,
    NavModule,
    TabsModule,
    ReactiveFormsModule,
    FormsModule,
    FormModule,
  ],
  declarations: [ColorsComponent, TypographyComponent,RdvMedecinComponent,DetailRdvComponent],
})
export class ThemeModule {}
