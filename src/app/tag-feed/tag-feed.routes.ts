import { Routes } from '@angular/router';

import { TagFeedComponent } from 'src/app/tag-feed/tag-feed/tag-feed.component';

export const TagFeedRoutes: Routes = [{ path: 'tags/:slug', component: TagFeedComponent }];
