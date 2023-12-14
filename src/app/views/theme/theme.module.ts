import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CardModule,
  GridModule,
  NavModule,
  UtilitiesModule,
  TabsModule,
  FormModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule,
    ReactiveFormsModule,
    FormsModule,
    FormModule,
  ],
  declarations: [ColorsComponent, TypographyComponent],
})
export class ThemeModule {}
