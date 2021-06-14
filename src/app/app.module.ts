import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MRForumComponent } from './components/orders-mr/mr-forum.component';
import { MRForumItemComponent } from './components/orders-item-mr/mr-forum-item.component';
import { MRForumDetails } from './components/orders-details-mr/mr-forum-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MRForumComponent,
    MRForumItemComponent,
    MRForumDetails
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
