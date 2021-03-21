import { InMemoryReservationService } from './core/services/in-memory-reservation.service';
import { FilterService } from './core/services/filter.service';
import { NotificationService } from './core/services/notification.service';
import { ReservationService } from './core/services/reservation.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { ManagementComponent } from './components/management/management.component';

import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { FilterComponent } from './components/filter/filter.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';

import { HttpClientInMemoryWebApiModule  } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { CalenderSliderComponent } from './components/calender-slider/calender-slider.component';
import { MealSetComponent } from './components/meal-set/meal-set.component';
import { AppRoutingModule } from './app-routing.module';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishComponent } from './components/dish/dish.component';
import { RecommendedSetsComponent } from './components/recommended-sets/recommended-sets.component';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { DishNumberSelectionDialogComponent } from './components/dish-number-selection-dialog/dish-number-selection-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    ManagementComponent,
    FilterComponent,
    KitchenComponent,
    CalenderSliderComponent,
    MealSetComponent,
    DishListComponent,
    DishComponent,
    RecommendedSetsComponent,
    IngredientsListComponent,
    DishNumberSelectionDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    HttpClientModule,
    // TODO Only used in test - remove when ready to pull data from backend
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryReservationService, {dataEncapsulation: false}
    ),
    AppRoutingModule
  ],
  providers: [NotificationService, ReservationService, FilterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
