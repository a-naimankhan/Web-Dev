import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Album } from '../models/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {
  album: Album | null = null;
  loading = true;

  constructor(private route: ActivatedRoute, private svc: AlbumService, private router: Router) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.svc.getAlbum(id).subscribe((a) => {
        this.album = a;
        this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }

  save() {
    if (!this.album) return;
    this.svc.updateAlbum(this.album).subscribe(() => {
      // After save we can navigate back to albums or keep current page
      this.router.navigate(['/albums']);
    });
  }

  back() {
    this.router.navigate(['/albums']);
  }
}
