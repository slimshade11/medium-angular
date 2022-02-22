import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'global-feed',
    loadChildren: () =>
      import('src/app/global-feed/global-feed.module').then((m) => m.GlobalFeedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
