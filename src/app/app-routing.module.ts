import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RichTextComponent } from './components/rich-text/rich-text.component';


const routes: Routes = [
  {
    path: "",
    component: RichTextComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
