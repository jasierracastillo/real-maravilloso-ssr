import { Component, Input } from '@angular/core';
import { VideoCard } from '../../../../shared/models/video-card';

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.css',
})
export class VideoCardComponent {
  @Input() card_item: VideoCard = <VideoCard>{};
}
