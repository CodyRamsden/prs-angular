import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './features/about/about.component';
import { UserListComponent } from './features/user-list/user-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailComponent } from './features/user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { VendorListComponent } from './features/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './features/vendor-detail/vendor-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';
import { RequestListComponent } from './features/request-list/request-list.component';
import { MenuComponent } from './core/menu/menu.component';
import { NewUserComponent } from './features/user-new/user-new.component';
import { VendorNewComponent } from './features/vendor-new/vendor-new.component';
import { ProductNewComponent } from './features/product-new/product-new.component';
import { UserEditComponent } from './features/user-edit/user-edit.component';
import { VendorEditComponent } from './features/vendor-edit/vendor-edit.component';
import { ProductEditComponent } from './features/product-edit/product-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserListComponent,
    UserDetailComponent,
    VendorListComponent,
    VendorDetailComponent,
    ProductListComponent,
    ProductDetailComponent,
    RequestListComponent,
    MenuComponent,
    NewUserComponent,
    VendorNewComponent,
    ProductNewComponent,
    UserEditComponent,
    VendorEditComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
