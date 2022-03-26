import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { NewUserComponent } from './features/user-new/user-new.component';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { RequestListComponent } from './features/request-list/request-list.component';
import { UserDetailComponent } from './features/user-detail/user-detail.component';
import { UserListComponent } from './features/user-list/user-list.component';
import { VendorDetailComponent } from './features/vendor-detail/vendor-detail.component';
import { VendorListComponent } from './features/vendor-list/vendor-list.component';
import { VendorNewComponent } from './features/vendor-new/vendor-new.component';
import { ProductNewComponent } from './features/product-new/product-new.component';
import { UserEditComponent } from './features/user-edit/user-edit.component';
import { VendorEditComponent } from './features/vendor-edit/vendor-edit.component';
import { ProductEditComponent } from './features/product-edit/product-edit.component';
import { UserAuthenticateComponent } from './features/user-authenticate/user-authenticate.component';
import { ModalComponent } from './modal/modal.component';
import { RequestNewComponent } from './features/request-new/request-new.component';
import { RequestDetailComponent } from './features/request-detail/request-detail.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'user/list', component: UserListComponent },
  { path: 'user/detail/:id', component: UserDetailComponent },
  { path: 'user/new', component: NewUserComponent},
  { path: 'user/edit/:id', component: UserEditComponent},
  { path: 'login', component: UserAuthenticateComponent},
  { path: 'vendor/list', component: VendorListComponent },
  { path: 'vendor/detail/:id', component: VendorDetailComponent },
  { path: 'vendor/new', component: VendorNewComponent },
  { path: 'vendor/edit/:id', component: VendorEditComponent},
  { path: 'product/list', component: ProductListComponent },
  { path: 'product/detail/:id', component: ProductDetailComponent},
  { path: 'product/edit/:id', component: ProductEditComponent},
  { path: 'product/new', component: ProductNewComponent },
  { path: 'request/list', component: RequestListComponent },
  { path: 'request/detail/:id', component: RequestDetailComponent},
  { path: 'request/new', component: RequestNewComponent },
  { path: 'app/modal', component: ModalComponent },
  { path: '**', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
