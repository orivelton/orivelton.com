import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routing } from './app.router';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { GraduationComponent } from './pages/graduation/graduation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { TranslateComponent } from './components/translate/translate.component';
import { TemplateComponent } from './pages/template/template.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProgressComponent } from './components/progress/progress.component';
import { AvatarComponent } from './components/avatar/avatar.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  if (/.+\.\w\w.*/.test(window.location.href)) {
    return new TranslateHttpLoader(http, '/orivelton.com/assets/i18n/', '.json');
  } else {
    return new TranslateHttpLoader(http);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    GraduationComponent,
    ContactComponent,
    LogoComponent,
    MenuComponent,
    TranslateComponent,
    TemplateComponent,
    NotFoundComponent,
    ProgressComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
