import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRoutedViewAdminComponent } from './components/user/routed/view/admin/admin-user-view-routed/user-routed-view-admin.component';
import { HomeRoutedComponent } from './components/shared/home-routed/home-routed.component';
import { ThreadRoutedViewAdminComponent } from './components/thread/routed/view/admin/thread-routed-view-admin/thread-routed-view-admin.component';
import { ReplyRoutedViewAdminComponent } from './components/reply/routed/view/admin/reply-routed-view-admin/reply-routed-view-admin.component';

const routes: Routes = [
  { path: '', component: HomeRoutedComponent },
  { path: 'home', component: HomeRoutedComponent },
  { path: 'admin/user/view/:id', component: UserRoutedViewAdminComponent },
  { path: 'admin/thread/view/:id', component: ThreadRoutedViewAdminComponent},
  { path: 'admin/reply/view/:id', component: ReplyRoutedViewAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
