
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { UserRoutedViewAdminComponent } from './components/user/routed/view/admin/admin-user-view-routed/user-routed-view-admin.component';
import { UserUnroutedDetailAdminComponent } from './components/user/routed/view/admin/admin-user-detail-unrouted/user-unrouted-detail-admin.component';
import { HomeRoutedComponent } from './components/shared/home-routed/home-routed.component';
import { MenuUnroutedComponent } from './components/shared/menu-unrouted/menu-unrouted.component';
import { ThreadRoutedViewAdminComponent } from './components/thread/routed/view/admin/thread-routed-view-admin/thread-routed-view-admin.component';
import { ThreadUnroutedDetailAdminComponent } from './components/thread/routed/view/admin/thread-unrouted-detail-admin/thread-unrouted-detail-admin.component';
import { ReplyRoutedViewAdminComponent } from './components/reply/routed/view/admin/reply-routed-view-admin/reply-routed-view-admin.component';
import { ReplyUnroutedDetailAdminComponent } from './components/reply/routed/view/admin/reply-unrouted-detail-admin/reply-unrouted-detail-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeRoutedComponent,
    UserRoutedViewAdminComponent,
    UserUnroutedDetailAdminComponent,
    ThreadRoutedViewAdminComponent,
    MenuUnroutedComponent,
    ThreadUnroutedDetailAdminComponent,
    ReplyRoutedViewAdminComponent,
    ReplyUnroutedDetailAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
