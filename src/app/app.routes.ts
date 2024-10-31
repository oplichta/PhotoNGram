import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component'; // Adjust the path as necessary

// Export the routes variable
export const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' }, // Redirect to posts on load
  { path: 'posts', component: PostsComponent }, // Add Posts route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }