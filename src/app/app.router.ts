import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { GraduationComponent } from './pages/graduation/graduation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { TranslateComponent } from './components/translate/translate.component';
import { TemplateComponent } from './pages/template/template.component';
import { StyleGuideComponent } from './pages/style-guide/style-guide.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// Route Configuration
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'skils', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'graduation', component: GraduationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'style-guide', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(routes);