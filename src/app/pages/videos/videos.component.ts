import { Component } from '@angular/core';
import { VideoCard } from '../../shared/models/video-card';
import { videoCards } from '../../shared/Data/VideosData';
import { VideoCardComponent } from './components/video-card/video-card.component';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [VideoCardComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css',
})
export class VideosComponent {
  //VIDEO CARDS OBJECTS

  videoCards = videoCards;
}
