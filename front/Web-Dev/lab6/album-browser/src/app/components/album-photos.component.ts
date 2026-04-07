import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  albumId = 0;
  photos: Photo[] = [];
  loading = true;

  constructor(private route: ActivatedRoute, private svc: AlbumService, private router: Router) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumId = id;
    this.svc.getAlbumPhotos(id).subscribe((p) => {
      this.photos = p;
      this.loading = false;
    });
  }

  back() {
    this.router.navigate(['/albums', this.albumId]);
  }
}
