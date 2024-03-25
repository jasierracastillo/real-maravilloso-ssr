import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { HeaderComponent } from './pages/home/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { VideosComponent } from './pages/videos/videos.component';
import { ContactComponent } from './pages/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    HeaderComponent,
    AlbumsComponent,
    GalleryComponent,
    VideosComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'real-maravilloso';
}
