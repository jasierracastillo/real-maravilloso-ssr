import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { VideosComponent } from './pages/videos/videos.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { title: 'Real Maravilloso | Home', path: '', component: HomeComponent },
  { title: 'Real Maravilloso | Home', path: 'home', component: HomeComponent },
  {
    title: 'Real Maravilloso | Albums',
    path: 'albums',
    component: AlbumsComponent,
  },
  {
    title: 'Real Maravilloso | Videos',
    path: 'videos',
    component: VideosComponent,
  },
  {
    title: 'Real Maravilloso | Gallery',
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    title: 'Real Maravilloso | Contact',
    path: 'contact',
    component: ContactComponent,
  },
];
