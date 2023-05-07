import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListObjectComponent } from './components/list-object/list-object.component';
import { UlListObjectComponent } from './components/ul-list-object/ul-list-object.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PopupFormComponent } from './components/popup-form/popup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectArticleComponent } from './components/project-article/project-article.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SideNavComponent,
    CardComponent,
    HomeComponent,
    FooterComponent,
    ListObjectComponent,
    UlListObjectComponent,
    LoginComponent,
    PopupFormComponent,
    ProjectArticleComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
