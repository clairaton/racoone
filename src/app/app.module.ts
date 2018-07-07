import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeComponent } from './recipe/recipe.component'
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { HomeControlComponent } from './home-control/home-control.component';
import { RouterModule,Routes } from '@angular/router';

//import { environment } from './../environments/environment';

const appRoutes:Routes=[
  {path:'',component:HomeControlComponent},
  {path:'shopping-list',component:ShoppingListComponent},
  {path:'recipe',component:RecipeComponent},
  {path:'home-control',component:HomeControlComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'recipe/:id',component:RecipeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    CalendarComponent,
    DropdownDirective,
    HomeControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
